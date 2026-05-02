import Head from "next/head";
import { useState, useEffect, useRef } from "react";

const ROLES = [
  "System & Platform Engineer",
  "DevOps Automation Specialist",
  "Game Developer",
  "Infrastructure Architect",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Portfolio() {
  const role = useTypewriter(ROLES);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <Head>
        <title>Nutpapop Yasawut — Portfolio</title>
        <meta name="description" content="System & Platform Engineer | Game Developer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080c0a;
          --bg2: #0e1410;
          --bg3: #141a15;
          --surface: #1a2219;
          --surface2: #1f2b21;
          --border: #2a3d2d;
          --accent: #3dff6e;
          --accent2: #00c9ff;
          --accent3: #ff6b35;
          --text: #e8f0e9;
          --text2: #8fa893;
          --text3: #5a7260;
          --font-display: 'Syne', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.7;
          overflow-x: hidden;
        }

        ::selection { background: var(--accent); color: #000; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        /* Nav */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: rgba(8, 12, 10, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }

        .nav-logo {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent);
          letter-spacing: 0.05em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text2);
          transition: color 0.2s;
          text-transform: uppercase;
        }

        .nav-links a:hover,
        .nav-links a.active { color: var(--accent); }

        .nav-hamburger {
          display: none;
          background: none;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 0.4rem 0.6rem;
          cursor: pointer;
          font-size: 16px;
        }

        /* Hero */
        #hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 2rem 4rem;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.25;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(61,255,110,0.06) 0%, transparent 70%);
          top: 50%; left: 40%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .hero-tag::before {
          content: '';
          display: inline-block;
          width: 20px; height: 1px;
          background: var(--accent);
        }

        h1 {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6.5rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .h1-name { color: var(--text); }
        .h1-dot { color: var(--accent); }

        .hero-role {
          font-family: var(--font-mono);
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          color: var(--accent2);
          margin-bottom: 2rem;
          min-height: 2rem;
        }

        .cursor {
          display: inline-block;
          width: 2px; height: 1.1em;
          background: var(--accent2);
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: text-bottom;
        }

        @keyframes blink { 50% { opacity: 0; } }

        .hero-intro {
          font-size: 13px;
          color: var(--text2);
          max-width: 600px;
          line-height: 1.9;
          margin-bottom: 3rem;
          border-left: 2px solid var(--border);
          padding-left: 1.5rem;
        }

        .hero-intro em {
          color: var(--accent);
          font-style: normal;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: var(--accent);
          color: #000;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }

        .btn-primary:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(61,255,110,0.3);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: transparent;
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }

        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        /* Sections */
        section {
          padding: 6rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
        }

        /* Experience */
        .exp-list { display: flex; flex-direction: column; gap: 2px; }

        .exp-item {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid var(--border);
          background: var(--bg2);
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .exp-item:hover { border-color: var(--accent); }

        .exp-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1.75rem 2rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .exp-co {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.25rem;
        }

        .exp-role {
          font-size: 12px;
          color: var(--accent2);
          letter-spacing: 0.05em;
        }

        .exp-period {
          font-size: 11px;
          color: var(--text3);
          white-space: nowrap;
          margin-top: 4px;
        }

        .exp-body {
          padding: 0 2rem 1.75rem;
          color: var(--text2);
          font-size: 13px;
          line-height: 1.8;
        }

        .exp-metrics {
          display: flex;
          gap: 2rem;
          margin-top: 1.25rem;
          flex-wrap: wrap;
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .metric-val {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
        }

        .metric-label {
          font-size: 11px;
          color: var(--text3);
          letter-spacing: 0.05em;
        }

        /* Projects */
        .pillar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2px;
        }

        .pillar {
          background: var(--bg2);
          border: 1px solid var(--border);
          padding: 2rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .pillar::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--pillar-color, var(--accent));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s;
        }

        .pillar:hover::before { transform: scaleX(1); }
        .pillar:hover { border-color: var(--pillar-color, var(--accent)); }

        .pillar-icon {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .pillar-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pillar-color, var(--accent));
          margin-bottom: 0.5rem;
        }

        .pillar-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--text);
        }

        .project-item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }

        .project-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .project-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-name a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }

        .project-name a:hover { color: var(--pillar-color, var(--accent)); }

        .project-name .ext-icon {
          font-size: 10px;
          opacity: 0.5;
        }

        .project-desc {
          font-size: 12px;
          color: var(--text2);
          line-height: 1.7;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.75rem;
        }

        .tag {
          font-size: 10px;
          padding: 2px 8px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text3);
          letter-spacing: 0.05em;
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2px;
        }

        .skill-group {
          background: var(--bg2);
          border: 1px solid var(--border);
          padding: 1.75rem;
        }

        .skill-group-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }

        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 13px;
          color: var(--text2);
        }

        .skill-item::before {
          content: '▸';
          color: var(--accent);
          font-size: 10px;
          flex-shrink: 0;
        }

        /* Contact */
        #contact {
          text-align: center;
        }

        .contact-card {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          background: var(--bg2);
          border: 1px solid var(--border);
          padding: 4rem 3rem;
          max-width: 560px;
          width: 100%;
          position: relative;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
        }

        .contact-email {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-email:hover { color: var(--accent); }

        .contact-links {
          display: flex;
          gap: 1.5rem;
        }

        .contact-link {
          font-size: 12px;
          color: var(--text2);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }

        .contact-link:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        /* Footer */
        footer {
          border-top: 1px solid var(--border);
          padding: 2rem;
          text-align: center;
          font-size: 11px;
          color: var(--text3);
          letter-spacing: 0.05em;
        }

        /* Divider */
        .full-divider {
          width: 100%;
          height: 1px;
          background: var(--border);
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.7s ease both;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.35s; }
        .delay-4 { animation-delay: 0.5s; }
        .delay-5 { animation-delay: 0.65s; }

        /* Responsive */
        @media (max-width: 640px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-links.open {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 57px; left: 0; right: 0;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
            padding: 1.5rem 2rem;
            gap: 1.25rem;
          }
          section { padding: 4rem 1.25rem; }
          .exp-header { flex-direction: column; }
          .contact-card { padding: 3rem 1.5rem; }
          .contact-links { flex-wrap: wrap; justify-content: center; }
        }

        /* Status dot */
        .status-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <span className="status-dot" style={{ marginRight: "8px" }} />
          NW
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={activeSection === l.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-tag fade-up">
            <span className="status-dot" />
            Available for opportunities
          </div>
          <h1 className="fade-up delay-1">
            <span className="h1-name">Nutpapop</span>
            <br />
            <span className="h1-name">Yasawut</span>
            <span className="h1-dot">.</span>
          </h1>
          <div className="hero-role fade-up delay-2">
            <span>{role}</span>
            <span className="cursor" />
          </div>
          <p className="hero-intro fade-up delay-3">
            I grew up pressing buttons on gamepads before I knew how to type, and I never stopped
            wondering what was happening inside the machine. That curiosity led me to build servers,
            automate workflows, and ship games under{" "}
            <em>48-hour Game Jam deadlines</em>. Today I sit at the intersection of
            robust <em>DevOps infrastructure</em> and rapid <em>game prototyping</em> — two worlds
            that reward the same instinct: make it work, make it fast, make it ship.
          </p>
          <div className="hero-ctas fade-up delay-4">
            <a className="btn-primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              ↓ View Resume
            </a>
            <a
              className="btn-secondary"
              href="https://github.com/winth03"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⌥ GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="full-divider" />

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-label">02 / Experience</div>
        <h2 className="section-title">Real-World Proof</h2>

        <div className="exp-list">
          {/* Cybertron */}
          <div className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-co">Cybertron Co., Ltd.</div>
                <div className="exp-role">Cybersecurity Analyst Intern</div>
              </div>
              <div className="exp-period">2024</div>
            </div>
            <div className="exp-body">
              Designed and deployed AI-driven automation pipelines using{" "}
              <strong style={{ color: "var(--text)" }}>n8n</strong> to streamline security
              operations. Integrated multiple Threat Intelligence APIs via REST to automatically
              enrich alerts, triage incidents, and trigger remediation workflows — replacing manual
              SOC processes.
              <div className="exp-metrics">
                <div className="metric">
                  <span className="metric-val">75%</span>
                  <span className="metric-label">MTTR Reduction</span>
                </div>
                <div className="metric">
                  <span className="metric-val">90%</span>
                  <span className="metric-label">Faster Threat Intel</span>
                </div>
              </div>
            </div>
          </div>

          {/* SCG */}
          <div className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-co">Siam Cement Group (SCG)</div>
                <div className="exp-role">Freelance Full Stack Developer</div>
              </div>
              <div className="exp-period">2023</div>
            </div>
            <div className="exp-body">
              Built a <strong style={{ color: "var(--text)" }}>Django / MySQL</strong> REST API to
              digitize and migrate over{" "}
              <strong style={{ color: "var(--accent)" }}>100+ legacy records</strong> from
              paper-based systems. Eliminated manual data-entry errors and gave the team a
              queryable, maintainable backend for the first time.
            </div>
          </div>
        </div>
      </section>

      <div className="full-divider" />

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">03 / Projects</div>
        <h2 className="section-title">Three Pillars</h2>

        <div className="pillar-grid">
          {/* Pillar A */}
          <div className="pillar" style={{ "--pillar-color": "var(--accent)" } as React.CSSProperties}>
            <div className="pillar-icon">⚙</div>
            <div className="pillar-label">Pillar A</div>
            <div className="pillar-title">Automation & Systems</div>

            <div className="project-item">
              <div className="project-name">
                <a
                  href="https://www.npmjs.com/package/@winth03/n8n-nodes-minio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @winth03/n8n-nodes-minio
                </a>
                <span className="ext-icon">↗</span>
              </div>
              <div className="project-desc">
                Published npm package adding MinIO object-storage nodes to n8n. Proves I don't just
                consume tools — I extend them for the community.
              </div>
              <div className="tag-list">
                <span className="tag">n8n</span>
                <span className="tag">MinIO</span>
                <span className="tag">TypeScript</span>
                <span className="tag">npm</span>
              </div>
            </div>

            <div className="project-item">
              <div className="project-name">Smart Camera Lot System</div>
              <div className="project-desc">
                ESP32-CAM module integrated with OpenCV for object detection and Node-RED for
                real-time event orchestration and alerting.
              </div>
              <div className="tag-list">
                <span className="tag">ESP32</span>
                <span className="tag">OpenCV</span>
                <span className="tag">Node-RED</span>
              </div>
            </div>
          </div>

          {/* Pillar B */}
          <div className="pillar" style={{ "--pillar-color": "var(--accent2)" } as React.CSSProperties}>
            <div className="pillar-icon">🎮</div>
            <div className="pillar-label">Pillar B</div>
            <div className="pillar-title">Game Development</div>

            <div className="project-item">
              <div className="project-name">
                <a
                  href="https://itch.io/c/2043632/game-jams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game Jam Collection
                </a>
                <span className="ext-icon">↗</span>
              </div>
              <div className="project-desc">
                Multiple games shipped under 48-hour deadlines across Ludum Dare and itch.io jams.
                Rapid prototyping under pressure — the most honest test of engineering instinct.
              </div>
              <div className="tag-list">
                <span className="tag">Godot</span>
                <span className="tag">Unity</span>
                <span className="tag">C#</span>
                <span className="tag">itch.io</span>
              </div>
            </div>
          </div>

          {/* Pillar C */}
          <div className="pillar" style={{ "--pillar-color": "var(--accent3)" } as React.CSSProperties}>
            <div className="pillar-icon">🖥</div>
            <div className="pillar-label">Pillar C</div>
            <div className="pillar-title">Infrastructure & Homelab</div>

            <div className="project-item">
              <div className="project-name">Personal Homelab</div>
              <div className="project-desc">
                Self-managed server stack running personal game servers, WireGuard VPN, Home
                Assistant, and containerized services. Real-world networking and stability
                experience — no classroom required.
              </div>
              <div className="tag-list">
                <span className="tag">Docker</span>
                <span className="tag">Linux</span>
                <span className="tag">WireGuard</span>
                <span className="tag">Home Assistant</span>
                <span className="tag">Cloudflare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="full-divider" />

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label">04 / Skills</div>
        <h2 className="section-title">Technical Arsenal</h2>

        <div className="skills-grid">
          <div className="skill-group">
            <div className="skill-group-label">Infrastructure & Cloud</div>
            <div className="skill-items">
              {["Docker", "Virtual Machines", "Linux", "Azure", "Cloudflare Tunnel"].map((s) => (
                <div key={s} className="skill-item">{s}</div>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-label">Automation</div>
            <div className="skill-items">
              {["n8n", "Node-RED", "GitHub Actions", "REST API Integration"].map((s) => (
                <div key={s} className="skill-item">{s}</div>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-label">Backend & Languages</div>
            <div className="skill-items">
              {["Python", "TypeScript", "Node.js", "Django", "C#", "MySQL"].map((s) => (
                <div key={s} className="skill-item">{s}</div>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-label">Game Dev</div>
            <div className="skill-items">
              {["Godot Engine", "Unity", "C# Scripting", "Rapid Prototyping", "Game Jam shipping"].map((s) => (
                <div key={s} className="skill-item">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="full-divider" />

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label" style={{ justifyContent: "center" }}>05 / Contact</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>Let's Talk</h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="contact-card">
            <p style={{ fontSize: "13px", color: "var(--text2)", maxWidth: "380px", textAlign: "center" }}>
              Open to full-time roles, internships, and interesting collaborations. I reply to
              everything.
            </p>
            <a className="contact-email" href="mailto:nutpapop.win@gmail.com">
              nutpapop.win@gmail.com
            </a>
            <div className="contact-links">
              <a
                className="contact-link"
                href="https://github.com/winth03"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="contact-link"
                href="https://itch.io/c/2043632/game-jams"
                target="_blank"
                rel="noopener noreferrer"
              >
                itch.io
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span style={{ color: "var(--accent)" }}>Nutpapop Yasawut</span> — Built with Next.js · Deployed on Vercel
        <br />
        <span style={{ opacity: 0.5 }}>System Engineer · Game Dev · Infrastructure Nerd</span>
      </footer>
    </>
  );
}
