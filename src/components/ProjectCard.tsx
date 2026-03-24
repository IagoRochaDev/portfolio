import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface Props {
  project: Project;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}

export default function ProjectCard({ project, index, isVisible, onClick }: Props) {
  const delays = ["delay-100", "delay-200", "delay-300"];
  const hasScreenshots = project.screenshots.length > 0;

  return (
    <div
      className={`group cursor-pointer rounded-xl bg-card border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
        isVisible ? `animate-reveal-up ${delays[index % 3]}` : "opacity-0"
      }`}
      onClick={onClick}
    >
      {/* Screenshot showcase or accent bar */}
      {hasScreenshots ? (
        <div
          className="relative h-56 overflow-hidden"
          style={{ background: `linear-gradient(135deg, hsl(${project.accentColor} / 0.1), hsl(${project.accentColor} / 0.05))` }}
        >
          <div className="absolute inset-0 flex items-end justify-center gap-3 px-6 pb-0">
            {project.screenshots.slice(0, 3).map((shot, i) => (
              <div
                key={i}
                className="relative rounded-t-lg overflow-hidden shadow-xl border border-border/50"
                style={{
                  width: i === 0 ? "38%" : "28%",
                  height: i === 0 ? "92%" : "78%",
                  transform: i === 0 ? "translateY(4px)" : i === 1 ? "translateY(12px)" : "translateY(16px)",
                  zIndex: i === 0 ? 3 : 2 - i,
                }}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: `hsl(${project.accentColor})` }}
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.highlights.slice(0, 3).map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium"
                style={{
                  backgroundColor: `hsl(${project.accentColor} / 0.1)`,
                  color: `hsl(${project.accentColor})`,
                }}
              >
                <Sparkles size={10} />
                {h}
              </span>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded-md bg-secondary text-muted-foreground text-xs">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Architecture tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.architecture.map((arch) => (
            <span
              key={arch}
              className="px-2 py-0.5 rounded-md kotlin-blue-bg text-primary text-xs font-mono font-medium"
            >
              {arch}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            Código
          </a>
          <span className="ml-auto text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Ver detalhes →
          </span>
        </div>
      </div>
    </div>
  );
}
