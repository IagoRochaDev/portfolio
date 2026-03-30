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
import recipeappHome from "@/assets/recipeapp-home.png";
import recipeappSearch from "@/assets/recipeapp-search.png";
import recipeappDetail from "@/assets/recipeapp-detail.png";
import recipeappFavorites from "@/assets/recipeapp-favorites.png";
import expenseappHomeDark from "@/assets/expenseapp-home-dark.png";
import expenseappStatsDark from "@/assets/expenseapp-stats-dark.png";
import expenseappHistoryDark from "@/assets/expenseapp-history-dark.png";
import expenseappNewTransactionDark from "@/assets/expenseapp-new-transaction-dark.png";

export const projects: Project[] = [
  {
    id: "expenseapp",
    title: "ExpenseApp",
    description:
      "App de controle financeiro pessoal com autenticação Firebase, sincronização Firestore, gráficos customizados em Canvas e testes unitários — construído 100% com MAD.",
    longDescription:
      "O ExpenseApp é um aplicativo Android nativo focado em controle de finanças pessoais. Desenvolvido com as melhores práticas de Modern Android Development (MAD), o projeto demonstra o uso avançado de Jetpack Compose, Clean Architecture e reatividade com Kotlin Flows. Conta com autenticação de usuários e sincronização de dados em tempo real via Firebase (Auth + Firestore), além de permitir registrar receitas e despesas, visualizar estatísticas por categoria com gráfico Donut Chart customizado e acompanhar o histórico de transações.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Auth",
      "Firestore",
      "Room",
      "Hilt",
      "Coroutines",
      "Flow",
      "Navigation Compose",
      "Material Design 3",
    ],
    architecture: [
      "Clean Architecture",
      "MVVM",
      "Repository Pattern",
      "UDF (Fluxo Unidirecional)",
    ],
    highlights: [
      "Autenticação e sincronização com Firebase (Auth + Firestore)",
      "Metadados (Summary) otimizados para o dashboard",
      "Donut Chart customizado com Canvas API (drawArc)",
      "Fonte de dados reativa com Flow do Room",
      "Testes unitários com MockK e Robolectric",
      "CI/CD com GitHub Actions",
    ],
    githubUrl: "https://github.com/IagoRochaDev/ExpenseApp-Android",
    accentColor: "220 80% 55%",
    features: [
      "Autenticação de usuários com Firebase Auth (login, registro e sessão persistente)",
      "Sincronização de dados em tempo real com Cloud Firestore",
      "Metadados (Summary) de usuário otimizados para renderização eficiente do dashboard",
      "Registro de receitas e despesas com título, valor, categoria e data",
      "Donut Chart de alto desempenho construído do zero com Canvas API do Compose",
      "Fonte de dados reativa — alterações refletidas instantaneamente em todas as telas",
      "Estatísticas por categoria com porcentagens e barras de progresso",
      "Histórico completo de transações com valores coloridos (receita/despesa)",
      "Suporte nativo a Dark/Light Mode com Material Design 3",
      "Testes unitários para DAOs e Repositórios com MockK, Robolectric e JUnit 4",
      "CI/CD configurado com GitHub Actions para builds e testes automatizados",
    ],
    screenshots: [
      { src: expenseappHomeDark, alt: "ExpenseApp — Tela inicial com saldo e transações" },
      { src: expenseappStatsDark, alt: "ExpenseApp — Estatísticas com gráfico Donut Chart" },
      { src: expenseappHistoryDark, alt: "ExpenseApp — Histórico de transações" },
      { src: expenseappNewTransactionDark, alt: "ExpenseApp — Nova transação (despesa)" },
    ],
  },
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
];

export const skills = [
  { name: "Kotlin", category: "language" },
  { name: "Java", category: "language" },
  { name: "PHP", category: "language" },
  { name: "Python", category: "language" },
  { name: "Jetpack Compose", category: "ui" },
  { name: "XML Layouts", category: "ui" },
  { name: "Blade", category: "ui" },
  { name: "MVVM", category: "architecture" },
  { name: "Clean Architecture", category: "architecture" },
  { name: "Repository Pattern", category: "architecture" },
  { name: "Room", category: "jetpack" },
  { name: "Navigation", category: "jetpack" },
  { name: "ViewModel", category: "jetpack" },
  { name: "LiveData / Flow", category: "jetpack" },
  { name: "Hilt", category: "di" },
  { name: "Dagger", category: "di" },
  { name: "Coroutines", category: "async" },
  { name: "Retrofit", category: "network" },
  { name: "Firebase", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Git", category: "tools" },
  { name: "CI/CD", category: "tools" },
];

export const techCategories: Record<string, string> = {
  language: "Linguagens",
  ui: "UI",
  architecture: "Arquitetura",
  jetpack: "Jetpack",
  di: "Injeção de Dependência",
  async: "Assíncrono",
  network: "Network",
  backend: "Backend",
  database: "Banco de Dados",
  tools: "Ferramentas",
};
