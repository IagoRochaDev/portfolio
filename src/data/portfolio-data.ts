export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  architecture: string[];
  highlights: string[];
  githubUrl: string;
  accentColor: string;
  features: string[];
  screenshots: {
    src: string;
    alt: string;
  }[];
}

import gymappDark from "@/assets/gymapp-dark.png";
import gymappLight from "@/assets/gymapp-light.png";
import gymappDetailDark from "@/assets/gymapp-detail-dark.png";

export const projects: Project[] = [
  {
    id: "gymapp",
    title: "GymApp",
    description:
      "Aplicativo completo de gerenciamento de treinos com controle de séries, repetições e cargas — construído 100% com Modern Android Development (MAD).",
    longDescription:
      "O GymApp permite que os usuários criem rotinas personalizadas, adicionem exercícios com controle de séries, repetições e cargas, e acompanhem o progresso de forma visual e intuitiva. Desenvolvido com foco em escalabilidade e manutenção, seguindo Clean Architecture e MVVM.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Hilt",
      "Coroutines",
      "Flow",
      "Navigation Compose",
    ],
    architecture: [
      "Clean Architecture",
      "MVVM",
      "Repository Pattern",
      "Single-Activity",
    ],
    highlights: [
      "Swipe-to-Dismiss com animações nativas",
      "Suporte fluido a Light/Dark Mode",
      "Empty States para melhor UX",
      "Material Design 3",
    ],
    githubUrl: "https://github.com/IagoRochaDev/GymApp-Android",
    accentColor: "25 95% 55%",
    features: [
      "Gestão completa de treinos (CRUD)",
      "Controle detalhado de exercícios — Nome, Séries, Repetições e Carga",
      "Feedback tátil e visual: Check para marcar exercícios concluídos",
      "Swipe-to-Dismiss para exclusão rápida com animações nativas",
      "Diálogos de confirmação para ações destrutivas",
      "Suporte nativo a Light/Dark Mode com paleta de alto contraste",
      "Empty States com orientação ao usuário",
    ],
    screenshots: [
      { src: gymappDark, alt: "GymApp — Tela inicial (Dark Mode)" },
      { src: gymappLight, alt: "GymApp — Tela inicial (Light Mode)" },
      { src: gymappDetailDark, alt: "GymApp — Detalhe do treino com check" },
    ],
  },
  {
    id: "recipeapp",
    title: "RecipeApp",
    description:
      "App de receitas com busca inteligente, shimmer loading e monitoramento de rede em tempo real — consumindo a API TheMealDB.",
    longDescription:
      "Aplicativo Android nativo que consome a API pública TheMealDB para exibir receitas, categorias e permitir buscas inteligentes. Focado em Experiência do Utilizador (UX) e Código Limpo, com funcionalidades avançadas como roteamento inteligente de busca e internacionalização.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Retrofit",
      "Hilt",
      "Coroutines",
      "Flow",
      "Coil",
      "Material Design 3",
    ],
    architecture: [
      "MVVM",
      "Repository Pattern",
      "UDF (Fluxo Unidirecional)",
    ],
    highlights: [
      "Smart Search com roteamento de endpoints",
      "Shimmer Effect customizado reutilizável",
      "Monitoramento de rede via Flow",
      "Testes unitários com MockK",
    ],
    githubUrl: "https://github.com/IagoRochaDev/RecipeApp-Android",
    accentColor: "145 65% 42%",
    features: [
      "Busca Inteligente — analisa input em tempo real e roteia para endpoints de filtro da API",
      "Shimmer Effect customizado com Modifier reutilizável em Compose",
      "Monitoramento de rede global via Flow com Snackbars dinâmicas",
      "Internacionalização (i18n) — suporte a Inglês e Português",
      "Testes unitários com JUnit e MockK para regras de negócio",
      "Cache de imagens com Coil",
    ],
    screenshots: [],
  },
];

export const skills = [
  { name: "Kotlin", category: "language", level: 95 },
  { name: "Java", category: "language", level: 80 },
  { name: "Jetpack Compose", category: "ui", level: 90 },
  { name: "XML Layouts", category: "ui", level: 85 },
  { name: "MVVM", category: "architecture", level: 95 },
  { name: "Clean Architecture", category: "architecture", level: 90 },
  { name: "Room", category: "jetpack", level: 90 },
  { name: "Navigation", category: "jetpack", level: 88 },
  { name: "ViewModel", category: "jetpack", level: 95 },
  { name: "LiveData / Flow", category: "jetpack", level: 90 },
  { name: "Hilt", category: "di", level: 88 },
  { name: "Dagger", category: "di", level: 80 },
  { name: "Coroutines", category: "async", level: 92 },
  { name: "Retrofit", category: "network", level: 90 },
  { name: "Git", category: "tools", level: 90 },
  { name: "CI/CD", category: "tools", level: 78 },
];

export const techCategories: Record<string, string> = {
  language: "Linguagens",
  ui: "UI",
  architecture: "Arquitetura",
  jetpack: "Jetpack",
  di: "Injeção de Dependência",
  async: "Assíncrono",
  network: "Network",
  tools: "Ferramentas",
};
