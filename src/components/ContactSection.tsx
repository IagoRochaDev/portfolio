import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 surface-sunken" ref={ref}>
      <div className="container">
        <div className={`max-w-xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="text-sm font-mono font-medium text-primary mb-3 tracking-wider uppercase">
            Contato
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-5">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            Estou disponível para oportunidades de estágio em desenvolvimento de software,
            projetos colaborativos ou contribuições open source.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:iagor.oliveira00@gmail.com">
                <Mail size={18} />
                iagor.oliveira00@gmail.com
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href="https://github.com/IagoRochaDev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all active:scale-95"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/iagorochadev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>(38) 9 9160-3963</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Montes Claros, MG — Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
