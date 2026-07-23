"use client";

import { useScrollSpy, SECTION_IDS_LIST } from "../utils/useScrollSpy";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Experience" },
  { label: "Skills" },
  { label: "Projects" },
  { label: "Competitions" },
  { label: "Certifications" },
  { label: "Education" },
  { label: "Contact" },
];

export default function SectionDotsNav() {
  const activeIndex = useScrollSpy();

  const handleClick = (i: number) => {
    const id = SECTION_IDS_LIST[i];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-1/2 right-4 md:right-6 -translate-y-1/2 z-[950] hidden md:flex flex-col gap-3 items-center"
      aria-label="Section navigation"
    >
      {menuItems.map((item, i) => (
        <motion.button
          key={item.label}
          type="button"
          whileHover={{ scale: 1.25 }}
          animate={
            i === activeIndex
              ? { scale: 1.35, boxShadow: "0 0 0 4px color-mix(in srgb, var(--accent) 35%, transparent)" }
              : { scale: 1, boxShadow: "0 0 0 0px transparent" }
          }
          className={`w-3 h-3 rounded-full border-2 border-accent transition-colors cursor-pointer ${
            i === activeIndex ? "bg-accent" : "bg-surface"
          }`}
          onClick={() => handleClick(i)}
          aria-label={`Go to ${item.label}`}
          aria-current={i === activeIndex ? "true" : undefined}
        />
      ))}
    </nav>
  );
}
