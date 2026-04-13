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

        {/* Mobile: active section indicator */}
        <span
          className="lg:hidden ff-mono"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "var(--text-3)",
            textTransform: "uppercase",
          }}
        >
          {items.find((i) => i.href === active)?.label ?? "Menu"}
        </span>
      </div>
    </header>
  );
}
