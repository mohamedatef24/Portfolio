"use client";

import SectionHeader from "./SectionHeader";
import React, { useRef, useCallback } from "react";
import Image from "next/image";

const CERTIFICATE_COUNT = 30;
const AUTO_INTERVAL_MS = 3500;
const ANIMATION_MS = 400;

const certificates = Array.from(
  { length: CERTIFICATE_COUNT },
  (_, i) => `/certificate${i + 1}.png`
);

function CertificationsCarousel() {
  const [index, setIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (nextIndex: number, dir: 1 | -1) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setIndex((nextIndex + certificates.length) % certificates.length);
        setAnimating(false);
      }, ANIMATION_MS);
    },
    [animating]
  );

  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  React.useEffect(() => {
    if (paused || animating) return;
    timeoutRef.current = setTimeout(goNext, AUTO_INTERVAL_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, paused, animating, goNext]);

  const nextIndex = (index + direction + certificates.length) % certificates.length;
  const exitOffset = direction === 1 ? "-100%" : "100%";
  const enterOffset = direction === 1 ? "100%" : "-100%";

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
      <div
        className="aspect-[710/380] relative overflow-hidden rounded-2xl bg-card flex items-center justify-center transition-shadow duration-300 border border-[var(--border)] shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Image
          key={index}
          src={certificates[index]}
          alt={`Certificate ${index + 1} of ${CERTIFICATE_COUNT}`}
          width={710}
          height={400}
          className="w-full h-auto object-contain absolute left-0 top-0 transition-all"
          style={{
            opacity: animating ? 0 : 1,
            left: animating ? exitOffset : 0,
            transition: `left ${ANIMATION_MS}ms cubic-bezier(.4,2,.6,1), opacity ${ANIMATION_MS}ms`,
          }}
        />
        <Image
          key={`next-${nextIndex}-${animating}`}
          src={certificates[nextIndex]}
          alt={`Certificate ${nextIndex + 1} of ${CERTIFICATE_COUNT}`}
          width={710}
          height={400}
          className="w-full h-auto object-contain absolute left-0 top-0 transition-all"
          style={{
            opacity: animating ? 1 : 0,
            left: animating ? 0 : enterOffset,
            transition: `left ${ANIMATION_MS}ms cubic-bezier(.4,2,.6,1), opacity ${ANIMATION_MS}ms`,
          }}
        />

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface/90 text-accent border border-[var(--border)] flex items-center justify-center cursor-pointer hover:bg-accent hover:text-on-accent transition-colors z-10"
          aria-label="Previous certificate"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface/90 text-accent border border-[var(--border)] flex items-center justify-center cursor-pointer hover:bg-accent hover:text-on-accent transition-colors z-10"
          aria-label="Next certificate"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 mt-5">
        <span className="text-sm font-semibold text-muted">
          {index + 1} / {CERTIFICATE_COUNT}
        </span>
        <div className="flex-1 max-w-xs h-1.5 rounded-full bg-surface-elevated overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${((index + 1) / CERTIFICATE_COUNT) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

const CertificationsSection = () => (
  <>
    <SectionHeader label="Certifications" />
    <section id="certifications" className="my-20 flex flex-col items-center scroll-mt-24">
      <CertificationsCarousel />
    </section>
  </>
);

export default CertificationsSection;
