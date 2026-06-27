'use client'

import { useEffect, useMemo, useState } from "react";

const LEVEL_COLORS = [
  "rgba(255,255,255,0.06)",
  "color-mix(in srgb, var(--accent) 22%, transparent)",
  "color-mix(in srgb, var(--accent) 45%, transparent)",
  "color-mix(in srgb, var(--accent) 70%, transparent)",
  "var(--accent)",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;

function levelFromCount(count) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

function buildWeeks(contributions) {
  if (!contributions.length) return [];

  const sorted = [...contributions].sort((a, b) => (a.date < b.date ? -1 : 1));
  const byDate = new Map(sorted.map((c) => [c.date, c]));
  const lastDate = new Date(`${sorted[sorted.length - 1].date}T00:00:00`);
  const startDate = new Date(lastDate);
  startDate.setMonth(startDate.getMonth() - 5);
  startDate.setDate(1);

  const days = [];
  const leadingEmpty = startDate.getDay();
  for (let i = 0; i < leadingEmpty; i += 1) days.push(null);

  const cursor = new Date(startDate);
  while (cursor <= lastDate) {
    const key = cursor.toISOString().slice(0, 10);
    const entry = byDate.get(key);
    days.push(
      entry
        ? { ...entry, level: entry.level ?? levelFromCount(entry.count) }
        : { date: key, count: 0, level: 0 }
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
  const labels = [];
  let lastMonth = -1;
  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find((d) => d);
    if (!firstDay) return;
    const month = new Date(`${firstDay.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      labels.push({ weekIndex, label: MONTH_LABELS[month] });
      lastMonth = month;
    }
  });
  return labels;
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
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function fetchContributions() {
      setLoading(true);
      setError(false);

      try {
        // GitHub's REST API has no public endpoint for the contribution
        // calendar — it's only available via the authenticated GraphQL API.
        // This mirrors the exact same data already shown publicly on the
        // profile page, with no auth required.
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        if (!res.ok) throw new Error("Contribution request failed");

        const data = await res.json();

        if (mounted) {
          setContributions(data.contributions || []);
          setTotal(data.total?.lastYear ?? null);
        }
      } catch (err) {
        if (mounted) {
          setContributions([]);
          setTotal(null);
          setError(true);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchContributions();
    return () => {
      mounted = false;
    };
  }, [username]);

  const weeks = useMemo(() => buildWeeks(contributions), [contributions]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  const activeToday = useMemo(() => {
    if (!contributions.length) return false;
    const todayKey = new Date().toISOString().slice(0, 10);
    const today = contributions.find((c) => c.date === todayKey);
    return Boolean(today && today.count > 0);
  }, [contributions]);

  const gridWidth = weeks.length * STEP;

  return (
    <div className="flex flex-col gap-2 rounded-md p-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div
            title={activeToday ? "Active today" : "No activity today"}
            className={`h-2.5 w-2.5 rounded-full ${
              activeToday ? "bg-(--accent)" : "bg-gray-500"
            }`}
          />
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-foreground hover:underline"
          >
            {username}
          </a>
        </div>
        {total !== null && (
          <span className="text-xs text-(--muted)">
            {total} contributions in the last year
          </span>
        )}
      </div>

      <div className="overflow-x-auto rounded-md border border-(--border)/20 bg-(--surface)/50 p-3">
        {loading ? (
          <div className="text-xs text-(--muted)">Loading contribution graph…</div>
        ) : error || weeks.length === 0 ? (
          <div className="text-xs text-(--muted)">No public activity found.</div>
        ) : (
          <div className="inline-flex flex-col gap-1">
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
                  <div key={i} style={{ height: CELL, lineHeight: `${CELL}px` }}>
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
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-(--muted)">
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