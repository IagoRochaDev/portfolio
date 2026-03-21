import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface Props {
  project: Project;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}

export default function ProjectCard({ project, index, isVisible, onClick }: Props) {
  const delays = ["delay-100", "delay-200", "delay-300"];

  return (
    <div
      className={`group cursor-pointer rounded-xl bg-card border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? `animate-reveal-up ${delays[index % 3]}` : "opacity-0"
      }`}
      onClick={onClick}
    >
      {/* Accent bar */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: `hsl(${project.accentColor})` }}
      />

      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
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
              className="px-2 py-0.5 rounded-md android-green-bg text-primary text-xs font-mono font-medium"
            >
              {arch}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
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
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              Play Store
            </a>
          )}
          <span className="ml-auto text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Ver detalhes →
          </span>
        </div>
      </div>
    </div>
  );
}
