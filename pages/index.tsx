import { useEffect, useRef, useState } from "react";

import { Navbar } from "../components/Navbar";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

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

  return (
    <>
      <Navbar activeSection={activeSection} />

      <main>
        {/* HERO */}
        <section id="hero">
          <p className="hero-intro">Hi - My name is</p>
          <h1 className="hero-title">Nutpapop Yasawut.</h1>
          <p className="hero-description">
            I’ve always loved games, but I was just as interested in the systems running behind them.
            That led me to setting up homelabs, writing automation scripts, and participating in fast-paced <strong>Game Jams</strong>.
            Now, my work sits right in the middle of <strong>DevOps infrastructure</strong> and rapid <strong>game prototyping</strong>.
            Whether I'm fixing a deployment pipeline or testing a new mechanic, I just like building efficient systems that work.
          </p>
          <div className="hero-actions">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Resume
            </a>
            <a href="https://github.com/winth03" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="devicon-github-original"></i>
              GitHub
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-list">
            <div>
              <div className="experience-item-header">
                <h3 className="experience-title">
                  Cybertron Co., Ltd. <span className="experience-role">— Cybersecurity Analyst Intern</span>
                </h3>
                <span className="experience-date">2024</span>
              </div>
              <p className="experience-description">
                Designed and deployed AI-driven automation pipelines using <strong>n8n</strong> to streamline security
                operations. Integrated multiple Threat Intelligence APIs via REST to automatically
                enrich alerts, triage incidents, and trigger remediation workflows.
              </p>
            </div>
            <div>
              <div className="experience-item-header">
                <h3 className="experience-title">
                  Siam Cement Group (SCG) <span className="experience-role">— Freelance Full Stack Developer</span>
                </h3>
                <span className="experience-date">2023</span>
              </div>
              <p className="experience-description">
                Built a <strong>Django / MySQL</strong> REST API to digitize and migrate over <strong>100+ legacy records</strong> from
                paper-based systems. Eliminated manual data-entry errors and gave the team a queryable backend.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>Selected Projects</h2>

          <div className="project-category">
            <h3 className="project-category-title">Engineering</h3>
            <div className="projects-list">
              <div>
                <h3 className="project-title">
                  <a href="https://www.npmjs.com/package/@winth03/n8n-nodes-minio" target="_blank" rel="noopener noreferrer">@winth03/n8n-nodes-minio ↗</a>
                </h3>
                <p className="project-description">
                  Published npm package adding MinIO object-storage nodes to n8n, extending functionality for the community.
                </p>
                <div className="project-tags">
                  <span>n8n</span> • <span>MinIO</span> • <span>TypeScript</span>
                </div>
              </div>
              <div>
                <h3 className="project-title">
                  <a href="https://github.com/winth03/Smart-Camera-Project" target="_blank" rel="noopener noreferrer">Smart Camera Project ↗</a>
                </h3>
                <p className="project-description">
                  ESP32-CAM module integrated with OpenCV for gesture detection sending commands to Node-RED for real-time smart device control.
                </p>
                <div className="project-tags">
                  <span>ESP32</span> • <span>OpenCV</span> • <span>Node-RED</span>
                </div>
              </div>
              <div>
                <h3 className="project-title">Personal Homelab</h3>
                <p className="project-description">
                  Self-managed server stack running personal game servers, WireGuard VPN, Home Assistant, and containerized services.
                </p>
                <div className="project-tags">
                  <span>Docker</span> • <span>Linux</span> • <span>Cloudflare</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-category">
            <h3 className="project-category-title">Games</h3>
            <div className="game-embeds">
              <iframe title="THE WATER DRINKER" src="https://itch.io/embed/4504071?linkback=true&bg_color=000000&fg_color=ffffff&link_color=2ce8f4&border_color=333333" width="552" height="167"></iframe>
              <iframe title="Signed in Blood" src="https://itch.io/embed/3997845?linkback=true&bg_color=000000&fg_color=cfcfcf&link_color=b91a1a&border_color=333333" width="552" height="167"></iframe>
              <iframe title="The Time Killer" src="https://itch.io/embed/3496930?linkback=true&bg_color=000000&fg_color=11ffe8&link_color=d90006&border_color=333333" width="552" height="167"></iframe>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>
              <h3 className="skill-category-title">Infrastructure & Cloud</h3>
              <ul className="skill-list">
                <li>Docker</li>
                <li>Virtual Machines</li>
                <li>Linux</li>
                <li>Azure</li>
                <li>Cloudflare Tunnel</li>
              </ul>
            </div>
            <div>
              <h3 className="skill-category-title">Automation</h3>
              <ul className="skill-list">
                <li>n8n</li>
                <li>Node-RED</li>
                <li>GitHub Actions</li>
                <li>REST API Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="skill-category-title">Backend & Languages</h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>TypeScript / Node.js</li>
                <li>Django</li>
                <li>C#</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="skill-category-title">Game Dev</h3>
              <ul className="skill-list">
                <li>Godot Engine</li>
                <li>Unity</li>
                <li>C# Scripting</li>
                <li>Rapid Prototyping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2>Contact</h2>
          <p className="contact-description">
            Open to full-time roles, internships, and interesting collaborations.
          </p>
          <div className="contact-links">
            <a href="mailto:nutpapop.win@gmail.com">nutpapop.win@gmail.com</a>
            <a href="https://github.com/winth03" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://winth03.itch.io" target="_blank" rel="noopener noreferrer">itch.io</a>
          </div>
        </section>
      </main>
    </>
  );
}
