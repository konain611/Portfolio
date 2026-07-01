"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const LEVEL_COLORS = [
  "rgba(255,255,255,0.06)",
  "color-mix(in srgb, var(--accent) 22%, transparent)",
  "color-mix(in srgb, var(--accent) 45%, transparent)",
  "color-mix(in srgb, var(--accent) 70%, transparent)",
  "var(--accent)",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CELL = 10;
const GAP = 4;
const STEP = CELL + GAP;

const REFRESH_INTERVAL_MS = 6 * 60 * 60 * 1000; // auto-refresh every 6 hours
const MIN_REFETCH_GAP_MS = 5 * 60 * 1000; // ignore extra focus/visibility triggers within 5 min
const MONTHS_TO_SHOW = 7;
const MIN_LABEL_GAP_WEEKS = 3; // minimum spacing so month labels never overlap

function levelFromCount(count) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

// Build a YYYY-MM-DD key from LOCAL date parts. Using toISOString() (as the
// original code did) converts to UTC first, which silently shifts every
// date back by one day for any visitor whose timezone is ahead of UTC
// (e.g. Pakistan, UTC+5). That was the main reason the grid didn't line up.
function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function buildWeeks(contributions) {
  if (!contributions.length) return [];

  const sorted = [...contributions].sort((a, b) => (a.date < b.date ? -1 : 1));
  const byDate = new Map(sorted.map((c) => [c.date, c]));
  const lastDate = new Date(`${sorted[sorted.length - 1].date}T00:00:00`);

  // Last 6 calendar months, ending on the most recent contribution date.
  // IMPORTANT: setDate(1) runs BEFORE setMonth(). Doing it in the other
  // order is the classic day-overflow bug — e.g. subtracting 5 months from
  // Jan 31 can land on a month with only 30 days, which rolls forward into
  // the wrong month entirely.
  const startDate = new Date(lastDate);
  startDate.setDate(1);
  startDate.setMonth(startDate.getMonth() - (MONTHS_TO_SHOW - 1));

  const days = [];
  const leadingEmpty = startDate.getDay();
  for (let i = 0; i < leadingEmpty; i += 1) days.push(null);

  const cursor = new Date(startDate);
  while (cursor <= lastDate) {
    const key = toDateKey(cursor);
    const entry = byDate.get(key);
    days.push(
      entry
        ? { ...entry, level: entry.level ?? levelFromCount(entry.count) }
        : { date: key, count: 0, level: 0 },
    );
    cursor.setDate(cursor.getDate() + 1);
  }

  while (days.length % 7 !== 0) days.push(null);

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function getMonthLabels(weeks) {
  const raw = [];
  let lastMonth = -1;
  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find((d) => d);
    if (!firstDay) return;
    const month = new Date(`${firstDay.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      raw.push({ weekIndex, label: MONTH_LABELS[month] });
      lastMonth = month;
    }
  });

  // The grid can start mid-week, so the very first month sometimes only
  // occupies a sliver of columns before the next month's label appears —
  // that's what was causing the two names to render on top of each other.
  // When two labels are closer together than MIN_LABEL_GAP_WEEKS, drop the
  // earlier (partial) one and keep the later, more fully-visible month.
  return raw.filter((entry, i) => {
    const next = raw[i + 1];
    return !(next && next.weekIndex - entry.weekIndex < MIN_LABEL_GAP_WEEKS);
  });
}

function formatDate(dateKey) {
  return new Date(`${dateKey}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function GithubStats({ username = "konain611" }) {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mountedRef = useRef(false);
  const lastFetchRef = useRef(0);
  const firstLoadRef = useRef(true);

  const fetchContributions = useCallback(
    async (force = false) => {
      const now = Date.now();
      if (!force && now - lastFetchRef.current < MIN_REFETCH_GAP_MS) return;
      lastFetchRef.current = now;

      // Only show the "Loading…" state on the very first fetch, so the
      // background 6-hour refresh doesn't make the grid flicker/disappear.
      if (firstLoadRef.current) setLoading(true);
      setError(false);

      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last&cacheBuster=${now}`,
          {
            cache: "no-store",
            headers: {
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          },
        );

        if (!res.ok) throw new Error("Contribution request failed");
        const data = await res.json();

        if (mountedRef.current) {
          setContributions(data.contributions || []);
        }
      } catch (err) {
        if (mountedRef.current) {
          setContributions([]);
          setError(true);
        }
      } finally {
        if (mountedRef.current) setLoading(false);
        firstLoadRef.current = false;
      }
    },
    [username],
  );

  useEffect(() => {
    mountedRef.current = true;
    fetchContributions(true);

    const intervalId = window.setInterval(() => {
      fetchContributions(true);
    }, REFRESH_INTERVAL_MS);

    const handleFocus = () => fetchContributions();
    const handleVisibility = () => {
      if (document.visibilityState === "visible") fetchContributions();
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      mountedRef.current = false;
      window.clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [fetchContributions]);

  const weeks = useMemo(() => buildWeeks(contributions), [contributions]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);
  const visibleTotal = useMemo(
    () => weeks.flat().reduce((sum, day) => sum + (day ? day.count : 0), 0),
    [weeks],
  );

  const activeToday = useMemo(() => {
    if (!contributions.length) return false;
    const todayKey = toDateKey(new Date());
    const today = contributions.find((c) => c.date === todayKey);
    return Boolean(today && today.count > 0);
  }, [contributions]);

  const gridWidth = weeks.length * STEP;

  return (
    <div className="flex flex-col gap-2 rounded-md p-2">
      <div className="flex items-start justify-between gap-2 pb-5">
        <div>
          <div className="text-sm uppercase tracking-[0.4em] text-foreground">
            <span className="mr-2">
              <i className="ri-github-fill text-lg text-(--accent)" />
            </span>
            GitHub Activity
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Link
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-(--border)/40 px-3 py-1.5 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div
                  title={activeToday ? "Active today" : "Inactive today"}
                  className={`h-2 w-2 rounded-full ${
                    activeToday ? "bg-(--accent)" : "bg-gray-500"
                  }`}
                />
                <span className="mx-2 font-medium">{username}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-end px-1 pb-1">
        {weeks.length > 0 && (
          <div className="text-xs text-(--muted)">
            {visibleTotal} contributions in the last {MONTHS_TO_SHOW} months
          </div>
        )}
      </div>
      <div className="overflow-x-auto flex items-end rounded-md bg-(--surface)/5 border border-(--border)/20 p-3">
        {loading ? (
          <div className="text-xs text-(--muted)">
            Loading contribution graph…
          </div>
        ) : error || weeks.length === 0 ? (
          <div className="text-xs text-(--muted)">
            No public activity found.
          </div>
        ) : (
          <div className="inline-flex flex-col gap-1 ">
            <div className="flex">
              <div style={{ width: 22 }} />
              <div className="relative h-3" style={{ width: gridWidth }}>
                {monthLabels.map(({ weekIndex, label }) => (
                  <span
                    key={weekIndex}
                    className="absolute text-[10px] text-(--muted)"
                    style={{ left: weekIndex * STEP }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex">
              <div
                className="flex flex-col text-[10px] text-(--muted)"
                style={{ width: 22, gap: GAP }}
              >
                {DAY_LABELS.map((label, i) => (
                  <div
                    key={i}
                    style={{ height: CELL, lineHeight: `${CELL}px` }}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex" style={{ gap: GAP }}>
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                    {week.map((day, di) =>
                      day ? (
                        <div
                          key={di}
                          title={`${day.count} contribution${
                            day.count === 1 ? "" : "s"
                          } on ${formatDate(day.date)}`}
                          className="rounded-xs"
                          style={{
                            width: CELL,
                            height: CELL,
                            backgroundColor: LEVEL_COLORS[day.level],
                          }}
                        />
                      ) : (
                        <div key={di} style={{ width: CELL, height: CELL }} />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end gap-1 text-[10px] text-(--muted)">
              <span>Less</span>
              {LEVEL_COLORS.map((color, i) => (
                <div
                  key={i}
                  className="rounded-xs"
                  style={{ width: CELL, height: CELL, backgroundColor: color }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}