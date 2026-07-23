const SectionHeader = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center w-full relative z-10 pt-6 pb-2 mb-8">
    <div className="flex-1 h-0.5 bg-gradient-to-r from-surface via-accent to-transparent opacity-30 mx-3 rounded" />
    <div
      className="
        bg-gradient-to-r from-surface to-surface-elevated
        text-foreground text-lg md:text-xl font-bold rounded-[14px]
        px-11 py-3 shadow-[var(--shadow-glow)]
        tracking-wide relative z-20 transition-all duration-400
        hover:bg-gradient-to-r hover:from-accent hover:to-accent-alt
        hover:text-on-accent hover:shadow-[var(--shadow-glow-hover)]
      "
    >
      {label}
    </div>
    <div className="flex-1 h-0.5 bg-gradient-to-l from-surface via-accent to-transparent opacity-30 mx-3 rounded" />
  </div>
);

export default SectionHeader;
