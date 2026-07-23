"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const CompetitionsSection = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <>
      <SectionHeader label="Competitions" />
      <section id="competitions" className="mt-12 scroll-mt-24">
        <div className="max-w-[800px] mx-auto">
          <div
            className={`bg-card rounded-2xl p-9 text-foreground font-sans flex flex-col gap-3 relative transition-shadow duration-200 border border-[var(--border)] ${
              hovered ? "shadow-[var(--shadow-glow-hover)]" : "shadow-[var(--shadow-glow)]"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <div className="font-extrabold text-lg text-foreground">CU-AI Nexus Hackathon 2025</div>
                <div className="text-accent font-bold text-base">2nd Place — Cairo University | 4th Overall</div>
              </div>
            </div>
            <div className="text-muted font-semibold text-base">Cairo University</div>
            <div className="text-foreground/90 text-base mt-1">
              Won 2nd place at Cairo University and 4th place overall across participating universities. Built an AI-powered mentorship platform featuring semantic search over learning resources, mentor-mentee matching via similarity, technical Q&A generation, body posture analysis, and spoken interview feedback using Whisper for filler-word detection.
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["RAG", "Whisper", "MediaPipe", "LangChain"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-surface text-accent text-xs font-semibold border border-accent/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitionsSection;
