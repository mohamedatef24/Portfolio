import AboutMePhoto from "./AboutMePhoto";
import SectionHeader from "./SectionHeader";

const AboutSection = () => (
  <>
    <SectionHeader label="About Me" />
    <section className="bg-[#23243a] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-12 shadow-[0_2px_12px_#4fd1c522]">
      <div className="flex-2 min-w-[320px] mb-6 md:mb-0">
        <div className="text-cyan-400 font-extrabold text-2xl mb-4 font-sans">WHO AM I?</div>
        <div className="text-[#f3f3f3] text-base md:text-lg leading-relaxed font-sans">
          Mohamed Atef is an AI Engineer and a recent graduate from Cairo University&apos;s Faculty of Computer Science and Artificial Intelligence (Top 20 out of 180 students). He specializes in building production-grade AI systems — from Retrieval-Augmented Generation (RAG) pipelines and multi-agent architectures to Arabic NLP solutions. With hands-on experience deploying LLM-powered applications using LangChain, FastAPI, and Docker, he bridges the gap between research and real-world impact.
        </div>
      </div>
      <AboutMePhoto />
    </section>
  </>
);

export default AboutSection; 