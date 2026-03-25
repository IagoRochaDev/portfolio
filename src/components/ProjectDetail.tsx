import { ArrowLeft, Check, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/portfolio-data";

interface Props {
  project: Project;
  onBack: () => void;
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      onClick={onBack}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-primary border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      <ArrowLeft size={16} />
      Voltar aos projetos
    </button>
  );
}

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <section className="py-24 lg:py-32 surface-sunken min-h-screen">
      <div className="container max-w-4xl animate-reveal-up">
        <BackButton onBack={onBack} />

        <div className="mt-10" />

        {/* Accent bar */}
        <div
          className="h-1.5 w-20 rounded-full mb-6"
          style={{ backgroundColor: `hsl(${project.accentColor})` }}
        />

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
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
        </div>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-wider mb-6">
              Screenshots
            </h2>
            <div
              className="rounded-2xl p-8 overflow-hidden"
              style={{ background: `linear-gradient(135deg, hsl(${project.accentColor} / 0.08), hsl(${project.accentColor} / 0.03))` }}
            >
              <div className="flex justify-center gap-4 sm:gap-6">
                {project.screenshots.map((shot, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden shadow-2xl border border-border/40"
                    style={{
                      width: "30%",
                      maxWidth: "200px",
                      transform: i === 1 ? "translateY(-8px)" : "translateY(0)",
                    }}
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-wider mb-4">
              Destaques
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                >
                  <Sparkles
                    size={14}
                    style={{ color: `hsl(${project.accentColor})` }}
                    className="flex-shrink-0"
                  />
                  <span className="text-sm text-foreground font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

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
                className="px-3 py-1.5 rounded-lg kotlin-blue-bg text-primary text-sm font-mono font-medium"
              >
                {arch}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-wider mb-4">
            Funcionalidades
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full kotlin-blue-bg flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-foreground text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom back button */}
        <div className="flex justify-center pt-6 border-t border-border">
          <BackButton onBack={onBack} />
        </div>
      </div>
    </section>
  );
}
