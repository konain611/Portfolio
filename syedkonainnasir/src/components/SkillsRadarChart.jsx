"use client";

import { useState } from "react";

const skillProfiles = {
  languages: {
    title: "Languages",
    description: "Programming and query languages used in development.",
    axes: [
      { label: "TypeScript", value: 4 },
      { label: "JavaScript", value: 4.5 },
      { label: "Python", value: 3 },
      { label: "SQL", value: 4 },
      { label: "C", value: 3 },
    ],
  },

  frontend: {
    title: "Frontend",
    description: "Modern interfaces, component development, and UI engineering.",
    axes: [
      { label: "Next.js", value: 4.8 },
      { label: "React", value: 4 },
      { label: "HTML", value: 4.5 },
      { label: "CSS", value: 4 },
      { label: "Tailwind CSS", value: 4.5 },
      { label: "shadcn/ui", value: 4.5 },
      { label: "Material UI", value: 4 },
      { label: "Bootstrap", value: 4 },
    ],
  },

  backend: {
    title: "Backend",
    description: "Server-side development, APIs, authentication, and integrations.",
    axes: [
      { label: "Node.js", value: 4 },
      { label: "NestJS", value: 4 },
      { label: "Prisma", value: 4.5 },
      { label: "REST APIs", value: 4.5 },
      { label: "Authentication", value: 4 },
      { label: "OAuth / SSO", value: 4 },
      { label: "API Integration", value: 4 },
      { label: "WebSockets", value: 3 },
      { label: "Rate Limiting", value: 3.5 },
    ],
  },

  database: {
    title: "Database",
    description: "Database design, data persistence, and data management.",
    axes: [
      { label: "PostgreSQL", value: 4.5 },
      { label: "MySQL", value: 3 },
      { label: "Redis", value: 3.5 },
      { label: "Supabase", value: 4 },
      { label: "Data Modeling", value: 4 },
    ],
  },

  tools: {
    title: "Developer Tools",
    description: "Version control, package management, and development workflows.",
    axes: [
      { label: "Git", value: 4.5 },
      { label: "GitHub", value: 4.2 },
      { label: "npm", value: 4.7 },
      { label: "Bun", value: 3.5 },
      { label: "Postman", value: 4 },
      { label: "Docusaurus", value: 4 },
      { label: "Obsidian", value: 4 },
    ],
  },

  infrastructure: {
    title: "Infrastructure & DevOps",
    description: "Application deployment, server management, and delivery workflows.",
    axes: [
      { label: "Linux", value: 3.5 },
      { label: "Windows Server", value: 4 },
      { label: "Nginx", value: 3.5 },
      { label: "PM2", value: 4 },
      { label: "Docker", value: 2.5 },
      { label: "CI/CD", value: 3 },
      { label: "Vercel", value: 4 },
      { label: "Cloudflare", value: 4 },
    ],
  },

  aiEngineering: {
    title: "AI Engineering",
    description: "AI-powered applications, retrieval systems, and agent automation.",
    axes: [
      { label: "Prompt Engineering", value: 4 },
      { label: "RAG", value: 3.5 },
      { label: "AI Agents", value: 3 },
      { label: "AI Automation", value: 3 },
      { label: "Agent Orchestration", value: 3 },
      { label: "MCP", value: 2.5 },
    ],
  },

  architecture: {
    title: "Architecture & Security",
    description: "Application architecture, system design, and secure engineering.",
    axes: [
      { label: "System Design", value: 4 },
      { label: "API Design", value: 4 },
      { label: "Monorepos", value: 4 },
      { label: "Microservices", value: 3.5 },
      { label: "Application Security", value: 3.5 },
      { label: "Authorization", value: 4 },
    ],
  },
};

const profileOrder = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Developer Tools" },
  { key: "infrastructure", label: "Infrastructure & DevOps" },
  { key: "aiEngineering", label: "AI Engineering" },
  { key: "architecture", label: "Architecture & Security" },
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

  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

export default function SkillsRadarChart() {
  const [activeProfile, setActiveProfile] = useState("languages");
  const profile = skillProfiles[activeProfile];
  const angleStep = (Math.PI * 2) / profile.axes.length;

  const points = profile.axes.map((axis, index) => {
    const angle = index * angleStep - Math.PI / 2;
    return polarToCartesian(angle, axis.value);
  });

  const polygonPoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  return (
    <div className="w-[80%] mx-auto my-5 rounded-2xl border border-(--border)/40 bg-background p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-(--muted)">
            Skill profile
          </p>
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
          <svg
            viewBox="0 0 320 320"
            className="mx-auto aspect-square max-h-90 w-full max-w-120"
          >
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
              const textAnchor =
                labelX < center - 4
                  ? "end"
                  : labelX > center + 4
                    ? "start"
                    : "middle";

              return (
                <g key={axis.label}>
                  <line
                    x1={center}
                    y1={center}
                    x2={endX}
                    y2={endY}
                    stroke="color-mix(in srgb, var(--foreground) 24%, transparent)"
                    strokeWidth="1.5"
                  />
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
                    ? "border-(--accent) bg-(--accent)/10 text-foreground"
                    : "border-(--border)/35 bg-background/50 text-(--muted) hover:border-(--accent)/50 hover:text-foreground cursor-pointer"
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
