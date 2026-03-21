import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono text-xs">
          <span className="text-primary">{"<"}</span>
          Dev
          <span className="text-primary">{"/>"}</span>
          {" "}© {new Date().getFullYear()}
        </p>
        <p className="flex items-center gap-1.5 text-xs">
          Feito com <Heart size={12} className="text-primary" /> e Kotlin
        </p>
      </div>
    </footer>
  );
}
