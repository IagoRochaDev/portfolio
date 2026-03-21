export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  architecture: string[];
  imageUrl: string;
  githubUrl: string;
  playStoreUrl?: string;
  accentColor: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "Aplicativo de gerenciamento de tarefas com sincronização offline e notificações inteligentes.",
    longDescription: "TaskFlow é um aplicativo completo de produtividade que permite gerenciar tarefas com suporte offline-first. Utiliza Room para persistência local, WorkManager para sincronização em background e Hilt para injeção de dependências. A arquitetura segue Clean Architecture com camadas bem definidas.",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines", "Flow", "WorkManager"],
    architecture: ["Clean Architecture", "MVVM", "Repository Pattern", "Use Cases"],
    imageUrl: "",
    githubUrl: "https://github.com",
    playStoreUrl: "https://play.google.com",
    accentColor: "145 65% 42%",
    features: [
      "Criação e organização de tarefas com categorias",
      "Sincronização offline-first com Room",
      "Notificações inteligentes via WorkManager",
      "Temas dinâmicos com Material You",
      "Busca e filtros avançados",
      "Exportação de dados em CSV",
    ],
  },
  {
    id: "weathernow",
    title: "WeatherNow",
    description: "App de previsão do tempo com dados em tempo real e widgets para a home screen.",
    longDescription: "WeatherNow consome a API OpenWeatherMap e exibe dados meteorológicos com gráficos interativos. Implementa cache inteligente com Room, widgets nativos e suporte a múltiplas localizações. A UI foi construída inteiramente com Jetpack Compose.",
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room", "Hilt", "Flow", "Glance"],
    architecture: ["Clean Architecture", "MVVM", "Repository Pattern"],
    imageUrl: "",
    githubUrl: "https://github.com",
    accentColor: "200 75% 50%",
    features: [
      "Previsão em tempo real com atualização automática",
      "Widgets nativos com Jetpack Glance",
      "Cache offline inteligente",
      "Gráficos de temperatura com animações",
      "Suporte a múltiplas localizações",
      "Material You com temas dinâmicos",
    ],
  },
  {
    id: "fintrack",
    title: "FinTrack",
    description: "Controle financeiro pessoal com gráficos, metas e relatórios detalhados.",
    longDescription: "FinTrack ajuda usuários a controlar gastos e receitas com categorização automática. Usa Room com migrations complexas, gráficos customizados com Canvas do Compose e exportação de relatórios em PDF. Segue rigorosamente Clean Architecture.",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines", "DataStore", "Canvas"],
    architecture: ["Clean Architecture", "MVVM", "Use Cases", "Mappers"],
    imageUrl: "",
    githubUrl: "https://github.com",
    accentColor: "35 90% 52%",
    features: [
      "Registro de receitas e despesas",
      "Categorização automática com ML Kit",
      "Gráficos interativos com Compose Canvas",
      "Metas financeiras com progresso visual",
      "Relatórios em PDF",
      "Backup e restauração de dados",
    ],
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
