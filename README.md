# AI Learning Platform

An AI-powered personalized learning platform built from scratch with Next.js App Router, TypeScript, and Tailwind CSS.

---

## 🚀 Main Goal

The platform enables students to:
- Browse courses through a structured hierarchy: **Course → Module → Lesson**.
- Watch lesson videos and follow lesson transcripts and notes.
- Track completed lessons and view overall learning progress.
- Ask an **AI Tutor** context-aware questions grounded directly in lesson content.
- Take **AI Quizzes** generated from lesson notes with deterministic score calculation.
- Search course material using semantic AI search.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database (Phase 3)**: Supabase PostgreSQL
- **AI Integration (Phase 6-8)**: OpenAI API (Server-side Route Handlers)

---

## 📂 Project Structure

```text
ai-learning-platform/
├── app/                  # Next.js App Router (pages, layouts, route handlers)
│   ├── layout.tsx        # Root layout (HTML shell, global fonts, metadata)
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styling & Tailwind directives
├── components/           # Reusable React components
│   ├── course/           # Course cards, lists, outlines
│   ├── lesson/           # Video player, lesson notes, transcripts
│   ├── tutor/            # AI Tutor chat interface
│   ├── quiz/             # Quiz UI and question cards
│   └── ui/               # Generic UI atoms (buttons, badges, inputs)
├── lib/                  # Utilities, database clients, and helper functions
│   └── utils.ts          # Common formatting and helper utilities
├── types/                # TypeScript type definitions and domain models
│   └── index.ts          # Core entity types (Course, Module, Lesson, etc.)
├── public/               # Static assets (images, icons)
├── PROJECT_CONTEXT.md    # Master architecture and implementation specification
└── README.md             # Project documentation
```

---

## 🏁 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🗺️ Development Roadmap

- [x] **Day 1**: Project Foundation (Next.js, TypeScript, Tailwind CSS, App Router)
- [ ] **Phase 2**: Course / Module / Lesson navigation using mock data
- [ ] **Phase 3**: Supabase PostgreSQL database integration
- [ ] **Phase 4**: User Authentication
- [ ] **Phase 5**: Learning Progress tracking
- [ ] **Phase 6**: AI Tutor integration (Server-side OpenAI API)
- [ ] **Phase 7**: AI Quiz generator and scoring
- [ ] **Phase 8**: Semantic Search & RAG
- [ ] **Phase 9**: Personalized Recommendations
