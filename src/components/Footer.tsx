import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col items-center gap-6">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/IagoRochaDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/iagorochadev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:iagor.oliveira00@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Iago Rocha Oliveira
        </p>
      </div>
    </footer>
  );
}
