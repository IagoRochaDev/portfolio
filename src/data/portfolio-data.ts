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
  techJustifications?: { tech: string; reason: string }[];
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
import savepointLogin from "@/assets/savepoint-login.png";
import savepointHome from "@/assets/savepoint-home.png";
import savepointLibrary from "@/assets/savepoint-library.png";
import savepointSearch from "@/assets/savepoint-search.png";
import savepointSearchCategory from "@/assets/savepoint-search-category.png";

export const projects: Project[] = [
  {
    id: "expenseapp",
    title: "ExpenseApp",
    description:
      "Desenvolvi um aplicativo Android para gestão de despesas, possibilitando sincronização de dados em tempo real e persistência na nuvem, utilizando Kotlin, Firebase Firestore e arquitetura MVVM.",
    longDescription:
      "Desenvolvi um aplicativo Android nativo para controle de finanças pessoais, possibilitando que o usuário registre receitas e despesas com sincronização em tempo real e visualize estatísticas detalhadas por categoria, utilizando Kotlin, Jetpack Compose, Firebase (Auth + Firestore), Room, e Clean Architecture com MVVM.\n\nO Firebase Firestore foi escolhido por oferecer sincronização automática em tempo real e persistência na nuvem sem a necessidade de um backend próprio — ideal para aplicações centradas no usuário. O Firebase Auth complementa essa escolha ao fornecer autenticação segura com sessão persistente, eliminando a complexidade de gerenciar tokens manualmente.\n\nA arquitetura MVVM foi adotada para separar a lógica de negócio da interface, permitindo que a UI reaja automaticamente às mudanças de estado via Kotlin Flows. O uso de ViewModel também garante a preservação de estado em mudanças de configuração, como rotação de tela.\n\nO Room foi utilizado como camada de persistência local com suporte reativo via Flow, garantindo que alterações nos dados sejam refletidas instantaneamente em todas as telas. A Clean Architecture foi aplicada para organizar o projeto em camadas independentes (data, domain, presentation), facilitando testes, manutenção e evolução do código.\n\nO Donut Chart foi construído do zero com a Canvas API do Compose (drawArc), evitando dependências externas de gráficos e garantindo controle total sobre a renderização e performance.",
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
    techJustifications: [
      {
        tech: "Firebase Firestore",
        reason:
          "Escolhido por oferecer sincronização automática em tempo real e persistência na nuvem sem necessidade de backend próprio, ideal para aplicações centradas no usuário.",
      },
      {
        tech: "Firebase Auth",
        reason:
          "Fornece autenticação segura com sessão persistente, eliminando a complexidade de gerenciar tokens e fluxos de login manualmente.",
      },
      {
        tech: "MVVM",
        reason:
          "Adotado para separar lógica de negócio da interface, permitindo que a UI reaja automaticamente às mudanças de estado. O ViewModel também preserva estado em mudanças de configuração.",
      },
      {
        tech: "Room + Flow",
        reason:
          "Room como persistência local com suporte reativo via Flow, garantindo que alterações nos dados sejam refletidas instantaneamente em todas as telas.",
      },
      {
        tech: "Clean Architecture",
        reason:
          "Organiza o projeto em camadas independentes (data, domain, presentation), facilitando testes unitários, manutenção e evolução do código.",
      },
      {
        tech: "Canvas API (Donut Chart)",
        reason:
          "Construído do zero com drawArc do Compose, evitando dependências externas de bibliotecas de gráficos e garantindo controle total sobre renderização e performance.",
      },
      {
        tech: "Hilt",
        reason:
          "Escolhido para injeção de dependência por ser a solução oficial do Android, com integração nativa ao ViewModel e suporte a escopos do ciclo de vida.",
      },
    ],
    screenshots: [
      { src: expenseappHomeDark, alt: "ExpenseApp — Tela inicial com saldo e transações" },
      { src: expenseappStatsDark, alt: "ExpenseApp — Estatísticas com gráfico Donut Chart" },
      { src: expenseappHistoryDark, alt: "ExpenseApp — Histórico de transações" },
      { src: expenseappNewTransactionDark, alt: "ExpenseApp — Nova transação (despesa)" },
    ],
  },
  {
    id: "savepoint",
    title: "SavePoint",
    description:
      "Desenvolvi um aplicativo Android offline-first para gerenciamento de biblioteca de jogos, reduzindo em ~90% o consumo de dados via sincronização Delta e garantindo 100% de disponibilidade offline, utilizando Kotlin, Room como Single Source of Truth, Firebase e Clean Architecture.",
    longDescription:
      "Desenvolvi um aplicativo Android nativo offline-first para gerenciamento de biblioteca de jogos, possibilitando que jogadores organizem coleções, acompanhem progresso e mantenham tudo sincronizado na nuvem sem perder fluidez offline, utilizando Kotlin, Jetpack Compose, Room, Firebase (Auth + Firestore), Hilt e Clean Architecture rigorosa com UseCases.\n\nA estratégia offline-first com Room como Single Source of Truth (SSOT) foi adotada para garantir 100% de disponibilidade independente da qualidade da rede — toda escrita é persistida localmente de forma imediata e a UI reage instantaneamente via Flow, eliminando lag percebido pelo usuário.\n\nImplementei um algoritmo de Delta Sync utilizando timestamps e flags de modificação no Room, trafegando apenas registros alterados em vez de sincronizar a coleção inteira. Essa decisão reduziu em aproximadamente 90% o consumo de dados móveis e os custos de leitura/escrita no Firestore.\n\nA Clean Architecture foi aplicada de forma rigorosa, com a camada de Domain totalmente agnóstica a frameworks (sem dependências de Android, Room ou Firebase). Cada ação do usuário é encapsulada em um UseCase (AddGameUseCase, SyncGamesUseCase), mantendo ViewModels magros e facilitando testes unitários isolados com MockK e Turbine.\n\nO Firebase Auth foi escolhido para autenticação por suportar nativamente login com Google e e-mail/senha com sessão persistente, enquanto o Firestore atua como camada de backup remoto, sincronizada em background de forma transparente ao usuário.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "DataStore",
      "Firebase Auth",
      "Firestore",
      "Retrofit",
      "OkHttp",
      "Hilt",
      "Coroutines",
      "Flow",
      "Turbine",
      "MockK",
    ],
    architecture: [
      "Clean Architecture",
      "MVVM",
      "Repository Pattern",
      "Use Cases (Interactors)",
      "UDF (Fluxo Unidirecional)",
      "Offline-First (SSOT)",
    ],
    highlights: [
      "Offline-First com Room como Single Source of Truth",
      "Sincronização Delta — ~90% menos consumo de dados",
      "Clean Architecture rigorosa com camada Domain agnóstica",
      "Use Cases encapsulando cada ação do usuário",
      "Login com Google e E-mail/Senha (Firebase Auth)",
      "Testes de Flow com Turbine + MockK",
    ],
    githubUrl: "https://github.com/IagoRochaDev/SavePoint-Android",
    accentColor: "265 85% 60%",
    features: [
      "Autenticação com Google e E-mail/Senha via Firebase Auth",
      "Gerenciamento completo de biblioteca de jogos (CRUD) com persistência local imediata",
      "Modo offline 100% funcional — experiência ininterrupta independente da rede",
      "Sincronização Delta em background — apenas registros modificados são trafegados",
      "Backup automático na nuvem via Firestore, transparente ao usuário",
      "Categorização de jogos (Jogando, Finalizados, Quero Jogar)",
      "Busca por nome e filtros por categoria",
      "UI 100% Jetpack Compose com tema escuro e identidade visual própria",
      "Testes unitários de UseCases isolados com MockK",
      "Testes de Flow assíncrono com biblioteca Turbine",
    ],
    techJustifications: [
      {
        tech: "Offline-First (Room como SSOT)",
        reason:
          "Garante 100% de disponibilidade e zero lag percebido pelo usuário — toda escrita é persistida localmente de forma imediata e a UI reage via Flow, independente da qualidade da conexão.",
      },
      {
        tech: "Delta Sync",
        reason:
          "Implementado com timestamps e flags no Room para trafegar apenas registros modificados, reduzindo ~90% do consumo de dados móveis e dos custos de leitura/escrita no Firestore.",
      },
      {
        tech: "Clean Architecture + Use Cases",
        reason:
          "Camada Domain totalmente agnóstica a frameworks, com cada ação encapsulada em um UseCase. Mantém ViewModels magros, facilita reuso e permite testes unitários isolados sem dependências de Android.",
      },
      {
        tech: "Firebase Auth",
        reason:
          "Escolhido por oferecer suporte nativo a login com Google e E-mail/Senha com sessão persistente, eliminando a complexidade de implementar fluxos OAuth manualmente.",
      },
      {
        tech: "Firestore (como backup, não SSOT)",
        reason:
          "Atua como camada de backup remoto sincronizada em background. A escolha de não usá-lo como SSOT garante que o app funcione sem rede e evita custos elevados de leituras em tempo real.",
      },
      {
        tech: "DataStore",
        reason:
          "Utilizado para preferências do usuário e flags de sincronização por ser type-safe, assíncrono via Flow e a substituição moderna recomendada para SharedPreferences.",
      },
      {
        tech: "Turbine",
        reason:
          "Adotado para testar emissões de Kotlin Flows de forma determinística, validando estados intermediários e finais sem flakiness comum em testes assíncronos.",
      },
      {
        tech: "Hilt",
        reason:
          "Solução oficial do Android para injeção de dependência, com integração nativa ao ViewModel e suporte a escopos do ciclo de vida, mantendo consistência com o restante do ecossistema.",
      },
    ],
    screenshots: [
      { src: savepointLogin, alt: "SavePoint — Tela de login com Google e E-mail" },
      { src: savepointHome, alt: "SavePoint — Tela inicial com últimos lançamentos" },
      { src: savepointLibrary, alt: "SavePoint — Biblioteca pessoal de jogos" },
      { src: savepointSearch, alt: "SavePoint — Busca com filtros por categoria" },
      { src: savepointSearchCategory, alt: "SavePoint — Resultados filtrados por Adventure" },
    ],
  },
  {
    id: "gymapp",
    title: "GymApp",
    description:
      "Desenvolvi um aplicativo Android para gerenciamento de treinos, estruturando o código de forma organizada e de fácil manutenção, utilizando Kotlin e arquitetura MVVM.",
    longDescription:
      "Desenvolvi um aplicativo Android nativo para gerenciamento de treinos, permitindo criar rotinas personalizadas com controle de séries, repetições e cargas, utilizando Kotlin, Jetpack Compose e arquitetura MVVM.\n\nApesar de ser um projeto de menor complexidade, a arquitetura MVVM foi adotada para praticar a separação de responsabilidades entre UI e lógica de negócio, facilitando a escalabilidade futura caso novas funcionalidades sejam adicionadas.\n\nEssa abordagem também permite uma melhor testabilidade e organização do código, evitando acoplamento direto entre interface e regras da aplicação. O Fluxo Unidirecional de Dados (UDF) garante previsibilidade no estado da UI, com eventos fluindo da View para o ViewModel e estados retornando de forma reativa.",
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
      "UDF (Fluxo Unidirecional)",
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
    techJustifications: [
      {
        tech: "MVVM",
        reason:
          "Mesmo em um projeto de menor complexidade, foi adotado para praticar a separação de responsabilidades entre UI e lógica de negócio, facilitando a escalabilidade futura e a testabilidade do código.",
      },
      {
        tech: "Room",
        reason:
          "Utilizado para persistência local dos treinos, oferecendo uma API type-safe sobre SQLite com suporte a queries reativas via Flow.",
      },
      {
        tech: "Hilt",
        reason:
          "Adotado para manter consistência com os demais projetos e garantir injeção de dependência com escopo adequado ao ciclo de vida dos componentes Android.",
      },
      {
        tech: "UDF (Fluxo Unidirecional)",
        reason:
          "Garante previsibilidade no estado da UI — eventos fluem da View para o ViewModel, e estados retornam de forma reativa, evitando side-effects e facilitando o debug.",
      },
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
      "Desenvolvi um aplicativo Android integrado a API REST de receitas, garantindo atualização dinâmica dos dados e melhor experiência do usuário, utilizando Kotlin, Retrofit e arquitetura MVVM com camada de repositório.",
    longDescription:
      "Desenvolvi um aplicativo Android nativo que consome a API pública TheMealDB para exibir receitas e categorias, permitindo buscas inteligentes com roteamento automático de endpoints, utilizando Kotlin, Jetpack Compose, Retrofit e arquitetura MVVM com camada de repositório.\n\nO Retrofit foi utilizado para simplificar a comunicação com a API REST, oferecendo uma forma estruturada e type-safe de realizar requisições HTTP e serializar respostas automaticamente.\n\nA camada de repositório permite abstrair a origem dos dados, facilitando futuras mudanças — como adicionar cache local ou trocar a API — sem impactar outras camadas da aplicação.\n\nA arquitetura MVVM foi aplicada para organizar o fluxo de dados entre UI e camada de dados, permitindo uma interface reativa e desacoplada. O monitoramento de rede via Flow com ConnectivityManager garante que o usuário seja notificado em tempo real sobre mudanças na conectividade, melhorando significativamente a experiência offline.",
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
    techJustifications: [
      {
        tech: "Retrofit",
        reason:
          "Utilizado para simplificar a comunicação com a API REST, oferecendo requisições HTTP estruturadas, type-safe e com serialização automática de respostas.",
      },
      {
        tech: "Camada de Repositório",
        reason:
          "Abstrai a origem dos dados, facilitando futuras mudanças como adicionar cache local ou trocar a API sem impactar outras camadas da aplicação.",
      },
      {
        tech: "MVVM",
        reason:
          "Aplicado para organizar o fluxo de dados entre UI e camada de dados, permitindo uma interface reativa e desacoplada da lógica de negócio.",
      },
      {
        tech: "Coil",
        reason:
          "Escolhido para carregamento de imagens por ser leve, nativo em Kotlin e com integração direta ao Compose, oferecendo cache automático em disco e memória.",
      },
      {
        tech: "Monitoramento de Rede (Flow + ConnectivityManager)",
        reason:
          "Garante que o usuário seja notificado em tempo real sobre mudanças na conectividade via Snackbars dinâmicas, melhorando a experiência offline.",
      },
    ],
    screenshots: [
      { src: recipeappHome, alt: "RecipeApp — Tela inicial com receita do dia" },
      { src: recipeappSearch, alt: "RecipeApp — Busca inteligente por categoria" },
      { src: recipeappDetail, alt: "RecipeApp — Detalhes da receita com ingredientes" },
      { src: recipeappFavorites, alt: "RecipeApp — Tela de favoritos" },
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
