import { ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
      {/* Background pattern */}
      <div className="absolute inset-0 surface-sunken">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className={`max-w-2xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          {/* Terminal-like badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full android-green-bg text-primary text-sm font-mono font-medium mb-8">
            <Terminal size={14} />
            <span>Android Developer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground mb-6">
            Construindo apps
            <br />
            Android com{" "}
            <span className="text-primary">excelência</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Desenvolvedor Android nativo especializado em Kotlin, Clean Architecture
            e Jetpack. Criando experiências mobile escaláveis e bem construídas.
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

        {/* Code snippet decoration */}
        <div className={`hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[380px] ${isVisible ? "animate-reveal-up delay-300" : "opacity-0"}`}>
          <div className="rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-[hsl(45,80%,55%)]" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">MainActivity.kt</span>
            </div>
            <pre className="p-4 text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
              <code>{`@AndroidEntryPoint
class MainActivity : ComponentActivity() {

    private val viewModel: MainViewModel
        by viewModels()

    override fun onCreate(
        savedInstanceState: Bundle?
    ) {
        super.onCreate(savedInstanceState)
        setContent {
            AppTheme {
                MainScreen(viewModel)
            }
        }
    }
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
