import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Layers, Smartphone, Zap } from "lucide-react";

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
            Com anos de experiência em desenvolvimento Android nativo, foco em criar
            aplicações robustas, testáveis e escaláveis. Cada projeto segue princípios
            sólidos de engenharia de software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? `animate-reveal-up delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="w-10 h-10 rounded-lg android-green-bg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
