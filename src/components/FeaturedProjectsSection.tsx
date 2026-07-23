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
  },
];

const FeaturedProjectsSection = () => (
  <>
    <SectionHeader label="Featured Projects" />
    <section id="projects" className="mt-12 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {projects.map((proj) => (
          <div
            className="bg-card rounded-2xl shadow-[var(--shadow-glow)] p-5 text-center transition hover:shadow-[var(--shadow-glow-hover)] hover:scale-[1.02] border border-[var(--border)] backdrop-blur-md relative overflow-hidden"
            key={proj.title}
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-t-2xl mb-3 bg-surface shadow-[var(--shadow-glow)]"
            />
            <div className="text-accent font-bold text-lg mb-1">{proj.title}</div>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-surface text-accent text-xs font-semibold border border-accent/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-foreground text-base mb-2">{proj.desc}</div>
            <div className="flex gap-3 justify-center mt-2">
              <a
                href={proj.link}
                target="_blank"
                className="inline-block px-5 py-2 bg-accent text-on-accent rounded-full font-semibold text-sm no-underline transition hover:bg-accent-alt hover:shadow-[var(--shadow-glow-hover)]"
                rel="noopener noreferrer"
              >
                {proj.linkLabel}
              </a>
              {proj.demoLink && (
                <a
                  href={proj.demoLink}
                  target="_blank"
                  className="inline-block px-5 py-2 bg-highlight text-white rounded-full font-semibold text-sm no-underline transition hover:opacity-90"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-8 justify-center flex-wrap">
        <a
          href="https://github.com/mohamedatef24?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-accent text-on-accent rounded-full font-semibold text-base no-underline transition hover:bg-accent-alt hover:shadow-[var(--shadow-glow-hover)]"
        >
          More on GitHub
        </a>
        <a
          href="https://www.kaggle.com/mo7amed3atf/code"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-accent text-on-accent rounded-full font-semibold text-base no-underline transition hover:bg-accent-alt hover:shadow-[var(--shadow-glow-hover)]"
        >
          More on Kaggle
        </a>
      </div>
    </section>
  </>
);

export default FeaturedProjectsSection;
