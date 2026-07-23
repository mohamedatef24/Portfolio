import SectionHeader from "./SectionHeader";
import CircularSkills from "./CircularSkills";

const skills = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "PyTorch", icon: "devicon-pytorch-original colored" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
  { name: "LangChain", icon: "devicon-python-plain colored" },
  { name: "LangGraph", icon: "devicon-python-plain colored" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub Actions", icon: "devicon-github-original colored" },
  { name: "Vercel", icon: "devicon-vercel-original colored" },
  { name: "OpenCV", icon: "devicon-opencv-plain colored" },
  { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
  { name: "Hugging Face", icon: "devicon-python-plain colored" },
  { name: "FAISS", icon: "devicon-python-plain colored" },
];

const TechnicalSkillsSection = () => (
  <>
    <SectionHeader label="Technical Skills" />
    <section id="skills" className="mt-12 scroll-mt-24">
      <CircularSkills skills={skills} />
    </section>
  </>
);

export default TechnicalSkillsSection;
