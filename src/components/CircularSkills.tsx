"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function CircularSkills({ skills }: { skills: { name: string; icon?: string }[] }) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const displaySkills = [...skills, ...skills];

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden min-h-[150px] py-4">
      <motion.div
        ref={marqueeRef}
        className="flex items-center gap-12 w-fit will-change-transform"
        animate={{ x: [0, -(skills.length * (120 + 48))] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {displaySkills.map((skill, i) => (
          <motion.div
            key={skill.name + i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-card font-bold px-4 pt-4 pb-3 rounded-[22px] text-[1.13rem] shadow-[var(--shadow-glow)] backdrop-blur-[8px] border border-[var(--border)] transition-all duration-200 select-none min-w-[90px] min-h-[90px] justify-center hover:shadow-[var(--shadow-glow-hover)] hover:border-accent/50"
          >
            {skill.icon ? (
              <i className={skill.icon + " text-[38px] mb-2.5"} />
            ) : (
              <span className="text-[32px] mb-2.5">✨</span>
            )}
            <span className="font-bold text-foreground text-[1.08rem] tracking-wide text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
