import { ArrowLeft, Check, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/portfolio-data";

interface Props {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <section className="py-24 lg:py-32 surface-sunken min-h-screen">
      <div className="container max-w-3xl animate-reveal-up">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Voltar aos projetos
        </button>

        {/* Accent bar */}
        <div
          className="h-1.5 w-20 rounded-full mb-6"
          style={{ backgroundColor: `hsl(${project.accentColor})` }}
        />

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {project.longDescription}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Button variant="hero" size="lg" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              Ver no GitHub
            </a>
          </Button>
          {project.playStoreUrl && (
            <Button variant="hero-outline" size="lg" asChild>
              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
                Play Store
              </a>
            </Button>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-10">
          <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-wider mb-4">
            Tecnologias
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-10">
          <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-wider mb-4">
            Arquitetura
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.architecture.map((arch) => (
              <span
                key={arch}
                className="px-3 py-1.5 rounded-lg android-green-bg text-primary text-sm font-mono font-medium"
              >
                {arch}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-wider mb-4">
            Funcionalidades
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full android-green-bg flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-foreground text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
