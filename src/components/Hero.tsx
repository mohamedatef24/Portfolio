"use client";

import AnimatedCodeBlock from "./AnimatedCodeBlock";

const Hero = () => (
  <section
    id="hero"
    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 md:py-16 rounded-2xl mb-9 relative overflow-hidden bg-gradient-to-br from-[var(--hero-gradient-from)] to-[var(--hero-gradient-to)] scroll-mt-24"
  >
    <div
      className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none bg-[repeating-linear-gradient(0deg,_#fff1_0_1px,_transparent_1px_40px),_repeating-linear-gradient(90deg,_#fff1_0_1px,_transparent_1px_40px)]"
      style={{ opacity: "var(--grid-opacity)" }}
    />
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
      <svg width="100%" height="100%" className="absolute left-0 top-0">
        <ellipse cx="20%" cy="30" rx="60" ry="18" fill="var(--accent)" opacity="0.13" />
        <ellipse cx="80%" cy="80" rx="80" ry="22" fill="var(--accent-alt)" opacity="0.10" />
        <ellipse cx="50%" cy="120" rx="120" ry="30" fill="var(--accent)" opacity="0.08" />
      </svg>
    </div>
    <div className="flex-1 min-w-[0] z-10 flex flex-col items-center md:items-start justify-center px-4 md:pl-[4vw] text-center md:text-left">
      <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">Hello,</div>
      <div className="text-3xl md:text-4xl font-extrabold text-highlight mb-2">
        This is <span className="text-highlight">Mohamed Atef</span>
      </div>
      <div className="text-lg md:text-xl font-bold text-foreground mb-2">
        I&apos;m an <span className="text-accent font-extrabold text-2xl md:text-3xl">AI Engineer</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-6 w-full md:w-auto justify-center md:justify-start">
        <button
          className="flex items-center gap-2 px-7 py-3 rounded-full text-base font-bold bg-gradient-to-r from-surface to-accent text-on-accent shadow-[var(--shadow-glow)] transition hover:from-accent hover:to-surface hover:text-foreground hover:shadow-[var(--shadow-glow-hover)] w-full md:w-auto justify-center cursor-pointer duration-300"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          CONTACT ME
        </button>
        <a
          href="https://drive.google.com/file/d/1iKvhKraxkWjKDUwLVlVWkhKoP3WQtETS/view?usp=sharing"
          className="flex items-center gap-2 px-7 py-3 rounded-full text-base font-bold bg-gradient-to-r from-highlight to-accent-alt text-white shadow-[var(--shadow-glow)] transition hover:from-accent-alt hover:to-highlight hover:shadow-[var(--shadow-glow-hover)] w-full md:w-auto justify-center md:justify-start duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
          GET CV
        </a>
      </div>
    </div>
    <div className="flex-1 min-w-[0] z-10 flex items-center justify-center pr-0 md:pr-[4vw] mt-8 md:mt-0 w-full">
      <div className="bg-background rounded-2xl shadow-lg p-4 md:p-8 border border-accent/40 mt-3 w-full max-w-[480px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block" />
          <span className="w-3 h-3 rounded-full bg-accent inline-block" />
        </div>
        <div className="py-4 text-base font-mono text-foreground overflow-x-auto">
          <AnimatedCodeBlock />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
