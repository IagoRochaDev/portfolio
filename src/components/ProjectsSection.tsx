import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { projects } from "@/data/portfolio-data";

const allTechs = Array.from(new Set(projects.flatMap((p) => p.technologies)));

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setSelectedProject(null);
    window.addEventListener("nav:projects", handler);
    return () => window.removeEventListener("nav:projects", handler);
  }, []);

  const filtered = filter
    ? projects.filter((p) => p.technologies.includes(filter))
    : projects;

  const selected = projects.find((p) => p.id === selectedProject);

  if (selected) {
    return (
      <div id="projects">
        <ProjectDetail project={selected} onBack={() => setSelectedProject(null)} />
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 lg:py-32 surface-sunken" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mb-12 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-mono font-medium text-primary mb-3 tracking-wider uppercase">
            Portfólio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-5">
            Projetos em destaque
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Aplicações Android construídas com foco em qualidade, arquitetura limpa e experiência do usuário.
          </p>
        </div>

        {/* Tech filter */}
        <div className={`flex flex-wrap gap-2 mb-10 ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              filter === null
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Todos
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(filter === tech ? null : tech)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                filter === tech
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isVisible={isVisible}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Nenhum projeto encontrado com essa tecnologia.
          </p>
        )}
      </div>
    </section>
  );
}
