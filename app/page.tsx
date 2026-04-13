import Image from "next/image";
import { StickyNav } from "@/components/sticky-nav";
import {
  aboutPoints,
  contactLinks,
  experience,
  featuredProjects,
  heroTags,
  navItems,
  skillGroups,
  stats,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main
      style={{ background: "var(--bg)", color: "var(--text-1)" }}
      className="relative min-h-screen ff-body"
    >
      <StickyNav items={navItems} />

      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingTop: "6rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--border)",
        }}
        className="px-6 md:px-12 lg:px-20"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          {/* Eyebrow */}
          <p
            className="reveal ff-mono"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              marginBottom: "1.5rem",
            }}
          >
            // Senior Full-Stack Developer &mdash; Ahmedabad, India
          </p>

          <div
            style={{
              display: "grid",
              gap: "3rem",
              alignItems: "flex-end",
            }}
            className="lg:grid-cols-[1fr_300px]"
          >
            {/* Left: name + bio + CTAs */}
            <div>
              <h1
                className="reveal reveal-2 ff-display"
                style={{
                  fontSize: "clamp(4.5rem, 13vw, 12.5rem)",
                  fontWeight: 300,
                  lineHeight: 0.88,
                  letterSpacing: "-0.01em",
                  color: "var(--text-1)",
                }}
              >
                Krutik
                <br />
                Sheth
                <span className="cursor-blink" />
              </h1>

              <p
                className="reveal reveal-3"
                style={{
                  marginTop: "2rem",
                  color: "var(--text-2)",
                  fontSize: "1.05rem",
                  lineHeight: 1.85,
                  maxWidth: "38rem",
                }}
              >
                I design and ship product-focused web platforms with strong
                frontend craft, reliable backend architecture, and deliberate
                user experience.
              </p>

              <div
                className="reveal reveal-4"
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {heroTags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="reveal reveal-5"
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <a href="#projects" className="btn-primary">
                  View selected work →
                </a>
                <a href="#contact" className="btn-secondary">
                  Let&apos;s build something
                </a>
              </div>
            </div>

            {/* Right: profile card */}
            <div
              className="reveal reveal-3 card"
              style={{ padding: "1rem" }}
            >
              {/* Photo */}
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "4px",
                  aspectRatio: "4 / 3",
                  background: "var(--elevated)",
                }}
              >
                <Image
                  src="/krutik-photo.jpg"
                  alt="Krutik Sheth"
                  width={320}
                  height={240}
                  className="grayscale hover:grayscale-0"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "filter 0.6s ease",
                  }}
                  priority
                />
              </div>

              {/* Name + location */}
              <div style={{ padding: "0.85rem 0.5rem 0.75rem" }}>
                <p style={{ fontWeight: 500, color: "var(--text-1)" }}>
                  Krutik Sheth
                </p>
                <p
                  className="ff-mono"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    color: "var(--text-3)",
                    marginTop: "0.35rem",
                    textTransform: "uppercase",
                  }}
                >
                  Ahmedabad&nbsp;·&nbsp;Full-time Freelance
                </p>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                }}
              >
                {stats.map((s) => (
                  <div key={s.label} className="stat-card">
                    <p
                      className="ff-display"
                      style={{
                        fontSize: "2rem",
                        fontWeight: 500,
                        color: "var(--accent)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="ff-mono"
                      style={{
                        fontSize: "0.58rem",
                        color: "var(--text-3)",
                        marginTop: "0.5rem",
                        lineHeight: 1.5,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        id="about"
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label">
            <span className="section-num">01</span>
            <span className="section-rule" />
            <span className="section-name">About</span>
          </div>

          <div
            style={{ display: "grid", gap: "4rem" }}
            className="lg:grid-cols-[1.3fr_0.7fr]"
          >
            <div>
              <h2
                className="ff-display"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 300,
                  lineHeight: 1.12,
                  color: "var(--text-1)",
                }}
              >
                Product-focused engineering with a strong eye for UX and
                delivery quality.
              </h2>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  color: "var(--text-2)",
                  lineHeight: 1.85,
                }}
              >
                {aboutPoints.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                alignContent: "start",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <p
                    className="ff-display"
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: 400,
                      color: "var(--text-1)",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="ff-mono"
                    style={{
                      fontSize: "0.6rem",
                      color: "var(--text-3)",
                      marginTop: "0.65rem",
                      lineHeight: 1.6,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section
        id="projects"
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label">
            <span className="section-num">02</span>
            <span className="section-rule" />
            <span className="section-name">Selected Work</span>
          </div>

          <div
            style={{ display: "grid", gap: "1.25rem" }}
            className="lg:grid-cols-3"
          >
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="card project-card"
                style={{ padding: "1.75rem" }}
              >
                <p
                  className="ff-mono"
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  0{index + 1}&nbsp;&mdash;&nbsp;{project.company}
                </p>

                <h3
                  className="ff-display"
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    color: "var(--text-1)",
                    marginTop: "0.85rem",
                    lineHeight: 1.15,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.88rem",
                    color: "var(--text-2)",
                    lineHeight: 1.8,
                  }}
                >
                  {project.summary}
                </p>

                <div
                  style={{
                    marginTop: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontFamily: "var(--font-jetbrains)",
                          fontSize: "0.75rem",
                          lineHeight: "1.6rem",
                          flexShrink: 0,
                        }}
                      >
                        —
                      </span>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-2)",
                          lineHeight: 1.65,
                        }}
                      >
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {project.stack.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section
        id="skills"
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label">
            <span className="section-num">03</span>
            <span className="section-rule" />
            <span className="section-name">Capabilities</span>
          </div>

          <h2
            className="ff-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "var(--text-1)",
              maxWidth: "36rem",
              marginBottom: "3rem",
            }}
          >
            A clearer view of where I create the most leverage.
          </h2>

          <div
            style={{ display: "grid", gap: "1rem" }}
            className="md:grid-cols-2 lg:grid-cols-3"
          >
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="card"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="ff-mono"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    marginBottom: "1rem",
                  }}
                >
                  {group.label}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {group.values.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section
        id="experience"
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label">
            <span className="section-num">04</span>
            <span className="section-rule" />
            <span className="section-name">Experience</span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="card"
                style={{ padding: "1.75rem 2rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                  className="md:flex-row md:items-start md:justify-between md:gap-6"
                >
                  <div>
                    <h3
                      className="ff-display"
                      style={{
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        fontWeight: 500,
                        color: "var(--text-1)",
                        lineHeight: 1.1,
                      }}
                    >
                      {job.company}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-2)",
                        marginTop: "0.3rem",
                      }}
                    >
                      {job.role}
                      {job.location ? (
                        <span style={{ color: "var(--text-3)" }}>
                          {" "}
                          &middot; {job.location}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <p
                    className="ff-mono"
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      color: "var(--accent)",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {job.period}
                  </p>
                </div>

                <ul
                  style={{
                    marginTop: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        fontSize: "0.88rem",
                        color: "var(--text-2)",
                        lineHeight: 1.75,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontFamily: "var(--font-jetbrains)",
                          fontSize: "0.75rem",
                          lineHeight: "1.6rem",
                          flexShrink: 0,
                        }}
                      >
                        —
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION + CONTACT ─── */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{ display: "grid", gap: "1.25rem", alignItems: "start" }}
            className="lg:grid-cols-2"
          >
            {/* Education */}
            <div id="education" className="card" style={{ padding: "2rem" }}>
              <span
                className="ff-mono"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                Academic Foundation
              </span>

              <h2
                className="ff-display"
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--text-1)",
                  marginTop: "1.25rem",
                  lineHeight: 1.15,
                }}
              >
                Education
              </h2>

              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p style={{ fontWeight: 500, color: "var(--text-1)" }}>
                  Bachelor of Engineering in Computer Science
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-2)",
                    marginTop: "0.5rem",
                  }}
                >
                  Charotar Institute of Technology
                </p>
                <p
                  className="ff-mono"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "var(--text-3)",
                    marginTop: "0.75rem",
                    textTransform: "uppercase",
                  }}
                >
                  Graduated &middot; January 2008
                </p>
              </div>
            </div>

            {/* Contact */}
            <div
              id="contact"
              className="card"
              style={{
                padding: "2rem",
                background: "var(--surface)",
              }}
            >
              <span
                className="ff-mono"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                Get in Touch
              </span>

              <h2
                className="ff-display"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  color: "var(--text-1)",
                  marginTop: "1.25rem",
                  lineHeight: 1.18,
                }}
              >
                Clean communication. Fast response. Product-minded
                collaboration.
              </h2>

              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.88rem",
                  color: "var(--text-2)",
                  lineHeight: 1.8,
                }}
              >
                If you need a senior developer who can think in systems,
                execution, and product quality&mdash;not just
                tickets&mdash;I&apos;m open to full-time freelance, contract,
                and consulting engagements.
              </p>

              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="contact-link"
                  >
                    <span
                      className="ff-mono"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--text-3)",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-1)",
                      }}
                    >
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span
              className="ff-display"
              style={{
                fontSize: "1.25rem",
                fontWeight: 300,
                color: "var(--text-3)",
              }}
            >
              Krutik Sheth
            </span>
            <span
              className="ff-mono"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                color: "var(--text-3)",
                textTransform: "uppercase",
              }}
            >
              Senior Full-Stack Developer &middot; {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
