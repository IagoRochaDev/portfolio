# 💼 Portfólio — Iago Rocha Oliveira

Portfólio profissional de desenvolvedor de software, com foco em **Android nativo (Kotlin)** e boas práticas de engenharia.

🔗 **Live:** [iagorochadev.github.io](https://iagorochadev.github.io)

---

## 🖥️ Sobre o Projeto

Site estático e responsivo criado para apresentar projetos, competências técnicas e trajetória profissional de forma moderna e atrativa para recrutadores e clientes.

### Funcionalidades

- **Showcase de projetos** com screenshots reais dos apps, filtro por tecnologia e página de detalhes
- **Stack técnica** organizada por categorias (Linguagens, UI, Arquitetura, Jetpack, Backend, etc.)
- **Dark/Light Mode** com alternância suave
- **Responsivo** — adaptado para desktop, tablet e mobile
- **Animações** sutis de scroll reveal para melhor experiência de navegação
- **SEO** básico com meta tags e estrutura semântica

---

## 🛠️ Tecnologias Utilizadas

| Camada       | Tecnologia                        |
| ------------ | --------------------------------- |
| Framework    | React 18 + TypeScript             |
| Build        | Vite                              |
| Estilização  | Tailwind CSS + shadcn/ui          |
| Ícones       | Lucide React                      |
| Roteamento   | React Router DOM                  |
| Deploy       | GitHub Pages (site estático)      |

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/IagoRochaDev/iagorochadev.github.io.git

# Acesse a pasta
cd iagorochadev.github.io

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

---

## 📦 Build e Deploy

```bash
# Gerar build de produção
npm run build

# Os arquivos estáticos serão gerados em /dist
```

### Deploy no GitHub Pages

1. No `vite.config.ts`, ajuste a propriedade `base` para o nome do repositório:
   ```ts
   base: '/',  // ou '/nome-do-repo/' se não for user page
   ```
2. Faça o build e publique a pasta `dist` na branch `gh-pages`, ou configure GitHub Actions para deploy automático.

---

## 📁 Estrutura do Projeto

```
src/
├── assets/            # Imagens e screenshots dos projetos
├── components/        # Componentes React (Navbar, Hero, Projects, Skills, etc.)
│   └── ui/            # Componentes base (shadcn/ui)
├── data/              # Dados centralizados (projetos, skills)
├── hooks/             # Hooks customizados (scroll reveal, mobile detection)
├── pages/             # Páginas (Index, NotFound)
└── lib/               # Utilitários
```

---

## 👤 Autor

**Iago Rocha Oliveira**

- 🔗 [LinkedIn](https://www.linkedin.com/in/iagorochadev)
- 🐙 [GitHub](https://github.com/IagoRochaDev)
- 📧 iagor.oliveira00@gmail.com
