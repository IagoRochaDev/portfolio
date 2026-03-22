import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { techCategories } from "@/data/portfolio-data";
import { Code2, Smartphone, Layers, Database, GitBranch, Globe, Cpu, Zap, Server } from "lucide-react";

const skillGroups = [
  {
    category: "language",
    icon: Code2,
    items: ["Kotlin", "Java", "PHP", "Python", "JavaScript"],
  },
  {
    category: "ui",
    icon: Smartphone,
    items: ["Jetpack Compose", "XML Layouts", "Blade", "Bootstrap", "Material Design"],
  },
  {
    category: "architecture",
    icon: Layers,
    items: ["MVVM", "Clean Architecture", "Repository Pattern"],
  },
  {
    category: "jetpack",
    icon: Cpu,
    items: ["Room", "Navigation", "ViewModel", "LiveData / Flow", "WorkManager"],
  },
  {
    category: "di",
    icon: Zap,
    items: ["Hilt", "Dagger"],
  },
  {
    category: "backend",
    icon: Server,
    items: ["Laravel", "Firebase"],
  },
  {
    category: "database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Room (SQLite)"],
  },
  {
    category: "network",
    icon: Globe,
    items: ["Retrofit", "REST APIs"],
  },
  {
    category: "tools",
    icon: GitBranch,
    items: ["Git", "CI/CD", "GitHub"],
  },
];

const categoryLabels: Record<string, string> = {
  ...techCategories,
};

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-mono font-medium text-primary mb-3 tracking-wider uppercase">
            Competências
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-5">
            Stack técnica
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Tecnologias e ferramentas que utilizo no desenvolvimento de software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className={`group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? `animate-reveal-up delay-${Math.min((i + 1) * 100, 500)}` : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg kotlin-blue-bg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                    {categoryLabels[group.category] || group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
