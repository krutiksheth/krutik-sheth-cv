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
    <div className="animate-enter sticky top-4 z-20 mb-6 hidden justify-center lg:flex">
      <nav className="glass-panel flex items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-700 shadow-lg shadow-slate-900/5">
        {items.map((item) => {
          const isActive = active === item.href;

          return (
            <a
              key={item.href}
              className={[
                "rounded-full px-4 py-2 transition",
                isActive
                  ? "bg-slate-950 text-white shadow-sm"
                  : "hover:bg-white/70 hover:text-slate-950",
              ].join(" ")}
              href={item.href}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
