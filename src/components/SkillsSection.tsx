import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { skills, techCategories } from "@/data/portfolio-data";

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

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
            Tecnologias e ferramentas que domino no ecossistema Android.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(grouped).map(([category, items], i) => (
            <div
              key={category}
              className={`${isVisible ? `animate-reveal-up delay-${Math.min((i + 1) * 100, 500)}` : "opacity-0"}`}
            >
              <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-4">
                {techCategories[category] || category}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground font-mono text-xs tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
