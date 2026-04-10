import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { projects } from "@/data/portfolio-data";



export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const scrollToProjects = () => {
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const selectProject = (id: string) => {
    setSelectedProject(id);
    scrollToProjects();
  };

  useEffect(() => {
    const handler = () => setSelectedProject(null);
    window.addEventListener("nav:projects", handler);
    return () => window.removeEventListener("nav:projects", handler);
  }, []);

  const selected = projects.find((p) => p.id === selectedProject);

  if (selected) {
    return (
      <div id="projects">
        <ProjectDetail project={selected} onBack={() => {
          setSelectedProject(null);
          scrollToProjects();
        }} />
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 lg:py-32 surface-sunken" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mb-12 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-mono font-medium text-primary mb-3 tracking-wider uppercase">
            Portifólio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-5">
            Projetos em destaque
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Aplicações Android construídas com foco em qualidade, arquitetura limpa e experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isVisible={isVisible}
              onClick={() => selectProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
