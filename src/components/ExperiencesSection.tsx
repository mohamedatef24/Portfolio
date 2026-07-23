"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const ExperienceCard = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className={`bg-card rounded-2xl p-9 text-foreground font-sans flex flex-col gap-2 relative transition-shadow duration-200 border border-[var(--border)] ${
        hovered ? "shadow-[var(--shadow-glow-hover)]" : "shadow-[var(--shadow-glow)]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
};

const ExperiencesSection = () => (
  <>
    <SectionHeader label="Experiences" />
    <section id="experiences" className="relative mt-16 min-h-[420px] scroll-mt-24">
      <div
        className="absolute left-0 top-0 w-full h-full bg-[repeating-linear-gradient(0deg,_#fff1_0_1px,_transparent_1px_40px),_repeating-linear-gradient(90deg,_#fff1_0_1px,_transparent_1px_40px)] z-0 pointer-events-none"
        style={{ opacity: "var(--grid-opacity)" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1100px] mx-auto relative z-10 items-stretch justify-center">
        <ExperienceCard>
          <div className="text-accent font-bold text-base mb-1">(Aug 2025 - Oct 2025)</div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-accent-alt">🧠</span>
            <span className="font-extrabold text-lg text-foreground">AI Engineer Intern</span>
          </div>
          <div className="text-muted font-semibold text-base mb-1">EGRONX</div>
          <div className="text-foreground/90 text-base mt-1">
            Built RAG applications using LangChain, FastAPI, and Docker within Agile workflows. Developed an AI chatbot for organizational bylaws achieving 96.5% accuracy on a benchmark of 300 curated questions.
          </div>
        </ExperienceCard>
        <ExperienceCard>
          <div className="text-accent font-bold text-base mb-1">(Aug 2025 - Sep 2025)</div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-accent-alt">🤖</span>
            <span className="font-extrabold text-lg text-foreground">Computer Vision Intern</span>
          </div>
          <div className="text-muted font-semibold text-base mb-1">Cellula Technologies</div>
          <div className="text-foreground/90 text-base mt-1">
            Built water segmentation pipelines for 12-band multispectral satellite imagery, enabling real-time inference through a Flask web application.
          </div>
        </ExperienceCard>
        <ExperienceCard>
          <div className="text-accent font-bold text-base mb-1">(Aug 2024 - Sep 2024)</div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-accent-alt">📱</span>
            <span className="font-extrabold text-lg text-foreground">Native Android Trainee</span>
          </div>
          <div className="text-muted font-semibold text-base mb-1">Banque Misr</div>
          <div className="text-foreground/90 text-base mt-1">
            Developed a money transfer application using Kotlin and Jetpack Compose following MVVM architecture. Ranked among the top 5 projects across the entire internship cohort.
          </div>
        </ExperienceCard>
      </div>
    </section>
  </>
);

export default ExperiencesSection;
