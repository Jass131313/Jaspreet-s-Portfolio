"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Alumni Training & Placement Portal",
    description:
      "Full-stack portal for managing student placements, job listings, training programs, and company relationships. Role-based access for TPO, alumni, and students with real-time data sync.",
    stack: ["Next.js 15", "Redux Toolkit", "RTK Query", "TypeScript", "MongoDB", "Tailwind"],
    highlights: ["5 RTK Query API slices", "Role-based access control", "TypeScript strict mode"],
    gradient: "linear-gradient(135deg, #0fd9b4, #06b6d4)",
    icon: "🎓",
    liveUrl: "https://training-placement-portal-opal.vercel.app/alumni/dashboard",
    githubUrl: null,
  },
  {
    title: "CivicFix — Civic Issue Reporting Platform",
    description:
      "A civic engagement platform enabling citizens to report and track local infrastructure issues, with a municipality-level dashboard for issue management and resolution tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cypress", "Jest"],
    highlights: ["Full E2E test coverage", "Admin dashboard", "Real-time status tracking"],
    gradient: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
    icon: "🏙️",
    liveUrl: "https://civicfix-alpha.vercel.app/",
    githubUrl: null,
  },
  {
    title: "AI Sales Agent (Claude-powered)",
    description:
      "Multi-platform AI sales automation agent for Nugen I.T. Services. Uses Claude for intelligent lead qualification and outreach, integrating Apollo.io, GitHub, and HubSpot.",
    stack: ["Anthropic API", "Apollo.io", "HubSpot API", "GitHub API", "Next.js"],
    highlights: ["AI-driven lead scoring", "Multi-API orchestration", "CRM pipeline sync"],
    gradient: "linear-gradient(135deg, #8b5cf6, #0fd9b4)",
    icon: "🤖",
    liveUrl: null,
    githubUrl: null,
    inProgress: true,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 24px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label">Featured Work</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Things I&apos;ve built
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((p, i) => (
            <div key={p.title} className="reveal project-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {/* Icon block */}
                <div
                  style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: p.gradient,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28, flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 260 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: "#e2e8f0" }}>{p.title}</h3>
                    {p.inProgress && (
                      <span style={{
                        fontSize: 10.5, fontWeight: 600, padding: "3px 10px",
                        borderRadius: 99, background: "rgba(251,191,36,0.1)",
                        border: "1px solid rgba(251,191,36,0.3)", color: "#fbbf24",
                        textTransform: "uppercase", letterSpacing: "0.05em",
                      }}>
                        In Progress
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 16 }}>{p.description}</p>

                  {/* Highlights */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 16 }}>
                    {p.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "#64748b" }}>
                        <span style={{ color: "#0fd9b4" }}>✓</span> {h}
                      </div>
                    ))}
                  </div>

                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: (p.liveUrl || p.githubUrl) ? 18 : 0 }}>
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 11.5, fontWeight: 500, padding: "4px 12px",
                          borderRadius: 99, background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border)", color: "#94a3b8",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(p.liveUrl || p.githubUrl) && (
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            fontSize: 13, fontWeight: 600, color: "#0a0e1a",
                            background: p.gradient, padding: "8px 18px", borderRadius: 8,
                            textDecoration: "none", transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(15,217,180,0.25)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                        >
                          Live Demo
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            fontSize: 13, fontWeight: 600, color: "#e2e8f0",
                            background: "transparent", border: "1px solid var(--border)",
                            padding: "8px 18px", borderRadius: 8,
                            textDecoration: "none", transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0fd9b4"; e.currentTarget.style.color = "#0fd9b4"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "#e2e8f0"; }}
                        >
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                          </svg>
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}