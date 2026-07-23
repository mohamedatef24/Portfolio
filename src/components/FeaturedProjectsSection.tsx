import SectionHeader from "./SectionHeader";
import Image from "next/image";

const projects = [
  {
    title: "BAYAN — Arabic Grammarly",
    image: "/bayan-project.png",
    desc: "Highest-rated graduation project (A+). Arabic AI writing assistant with grammar correction, spelling correction, punctuation restoration, text summarization, and Dialect-to-MSA conversion. Fine-tuned Transformer models achieving 94.5% accuracy.",
    tags: ["NLP", "PyTorch", "Transformers", "Docker"],
    link: "https://github.com/mohamedatef24/BAYAN",
    linkLabel: "View on GitHub",
    demoLink: null,
  },
  {
    title: "RAG Chatbot for Islamic Content",
    image: "/rag-chatbot-project.png",
    desc: "Production RAG system answering questions on Quran, Tafsir, Hadith, and Prophet stories. Features a 7-layer validation pipeline ensuring factual accuracy with monitoring for latency, health, and retrieval relevance.",
    tags: ["RAG", "FAISS", "LangChain", "Vercel"],
    link: "https://github.com/mohamedatef24/ISLAMIC_RAG",
    linkLabel: "View on GitHub",
    demoLink: null,
  },
  {
    title: "Multi-Agent Document Q&A",
    image: "/multi-agent-project.png",
    desc: "Collaborative 3-agent workflow using LangGraph to process documents and generate citation-backed answers. Includes CI/CD pipeline with GitHub Actions automating tests, evaluation, and Docker deployment.",
    tags: ["LangGraph", "Agentic AI", "CI/CD"],
    link: "https://github.com/mohamedatef24/PDF-QA-Agents-Using-AI-Multi-Agent-Frameworks",
    linkLabel: "View on GitHub",
    demoLink: null,
  },
  {
    title: "Spedo Transfer Application",
    image: "/speedo-app-demo.jpg",
    desc: "Native Android money transfer app built with Kotlin and Jetpack Compose following MVVM architecture. Ranked among the top 5 projects at Banque Misr internship.",
    tags: ["Kotlin", "Android", "MVVM"],
    link: "https://github.com/mohamedatef24/Spedo-Tranfer-Application",
    linkLabel: "View on GitHub",
    demoLink: null,
  }
];

const FeaturedProjectsSection = () => (
  <>
    <SectionHeader label="Featured Projects" />
    <section className="mt-12">
      <h3 className="text-cyan-400 text-xl md:text-2xl font-bold mt-10 mb-6">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-4">
        {projects.map((proj) => (
          <div className="bg-[rgba(35,36,58,0.65)] rounded-2xl shadow-[0_4px_32px_#4fd1c522,0_2px_8px_#23243a55] p-5 text-center transition hover:shadow-[0_8px_32px_#4fd1c555,0_4px_16px_#a6c1ee55] hover:scale-[1.045] border border-cyan-200/20 backdrop-blur-md relative overflow-hidden" key={proj.title}>
            <Image src={proj.image} alt={proj.title} width={400} height={160} className="w-full h-40 object-full rounded-t-2xl mb-3 bg-[#23243a] shadow-[0_2px_8px_#4fd1c522]" style={{ objectFit: "fill" }} />
            <div className="text-cyan-400 font-bold text-lg mb-1">{proj.title}</div>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {proj.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-[#23243a] text-cyan-300 text-xs font-semibold border border-cyan-400/30">{tag}</span>
              ))}
            </div>
            <div className="text-[#f3f3f3] text-base mb-2">{proj.desc}</div>
            <div className="flex gap-3 justify-center mt-2">
              <a href={proj.link} target="_blank" className="inline-block px-5 py-2 bg-cyan-400 text-[#181824] rounded-full font-semibold text-sm no-underline transition hover:bg-[#a6c1ee] hover:text-[#181824] hover:shadow-[0_4px_16px_#a6c1ee55]" rel="noopener noreferrer">{proj.linkLabel}</a>
              {proj.demoLink && (
                <a href={proj.demoLink} target="_blank" className="inline-block px-5 py-2 bg-pink-400 text-white rounded-full font-semibold text-sm no-underline transition hover:bg-pink-300 hover:shadow-[0_4px_16px_#ff4fa355]" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <a href="https://github.com/mohamedatef24?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-cyan-400 text-[#181824] rounded-full font-semibold text-base no-underline transition hover:bg-[#a6c1ee] hover:text-[#181824] hover:shadow-[0_4px_16px_#a6c1ee55]">More on GitHub</a>
        <a href="https://www.kaggle.com/mo7amed3atf/code" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-cyan-400 text-[#181824] rounded-full font-semibold text-base no-underline transition hover:bg-[#a6c1ee] hover:text-[#181824] hover:shadow-[0_4px_16px_#a6c1ee55]">More on Kaggle</a>
      </div>
    </section>
  </>
);

export default FeaturedProjectsSection; 