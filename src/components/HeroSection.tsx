import { ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import profilePhoto from "@/assets/profile-photo.jpeg";

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 surface-sunken">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className={`flex-1 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full kotlin-blue-bg text-primary text-sm font-mono font-medium mb-8">
              <Terminal size={14} />
              <span>Android & Backend Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground mb-6">
              Iago Rocha
              <br />
              <span className="text-primary">Oliveira</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Estudante de Ciência da Computação no IFNMG com formação técnica em Informática.
              Experiência com Kotlin, PHP e Clean Architecture. Buscando evoluir
              continuamente e contribuir com soluções eficientes.
            </p>

            <div className={`flex flex-wrap gap-3 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
              <Button variant="hero" size="lg" onClick={() => scrollTo("#projects")}>
                Ver projetos
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => scrollTo("#contact")}>
                Entrar em contato
              </Button>
            </div>
          </div>

          {/* Profile photo */}
          <div className={`flex-shrink-0 ${isVisible ? "animate-reveal-up delay-300" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Iago Rocha Oliveira"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
