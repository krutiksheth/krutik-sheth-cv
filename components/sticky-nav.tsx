"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type StickyNavProps = {
  items: readonly NavItem[];
};

export function StickyNav({ items }: StickyNavProps) {
  const [active, setActive] = useState<string>(items[0]?.href ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActive(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = () => setMenuOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  return (
    <header className="nav-header reveal">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        {/* Monogram */}
        <span
          className="ff-mono"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            color: "var(--text-3)",
          }}
        >
          KS<span style={{ color: "var(--accent)" }}>_</span>
        </span>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          className="hidden lg:flex"
        >
          {items.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="ff-mono"
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  padding: "0.5rem 1rem",
                  borderRadius: "2px",
                  transition: "color 0.2s",
                  color: isActive ? "var(--accent)" : "var(--text-3)",
                  position: "relative",
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "1rem",
                      right: "1rem",
                      height: "1px",
                      background: "var(--accent)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile: hamburger button */}
        <button
          className="lg:hidden ff-mono"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
          }}
          aria-label="Toggle navigation"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "6px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: menuOpen ? "var(--accent)" : "var(--text-3)",
              transition: "transform 0.2s, background 0.2s",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: menuOpen ? "var(--accent)" : "var(--text-3)",
              transition: "opacity 0.2s, background 0.2s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: menuOpen ? "var(--accent)" : "var(--text-3)",
              transition: "transform 0.2s, background 0.2s",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          className="lg:hidden"
          onClick={(e) => e.stopPropagation()}
          style={{
            borderTop: "1px solid var(--border)",
            background: "rgba(9, 9, 11, 0.97)",
            backdropFilter: "blur(24px)",
          }}
        >
          {items.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="ff-mono"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--accent)" : "var(--text-3)",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
                {isActive && (
                  <span style={{ color: "var(--accent)", fontSize: "0.5rem" }}>
                    ●
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
