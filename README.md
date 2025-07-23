# ✅ Taskly — Gerenciador de Tarefas e Hábitos

**Taskly** é uma aplicação moderna de gerenciamento de tarefas, hábitos e notas rápidas. Pensada para ser leve, responsiva, personalizável e totalmente integrada ao Firebase, a plataforma oferece um dashboard produtivo, com clima em tempo real, dark mode e organização visual eficiente.

---

## 🧠 Funcionalidades

- ✅ **Login e cadastro** com Firebase Auth (Google e Email/Senha)
- 📋 **Tarefas organizadas por status e categoria**
- 📌 **Notas rápidas (stickynotes)** salvas em tempo real
- 🔁 **Hábitos diários** com rastreamento e progresso visual
- 🌤️ **Clima em tempo real** baseado na sua localização
- 🎨 **Tema light/dark** com persistência
- 🔍 **Filtros e ordenação de tarefas**
- 📱 **Responsividade completa** para dispositivos móveis
- ⚙️ **CI com GitHub Actions** para testes e qualidade contínua

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia                      | Descrição                                    |
| ------------------------------- | -------------------------------------------- |
| **Next.js (App Router)**        | Framework principal com SSR e rotas modernas |
| **React + TypeScript**          | Tipagem forte e componentes reativos         |
| **Tailwind CSS + shadcn/ui**    | Estilização moderna e acessível              |
| **Firebase (Auth + Firestore)** | Backend serverless para dados e autenticação |
| **React Hook Form + Zod**       | Validação e controle de formulários          |
| **React Query (TanStack)**      | Fetch e cache automático com Firebase        |
| **Vitest + Testing Library**    | Testes unitários e de integração             |
| **GitHub Actions**              | Pipeline de CI para testes e lint            |
| **OpenWeather API**             | Clima em tempo real via localização          |

---

## 🧪 Testes

- Testes unitários para funções e hooks
- Testes de integração para tarefas, notas e temas
- Testes E2E com Cypress (em progresso)
- CI configurado para rodar automaticamente a cada push

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Instalação

```bash
git clone https://github.com/fernandaflx/taskly.git
cd taskly
pnpm install
pnpm dev
```

### Scripts disponíveis

| Comando     | Ação                                       |
| ----------- | ------------------------------------------ |
| `pnpm dev`  | Inicia a aplicação em modo desenvolvimento |
| `pnpm lint` | Roda o ESLint                              |
| `pnpm test` | Roda os testes com Vitest                  |

---

## 🔐 Configuração do Firebase

Crie um projeto no [Firebase](https://console.firebase.google.com/) e configure:

- Auth (Google e Email/Senha)
- Firestore Database

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=xxxxxxxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxxxxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxxxxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxxxxxxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxxxxxxxx
NEXT_PUBLIC_WEATHER_API_KEY=xxxxxxxxxx
```

---

<!-- ## 📸 Preview

![Preview do Dashboard](./public/preview.png)

--- -->

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, contribuir e compartilhar.

---

## 💬 Contato

Desenvolvido com 💻❤️ por [Fernanda Felix](https://www.linkedin.com/in/fernandaleitefelix)  
Entre em contato para ideias, feedbacks ou parcerias!
