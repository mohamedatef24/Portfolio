"use client";

import React, { useEffect, useState } from "react";

const FooterSection = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-background to-surface border-t border-[var(--border)] mt-16 pt-10 pb-4 text-center text-muted text-base flex flex-col items-center gap-4 relative scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center flex-wrap">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <a href="mailto:mo7amed3atf24@gmail.com" className="text-foreground no-underline hover:underline">
            mo7amed3atf24@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          <a href="tel:+201202868440" className="text-foreground no-underline hover:underline">
            +20 120-286-8440
          </a>
        </div>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <span className="text-foreground">Giza, Egypt</span>
        </div>
      </div>
      <div className="flex gap-4 mt-2 justify-center">
        {[
          { href: "https://github.com/mohamedatef24", label: "GitHub", icon: "devicon-github-original colored" },
          { href: "https://www.linkedin.com/in/mohamed-atef-mawad", label: "LinkedIn", icon: "devicon-linkedin-plain colored" },
          { href: "https://www.kaggle.com/mo7amed3atf", label: "Kaggle", icon: "devicon-kaggle-original colored" },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            className="text-2xl text-accent-alt bg-surface rounded-full p-2 transition hover:text-accent hover:bg-surface-elevated hover:shadow-[var(--shadow-glow-hover)] flex items-center justify-center border border-[var(--border)]"
            aria-label={label}
            rel="noopener noreferrer"
          >
            <i className={icon} />
          </a>
        ))}
      </div>
      <div className="text-accent text-sm mt-4">
        © {new Date().getFullYear()} Mohamed Atef. All rights reserved.
      </div>
      {showButton && (
        <button
          type="button"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent text-on-accent flex items-center justify-center shadow-[var(--shadow-glow-hover)] hover:bg-highlight hover:text-white transition z-50 cursor-pointer border border-[var(--border)]"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default FooterSection;
