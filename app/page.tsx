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
    <main className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="float-slow absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="float-slower absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute left-10 top-40 h-56 w-56 rounded-full bg-fuchsia-200/20 blur-3xl" />
        <div className="hero-grid absolute inset-0 opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12 lg:px-10">
        <StickyNav items={navItems} />

        <section className="animate-enter hero-sheen relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 text-white shadow-xl shadow-slate-900/15 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div className="relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                Senior Full-Stack Developer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl md:leading-[1.05]">
                Building software that feels premium, performs fast, and scales
                cleanly.
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-xl md:leading-8">
                I design and ship product-focused web platforms with strong
                frontend craft, reliable backend architecture, and deliberate
                user experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
                {heroTags.map((item) => (
                  <span
                    key={item}
                    className="glass-chip rounded-full px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  className="glass-chip rounded-full px-5 py-3 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/15"
                  href="#projects"
                >
                  View selected work
                </a>
                <a
                  className="rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  href="#contact"
                >
                  Let&apos;s build something
                </a>
              </div>
            </div>

            <div className="relative z-10 rounded-[1.75rem] border border-slate-700/50 bg-slate-950/80 p-6 text-sm text-slate-200">
              <div className="relative mb-4 overflow-hidden rounded-2xl border border-indigo-500/30 bg-slate-800 shadow-lg shadow-slate-950/40">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <div className="group relative h-full w-full">
                    <Image
                      src="/krutik-photo.jpg"
                      alt="Krutik Sheth"
                      width={250}
                      height={200}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-sm md:text-base">
                <p className="font-semibold text-white">Krutik Sheth</p>
                <p className="text-slate-400 text-xs">
                  Ahmedabad, India 380015
                </p>
                <p className="text-slate-500 text-xs">Full-time freelancer</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-slate-900/80 border border-slate-700/50 p-3 backdrop-blur-sm"
                  >
                    <p className="text-lg font-bold text-indigo-300">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-4 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="animate-enter delay-1 mt-8 rounded-3xl border border-white/60 bg-white/80 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl md:p-8"
        >
          <p className="section-kicker">About</p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Product-focused engineering with a strong eye for UX and
                delivery quality.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-slate-700">
                {aboutPoints.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="card-lift rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md"
                >
                  <p className="text-3xl font-bold tracking-tight text-slate-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="animate-enter delay-2 mt-8 rounded-3xl border border-white/60 bg-white/80 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl md:p-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Selected Work</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="card-lift group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_38%)] opacity-80 transition duration-500 group-hover:scale-110" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                    0{index + 1} / {project.company}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.summary}
                  </p>

                  <div className="mt-5 space-y-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="animate-enter delay-3 mt-8 rounded-3xl border border-white/60 bg-white/80 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl md:p-8"
        >
          <p className="section-kicker">Capabilities</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              A clearer view of where I create the most leverage.
            </h2>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Structured by engineering function so the stack is easier to scan
              for both hiring managers and technical reviewers.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="card-lift rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.values.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="animate-enter delay-4 mt-8 rounded-3xl border border-white/60 bg-white/80 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl md:p-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Experience</p>
            </div>
          </div>

          <div className="mt-8 space-y-6 border-l border-slate-200 pl-5">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="card-lift relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.09),transparent_38%)]" />
                <span className="absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full border-2 border-indigo-200 bg-indigo-500" />
                <div className="relative z-10 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {job.role}
                      {job.location ? ` | ${job.location}` : ""}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-indigo-700">
                    {job.period}
                  </p>
                </div>
                <ul className="relative z-10 mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="animate-enter delay-4 mt-8 grid gap-8 lg:grid-cols-2">
          <section
            id="education"
            className="card-lift rounded-3xl border border-white/60 bg-white/80 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl md:p-8"
          >
            <p className="section-kicker">Academic Foundation</p>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Education
            </h2>
            <div className="mt-5 rounded-2xl border border-slate-200/80 bg-white/80 p-5 text-slate-700 backdrop-blur-md">
              <p className="font-semibold text-slate-900">
                Bachelor of Engineering in Computer Science
              </p>
              <p className="mt-1">Charotar Institute of Technology</p>
              <p className="mt-2 text-sm text-slate-600">
                Graduated: January 2008
              </p>
            </div>
          </section>

          <section
            id="contact"
            className="card-lift rounded-3xl border border-white/60 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-7 text-white shadow-sm shadow-slate-900/10 md:p-8"
          >
            <p className="section-kicker text-indigo-300">Contact</p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Clean communication. Fast response. Product-minded collaboration.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              If you need a senior developer who can think in systems,
              execution, and product quality—not just tickets—I’m open to
              full-time freelance, contract, and consulting engagements.
            </p>

            <div className="mt-6 space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="glass-chip flex items-center justify-between rounded-2xl px-4 py-4 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="text-slate-300">{link.label}</span>
                  <span className="font-medium">{link.value}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
