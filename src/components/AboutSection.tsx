import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Layers, Smartphone, Zap, GraduationCap, Briefcase } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description: "Separação clara de responsabilidades com camadas de domínio, dados e apresentação.",
  },
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Nomes significativos, funções pequenas, SOLID e testes como prioridade.",
  },
  {
    icon: Smartphone,
    title: "UX Nativa",
    description: "Interfaces que seguem Material Design e guidelines do Android para experiências fluidas.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização de memória, lazy loading e operações assíncronas com Coroutines.",
  },
];

const timeline = [
  {
    icon: GraduationCap,
    title: "Bacharelado em Ciência da Computação",
    place: "IFNMG — Campus Montes Claros",
    period: "2023–2027",
  },
  {
    icon: Briefcase,
    title: "Desenvolvedor Backend (PHP) — Estágio",
    place: "NDTI – IFNMG | Campus Montes Claros",
    period: "2024–2026",
  },
  {
    icon: GraduationCap,
    title: "Técnico em Informática",
    place: "E. E. Benício Prates (Pronatec)",
    period: "2016–2018",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-mono font-medium text-primary mb-3 tracking-wider uppercase">
            Sobre mim
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-5">
            Abordagem de desenvolvimento
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Sou estudante de Ciência da Computação no IFNMG, com formação técnica em
            Informática. Tenho experiência como Desenvolvedor Backend (PHP) e atualmente
            foco em desenvolvimento Android nativo com Kotlin. Busco aprendizado contínuo
            e oportunidades para evoluir tecnicamente.
          </p>
        </div>

        {/* Principles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? `animate-reveal-up delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="w-10 h-10 rounded-lg kotlin-blue-bg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className={`max-w-2xl ${isVisible ? "animate-reveal-up delay-500" : "opacity-0"}`}>
          <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-6">
            Formação & Experiência
          </h3>
          <div className="space-y-4">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-9 h-9 rounded-lg kotlin-blue-bg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.place}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">{item.period}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
