import SectionHeader from "./SectionHeader";
import Image from "next/image";

const EducationSection = () => (
  <>
    <SectionHeader label="Education" />
    <section id="education" className="mt-12 flex flex-col md:flex-row items-center gap-10 scroll-mt-24">
      <div className="flex items-center justify-center min-w-[260px]">
        <div className="w-60 h-60 rounded-3xl flex items-center justify-center md:mr-10">
          <Image
            src="/uni-transparent.png"
            alt="Cairo University Logo"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-contain rounded-2xl brightness-110 contrast-125"
            style={{
              filter: "drop-shadow(0 0 16px color-mix(in srgb, var(--accent) 65%, transparent))",
              transition: "filter 0.3s",
            }}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-glow)] p-8 text-foreground font-sans max-w-xl mx-auto border border-[var(--border)]">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-accent font-bold text-base">2022 – 2026</span>
            <span className="text-2xl text-accent-alt">🎓</span>
          </div>
          <div className="text-xl font-extrabold text-foreground mb-1 leading-tight">
            BSc in Computer Science & Artificial Intelligence
          </div>
          <div className="text-muted font-bold text-base mb-2 leading-tight">
            Faculty of Computer Science and Artificial Intelligence, Cairo University
          </div>
          <div className="text-foreground/90 text-base mb-2">
            GPA: 3.53/4.0 (Excellent) — Top 20 out of 180 students
          </div>
          <div className="text-accent font-bold text-base mb-1">Major: Artificial Intelligence</div>
          <div className="text-foreground/90 text-sm mt-2 leading-relaxed">
            <div className="font-bold text-accent mb-1">Key Coursework:</div>
            <ul className="list-disc pl-6">
              <li>Machine Learning & Deep Learning</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision & Image Processing</li>
              <li>Data Structures & Algorithms</li>
              <li>Database Management & Data Analysis</li>
              <li>Mathematics for ML & Data Science</li>
              <li>Software Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default EducationSection;
