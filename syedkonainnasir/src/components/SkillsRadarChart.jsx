'use client';

import { useState } from 'react';

const skillProfiles = {
  languages: {
    title: 'Languages',
    description: 'Core programming languages used in development work.',
    axes: [
      { label: 'TypeScript', value: 5 },
      { label: 'JavaScript', value: 5 },
      { label: 'Python', value: 4 },
      { label: 'C', value: 3 },
    ],
  },
  frontend: {
    title: 'Frontend',
    description: 'Modern interface build and UI engineering strengths.',
    axes: [
      { label: 'Next.js', value: 5 },
      { label: 'React', value: 5 },
      { label: 'HTML', value: 5 },
      { label: 'CSS', value: 4 },
      { label: 'Tailwind', value: 5 },
    ],
  },
  backend: {
    title: 'Backend',
    description: 'Server-side systems, APIs, and application logic.',
    axes: [
      { label: 'Node.js', value: 4 },
      { label: 'Express', value: 4 },
      { label: 'REST APIs', value: 5 },
      { label: 'Auth', value: 4 },
      { label: 'Payments', value: 3 },
    ],
  },
  database: {
    title: 'Database',
    description: 'Data modeling, persistence, and database tooling.',
    axes: [
      { label: 'PostgreSQL', value: 4 },
      { label: 'MySQL', value: 3 },
      { label: 'Prisma', value: 4 },
      { label: 'Schema Design', value: 4 },
      { label: 'Queries', value: 4 },
    ],
  },
  tools: {
    title: 'Tools',
    description: 'Developer utilities and delivery workflows.',
    axes: [
      { label: 'Git', value: 5 },
      { label: 'Postman', value: 4 },
      { label: 'Nginx', value: 3 },
      { label: 'npm', value: 5 },
      { label: 'Yarn', value: 3 },
    ],
  },
  cloud: {
    title: 'Cloud & DevOps',
    description: 'Deployment, hosting, and automation practices.',
    axes: [
      { label: 'Cloudflare', value: 4 },
      { label: 'SSL', value: 4 },
      { label: 'Linux', value: 4 },
      { label: 'CI/CD', value: 4 },
      { label: 'Docker', value: 3 },
    ],
  },
  concepts: {
    title: 'Concepts',
    description: 'Product engineering focus areas and architecture knowledge.',
    axes: [
      { label: 'AI Agents', value: 4 },
      { label: 'Prompt Eng.', value: 4 },
      { label: 'RAG', value: 4 },
      { label: 'System Design', value: 4 },
      { label: 'Security', value: 4 },
    ],
  },
};

const profileOrder = [
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'concepts', label: 'Concepts' },
];

const maxValue = 5;
const center = 160;
const radius = 118;
const levels = 5;

function polarToCartesian(angle, value) {
  const scaledRadius = (value / maxValue) * radius;
  return {
    x: center + Math.cos(angle) * scaledRadius,
    y: center + Math.sin(angle) * scaledRadius,
  };
}

function buildGridPolygon(axes, level) {
  const angleStep = (Math.PI * 2) / axes.length;
  const points = axes.map((_, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const scaled = (level / levels) * radius;
    return {
      x: center + Math.cos(angle) * scaled,
      y: center + Math.sin(angle) * scaled,
    };
  });

  return points.map((point) => `${point.x},${point.y}`).join(' ');
}

export default function SkillsRadarChart() {
  const [activeProfile, setActiveProfile] = useState('languages');
  const profile = skillProfiles[activeProfile];
  const angleStep = (Math.PI * 2) / profile.axes.length;

  const points = profile.axes.map((axis, index) => {
    const angle = index * angleStep - Math.PI / 2;
    return polarToCartesian(angle, axis.value);
  });

  const polygonPoints = points.map((point) => `${point.x},${point.y}`).join(' ');

  return (
    <div className="w-[80%] mx-auto my-5 rounded-2xl border border-(--border)/40 bg-background p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-(--muted)">Skill profile</p>
          <h2 className="text-lg font-semibold text-(--accent)">
            {profile.title}
          </h2>
        </div>
        <div className="rounded-full border border-(--border)/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-(--muted)">
          Interactive
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr] xl:items-start">
        <div className="rounded-2xl border border-(--border)/35 bg-background/50 p-3 md:p-4">
          <svg viewBox="0 0 320 320" className="mx-auto aspect-square max-h-90 w-full max-w-120">
            {[...Array(levels)].map((_, level) => (
              <polygon
                key={level}
                points={buildGridPolygon(profile.axes, level + 1)}
                fill="none"
                stroke="color-mix(in srgb, var(--foreground) 16%, transparent)"
                strokeWidth="1"
              />
            ))}

            {profile.axes.map((axis, index) => {
              const angle = index * angleStep - Math.PI / 2;
              const endX = center + Math.cos(angle) * radius;
              const endY = center + Math.sin(angle) * radius;
              const labelRadius = radius + 28;
              const labelX = center + Math.cos(angle) * labelRadius;
              const labelY = center + Math.sin(angle) * labelRadius;
              const textAnchor = labelX < center - 4 ? 'end' : labelX > center + 4 ? 'start' : 'middle';

              return (
                <g key={axis.label}>
                  <line x1={center} y1={center} x2={endX} y2={endY} stroke="color-mix(in srgb, var(--foreground) 24%, transparent)" strokeWidth="1.5" />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    fontSize="11"
                    fontWeight="600"
                    fill="var(--muted)"
                  >
                    {axis.label}
                  </text>
                </g>
              );
            })}

            <polygon
              points={polygonPoints}
              fill="color-mix(in srgb, var(--accent) 28%, transparent)"
              stroke="var(--accent)"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />

            {points.map((point, index) => (
              <circle
                key={profile.axes[index].label}
                cx={point.x}
                cy={point.y}
                r="4.8"
                fill="var(--accent)"
                stroke="var(--surface)"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>

        <div className="space-y-2">
          {profileOrder.map((item) => {
            const active = item.key === activeProfile;
            const itemProfile = skillProfiles[item.key];

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveProfile(item.key)}
                className={`w-full rounded-xl border px-3 py-3 text-left transition ${
                  active
                    ? 'border-(--accent) bg-(--accent)/10 text-foreground'
                    : 'border-(--border)/35 bg-background/50 text-(--muted) hover:border-(--accent)/50 hover:text-foreground cursor-pointer'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-(--accent)">
                    {itemProfile.axes.length} metrics
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}