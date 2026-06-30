"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "State & Data",
    icon: "⚡",
    skills: ["Redux Toolkit", "RTK Query", "React Hooks", "Context API"],
  },
  {
    title: "Backend & DB",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "REST APIs", "Node.js"],
  },
  {
    title: "AI & Integrations",
    icon: "🤖",
    skills: ["Anthropic API", "Apollo.io", "HubSpot API", "GitHub API"],
  },
  {
    title: "Testing",
    icon: "🧪",
    skills: ["Cypress", "Jest", "React Testing Library"],
  },
  {
    title: "Languages & Tools",
    icon: "🛠️",
    skills: ["Python", "C", "C++", "Git", "VS Code", "Jupyter"],
  },
];

export default function Skills() {
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
    <section id="skills" ref={ref} style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label">Tech Stack</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Tools I work with
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal project-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(15,217,180,0.1)",
                  border: "1px solid rgba(15,217,180,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20,
                }}>
                  {group.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0" }}>{group.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
