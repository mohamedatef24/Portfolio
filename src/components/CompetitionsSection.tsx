"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const CompetitionsSection = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <>
      <SectionHeader label="Competitions" />
      <section className="mt-12">
        <div className="max-w-[800px] mx-auto">
          <div
            className={`bg-[rgba(35,36,58,0.95)] rounded-2xl p-9 text-white font-sans flex flex-col gap-3 relative transition-shadow duration-200 ${hovered ? 'shadow-[0_8px_32px_#4fd1c555,0_4px_16px_#a6c1ee55]' : 'shadow-[0_2px_12px_#4fd1c522]'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <div className="font-extrabold text-lg text-white">CU-AI Nexus Hackathon 2025</div>
                <div className="text-cyan-400 font-bold text-base">2nd Place — Cairo University | 4th Overall</div>
              </div>
            </div>
            <div className="text-[#a6c1ee] font-semibold text-base">Cairo University</div>
            <div className="text-[#e3e3e3] text-base mt-1">
              Won 2nd place at Cairo University and 4th place overall across participating universities. Built an AI-powered mentorship platform featuring semantic search over learning resources, mentor-mentee matching via similarity, technical Q&A generation, body posture analysis, and spoken interview feedback using Whisper for filler-word detection.
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-0.5 rounded-full bg-[#23243a] text-cyan-300 text-xs font-semibold border border-cyan-400/30">RAG</span>
              <span className="px-2 py-0.5 rounded-full bg-[#23243a] text-cyan-300 text-xs font-semibold border border-cyan-400/30">Whisper</span>
              <span className="px-2 py-0.5 rounded-full bg-[#23243a] text-cyan-300 text-xs font-semibold border border-cyan-400/30">MediaPipe</span>
              <span className="px-2 py-0.5 rounded-full bg-[#23243a] text-cyan-300 text-xs font-semibold border border-cyan-400/30">LangChain</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitionsSection;
