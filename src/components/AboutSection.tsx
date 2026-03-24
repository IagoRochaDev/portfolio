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
    title: "Técnico em Informática",
    place: "E. E. Benício Prates (Pronatec)",
    period: "2016–2018",
  },
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
];
export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className={`max-w-3xl mx-auto mb-16 text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-mono font-medium text-primary mb-3 tracking-wider uppercase">
            Sobre mim
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg text-justify">
           Sou estudante de Ciência da Computação no IFNMG, com formação técnica em
            Informática e experiência em desenvolvimento de software. Atualmente, tenho foco
            em desenvolvimento Android nativo utilizando Kotlin, criando aplicações modernas
            com boas práticas de arquitetura e interfaces utilizando Jetpack Compose.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4 text-justify">
            Tenho experiência prévia com desenvolvimento backend em PHP, o que me proporciona
            uma visão mais completa na construção de aplicações. Busco constantemente evoluir
            minhas habilidades, com interesse em qualidade de código, testes e desenvolvimento
            de soluções eficientes e escaláveis.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4 text-justify">
            Estou em busca de oportunidades para aplicar meus conhecimentos na prática,
            contribuir com projetos reais e crescer como desenvolvedor Android.
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
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Horizontal Timeline */}
        <div className={`${isVisible ? "animate-reveal-up delay-500" : "opacity-0"}`}>
          <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-8 text-center">
            Formação & Experiência
          </h3>
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-primary" />

            <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col items-center text-center">
                    {/* Node dot */}
                    <div className="relative z-10 w-12 h-12 rounded-full kotlin-blue-bg flex items-center justify-center mb-4 border-4 border-background shadow-md">
                      <Icon size={18} className="text-primary" />
                    </div>
                    {/* Card */}
                    <div className="p-4 rounded-xl bg-card border border-border w-full">
                      <p className="text-xs font-mono font-bold text-primary mb-1">{item.period}</p>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.place}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
