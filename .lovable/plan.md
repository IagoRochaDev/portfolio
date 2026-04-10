

## Plano: Reescrever textos com estratégia XYZ + adicionar seção de decisões técnicas + UDF em todos os projetos

### O que muda

**1. Adicionar UDF a todos os projetos na arquitetura**
- ExpenseApp já tem UDF — manter
- GymApp: adicionar `"UDF (Fluxo Unidirecional)"`
- RecipeApp: já tem UDF — manter

**2. Reescrever textos com estratégia XYZ (Google)**

Formato: **O que fez → Resultado → Como fez**

**ExpenseApp**
- `description`: "Desenvolvi um aplicativo Android para gestão de despesas, possibilitando sincronização de dados em tempo real e persistência na nuvem, utilizando Kotlin, Firebase Firestore e arquitetura MVVM."
- `longDescription`: Texto expandido seguindo XYZ com explicações sobre escolha do Firebase, MVVM, Canvas API, Room + Flow, Clean Architecture. Justificativas de por que cada tecnologia foi escolhida e o que ela resolve.

**GymApp**
- `description`: "Desenvolvi um aplicativo Android para gerenciamento de treinos, estruturando o código de forma organizada e de fácil manutenção, utilizando Kotlin e arquitetura MVVM."
- `longDescription`: Texto XYZ + justificativa de MVVM mesmo em projeto menor (prática de separação de responsabilidades, testabilidade, escalabilidade futura).

**RecipeApp**
- `description`: "Desenvolvi um aplicativo Android integrado a API REST de receitas, garantindo atualização dinâmica dos dados e melhor experiência do usuário, utilizando Kotlin, Retrofit e arquitetura MVVM com camada de repositório."
- `longDescription`: Texto XYZ + justificativa do Retrofit, camada de repositório (abstração de origem de dados), MVVM, Coil, monitoramento de rede.

**3. Adicionar campo `techJustifications` ao tipo `Project`**

Novo campo opcional no interface:
```ts
techJustifications?: { tech: string; reason: string }[];
```

Cada projeto terá justificativas como:
- "Firebase Firestore foi escolhido por oferecer sincronização automática em tempo real..."
- "Retrofit foi utilizado para simplificar a comunicação com a API REST..."
- "Room foi adotado para persistência local com suporte reativo via Flow..."

**4. Renderizar seção "Decisões Técnicas" no ProjectDetail**

Nova seção entre Tecnologias e Arquitetura exibindo cada justificativa em cards com o nome da tecnologia em destaque e a explicação abaixo.

### Arquivos editados

| Arquivo | Mudança |
|---|---|
| `src/data/portfolio-data.ts` | Interface + textos XYZ + techJustifications + UDF no GymApp |
| `src/components/ProjectDetail.tsx` | Nova seção "Decisões Técnicas" |

