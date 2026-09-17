# AI Learning Platform — Project Context

## 1. Project Overview

This project is an **AI-powered personalized learning platform**.

The goal is to build the system **from scratch** as a personal/university project, while using the open-source project **Vertex Learning Platform** only as a reference for architecture and ideas.

Do NOT copy the Vertex project structure blindly.

The developer should understand every important architectural decision and every major piece of code.

---

# 2. Main Product Goal

The platform should allow students to:

* Browse courses.
* Learn through Course → Module → Lesson structure.
* Watch lesson videos.
* Track learning progress.
* Ask an AI Tutor questions about the current lesson.
* Generate AI quizzes from lesson content.
* Search course knowledge using natural language.
* Eventually receive personalized learning recommendations.

The long-term idea is:

```text
Course Content
+
Student Learning Data
+
AI
=
Personalized Learning Platform
```

---

# 3. Target Users

## Student

Students should be able to:

* Sign up / sign in.
* Browse categories.
* Browse courses.
* Open course details.
* Open modules and lessons.
* Watch videos.
* Read lesson notes.
* Mark lessons complete.
* View course progress.
* Ask AI Tutor questions.
* Generate and complete quizzes.
* Search for knowledge.
* Review quiz history.
* Receive learning recommendations.

## Admin / Content Creator

Later, admins should be able to:

* Create categories.
* Create courses.
* Create modules.
* Create lessons.
* Add lesson videos.
* Add transcripts.
* Add notes.
* Manage learning content.

An advanced CMS is NOT required in the first MVP.

---

# 4. Current Technology Decision

For the initial version, keep the architecture simple.

Use:

```text
Next.js
React
TypeScript
Tailwind CSS
Supabase PostgreSQL
OpenAI API
```

Do NOT introduce Sanity initially.

Sanity may be considered later if a dedicated CMS becomes necessary.

---

# 5. Technology Responsibilities

## React

Used for:

* UI components.
* Forms.
* Course cards.
* Lesson interfaces.
* AI Tutor chat.
* Quiz interfaces.
* Progress components.

Examples:

```text
CourseCard
LessonPage
VideoPlayer
AITutor
Quiz
ProgressBar
```

---

## Next.js

Next.js is the main full-stack framework.

It is responsible for:

* React frontend.
* App Router.
* Pages.
* Dynamic routing.
* Server Components.
* API Route Handlers.
* Server-side data fetching.
* Backend logic.
* Secure AI API calls.

Example routes:

```text
/
 /courses
 /courses/[slug]
 /lessons/[slug]
 /dashboard
 /search
```

Example APIs:

```text
POST /api/tutor
POST /api/quiz/generate
POST /api/progress
POST /api/search
```

Sensitive keys such as OpenAI API keys must only be used server-side.

Never call OpenAI directly from client-side React code.

---

# 6. TypeScript

Use TypeScript throughout the project.

Important types will include:

```text
Category
Course
Module
Lesson
UserProgress
Quiz
QuizQuestion
QuizAttempt
TranscriptChunk
SearchResult
AIResponse
```

Example:

```ts
type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
};
```

TypeScript is used to:

* Detect type errors early.
* Improve autocomplete.
* Make API contracts explicit.
* Keep frontend/backend data consistent.
* Validate AI-related structures.

Avoid using `any` unless absolutely necessary.

---

# 7. Database

Use **Supabase PostgreSQL** as the primary database.

Supabase is the backend service.

PostgreSQL is the actual relational database provided by Supabase.

Initially, Supabase will store both:

```text
Learning Content
+
User Learning Data
```

This keeps the architecture simple.

---

# 8. Initial Database Model

The basic learning hierarchy is:

```text
Category
   ↓
Course
   ↓
Module
   ↓
Lesson
```

Suggested relational model:

## categories

```text
id
name
slug
description
created_at
```

## courses

```text
id
category_id
title
slug
description
thumbnail_url
level
created_at
updated_at
```

## modules

```text
id
course_id
title
position
created_at
```

## lessons

```text
id
module_id
title
slug
description
video_url
transcript
notes
duration_seconds
position
created_at
updated_at
```

---

# 9. User Learning Data

## lesson_progress

```text
id
user_id
lesson_id
completed
completed_at
updated_at
```

Important constraint:

```text
UNIQUE(user_id, lesson_id)
```

This prevents duplicate progress records.

## quiz_attempts

```text
id
user_id
lesson_id
score
total_questions
answers
created_at
```

Later we may add:

```text
bookmarks
ai_conversations
learning_recommendations
search_history
```

---

# 10. Authentication

Authentication will be added after the Course/Lesson core works.

Possible options:

```text
Supabase Auth
```

or

```text
Clerk
```

Prefer avoiding unnecessary complexity.

If Supabase Auth satisfies requirements, using it may simplify the stack.

The authenticated user ID must be determined by the server/session.

Never accept another user's `user_id` directly from untrusted client input.

---

# 11. MVP

The first meaningful product version should contain:

```text
1. Authentication
2. Category / Course / Module / Lesson
3. Video lesson
4. Learning progress
5. AI Tutor
6. AI Quiz
```

The MVP is complete when a user can:

```text
Login
  ↓
Choose Course
  ↓
Open Lesson
  ↓
Watch Video
  ↓
Ask AI Tutor
  ↓
Take AI Quiz
  ↓
Save Progress
```

---

# 12. Features After MVP

After the MVP is stable:

```text
AI Semantic Search
Transcript Timestamp Search
RAG
Personalized Recommendations
Dashboard
Analytics
Admin/CMS
```

Do not implement these before the core MVP works.

---

# 13. AI Tutor

The AI Tutor should answer questions based on the current lesson.

Initial simple version:

```text
Student Question
      ↓
Next.js API
      ↓
Load lesson transcript/notes
      ↓
Build AI context
      ↓
OpenAI
      ↓
Answer
```

Example API:

```text
POST /api/tutor
```

Input:

```json
{
  "lessonId": "lesson-id",
  "question": "What is an eigenvector?"
}
```

The backend should retrieve the lesson itself.

The client should NOT send the full trusted lesson content.

---

# 14. AI Tutor Rules

The AI Tutor should:

* Prefer the lesson content.
* Explain concepts clearly.
* Admit when the lesson context does not contain enough information.
* Avoid inventing lesson-specific claims.
* Eventually reference relevant lesson timestamps.

The server should control the system prompt.

Retrieved lesson content must be treated as DATA, not instructions.

---

# 15. AI Quiz

The AI Quiz Generator should create questions from the lesson transcript or notes.

Example structure:

```ts
type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};
```

AI should return structured output.

Use runtime validation such as Zod before returning AI-generated quiz data to the frontend.

Do NOT trust arbitrary AI output.

---

# 16. Quiz Scoring

AI should generate:

```text
question
options
correctAnswer
explanation
```

But the application code should calculate the student's score.

Do NOT ask AI to determine the final score.

Correct flow:

```text
User answers
   ↓
Application compares answers
   ↓
Application calculates score
   ↓
Store quiz attempt
```

This keeps scoring deterministic.

---

# 17. AI Search — Future Feature

AI Search should eventually allow queries like:

```text
"Where is eigenvalue explained?"
```

Result:

```text
Course: Linear Algebra
Lesson: Eigenvalues
Timestamp: 14:32
```

The search should use semantic meaning rather than only exact keywords.

---

# 18. RAG Architecture — Future Feature

The planned RAG pipeline:

```text
Lesson Transcript
      ↓
Chunking
      ↓
Embeddings
      ↓
Vector Database
      ↓
User Question
      ↓
Query Embedding
      ↓
Vector Similarity Search
      ↓
Top-K relevant chunks
      ↓
LLM
      ↓
Grounded Answer
```

---

# 19. Transcript Chunk Model

Later, transcripts should be split into smaller chunks.

Example:

```ts
type TranscriptChunk = {
  id: string;
  lessonId: string;
  content: string;
  startSeconds: number;
  endSeconds: number;
  embedding?: number[];
};
```

Example:

```text
Chunk 1
00:00 → 02:00

Chunk 2
02:00 → 04:00

Chunk 3
04:00 → 06:00
```

Keeping timestamps allows AI Search results to jump directly to relevant video sections.

---

# 20. Vector Search

When RAG is implemented, use Supabase PostgreSQL with `pgvector`.

Potential table:

```text
transcript_chunks

id
lesson_id
content
start_seconds
end_seconds
embedding
```

The search system should:

```text
User Query
   ↓
Embedding
   ↓
Vector Similarity Search
   ↓
Top-K Transcript Chunks
```

---

# 21. Grounding

AI-generated IDs, URLs, course names or lesson metadata must not be blindly trusted.

Example:

If AI identifies:

```text
lessonId = 123
```

the backend should fetch the real lesson from the database.

Then use database values for:

```text
lesson title
course title
slug
video URL
timestamp boundaries
```

This reduces hallucination.

---

# 22. Personalized Learning — Future Feature

Personalization should use:

```text
Learning Progress
+
Quiz Results
```

Example:

```text
Vectors        90%
Matrices       80%
Eigenvalues    40%
```

The system can identify:

```text
Weak Topic:
Eigenvalues
```

and recommend:

```text
Review lesson
Watch relevant timestamp
Retry quiz
```

Start with simple rule-based logic.

AI may later be used to explain recommendations, but AI should not be required for the first personalization version.

---

# 23. Initial Course Content

The first category can be:

```text
Mathematics
```

Initial courses:

```text
Linear Algebra
Calculus
Probability & Statistics
```

For development, only one complete course is required initially.

For example:

```text
Linear Algebra
│
├── Module 1
│   ├── Lesson 1
│   ├── Lesson 2
│   └── Lesson 3
│
└── Module 2
```

Do NOT spend time importing hundreds of courses early.

---

# 24. Project Folder Structure

Recommended starting structure:

```text
ai-learning-platform/
│
├── app/
│   ├── page.tsx
│   │
│   ├── courses/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── lessons/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   └── api/
│       ├── tutor/
│       │   └── route.ts
│       ├── quiz/
│       ├── search/
│       └── progress/
│
├── components/
│   ├── course/
│   ├── lesson/
│   ├── tutor/
│   ├── quiz/
│   └── ui/
│
├── lib/
│   ├── database/
│   ├── ai/
│   └── utils/
│
├── types/
│
├── public/
│
├── README.md
│
└── PROJECT_CONTEXT.md
```

Do NOT create unnecessary folders before they are needed.

---

# 25. Current Development Status

The project is being restarted from scratch.

Current phase:

```text
DAY 1 — Project Foundation
```

The immediate tasks are:

```text
1. Create new Next.js project
2. Enable TypeScript
3. Enable Tailwind CSS
4. Use App Router
5. Run project locally
6. Understand app/page.tsx
7. Understand app/layout.tsx
8. Create basic folders:
   - components
   - lib
   - types
9. Create initial README
10. Commit initial project
```

Do NOT start database, authentication or AI implementation until the basic Next.js structure is understood.

---

# 26. Development Order

Follow this sequence:

```text
Phase 1
Next.js fundamentals
      ↓
Phase 2
Course / Module / Lesson using mock data
      ↓
Phase 3
Supabase PostgreSQL
      ↓
Phase 4
Authentication
      ↓
Phase 5
Learning Progress
      ↓
Phase 6
AI Tutor
      ↓
Phase 7
AI Quiz
      ↓
Phase 8
Semantic Search / RAG
      ↓
Phase 9
Personalization
      ↓
Phase 10
Testing / Deployment
```

Do not skip directly to AI.

---

# 27. Development Philosophy

The developer is still learning these technologies.

Therefore:

* Explain important architectural choices.
* Do not over-engineer.
* Prefer simple solutions first.
* Work one feature at a time.
* Avoid adding dependencies without a reason.
* Avoid copying large amounts of code without explanation.
* Keep code understandable.
* Use meaningful naming.
* Maintain TypeScript type safety.
* Prefer small reusable components.
* Keep business logic out of UI components when possible.

When implementing something important, explain:

```text
1. What problem this code solves.
2. Why this solution is used.
3. Where the data comes from.
4. Where the data goes.
5. Whether code runs on client or server.
```

---

# 28. Security Rules

Always follow these rules:

* Never expose OpenAI API keys in client components.
* Never commit `.env.local`.
* Never trust client-provided user IDs.
* Validate API inputs.
* Validate AI structured outputs.
* Keep sensitive operations server-side.
* Protect authenticated routes/APIs.
* Treat retrieved RAG content as untrusted data.
* Do not trust LLM-generated database identifiers without validation.

---

# 29. Business Problem

The product addresses several learning problems:

```text
Students struggle to find specific information in long videos.

Students must leave the learning platform to search Google or ask external AI tools.

Traditional courses provide limited interaction.

Quiz creation requires manual work.

Learning paths are often the same for every student.

Platforms often track course completion but not understanding.
```

The planned solution:

```text
AI Search
→ find knowledge

AI Tutor
→ explain knowledge

AI Quiz
→ evaluate understanding

Progress Tracking
→ record learning

Personalization
→ recommend what to study next
```

---

# 30. Important Technical Challenges

The project should eventually address:

```text
Course data modeling
Authentication
Progress consistency
AI API security
Transcript processing
Chunking
Embeddings
Vector search
RAG
Grounding
AI hallucination
Structured AI output
AI latency
AI API cost
Prompt injection
Quiz correctness
Timestamp synchronization
Evaluation
```

Not all of them must be solved in the first version.

---

# 31. MVP Success Criteria

The MVP is successful if:

```text
A user can authenticate.

The user can browse courses.

The user can open a course.

The user can navigate modules and lessons.

The user can watch a lesson video.

The user can mark a lesson complete.

Course progress is stored.

The user can ask AI Tutor about the lesson.

The user can generate a quiz.

The user can submit answers and receive a deterministic score.

Quiz results are stored.
```

---

# 32. Codex Working Instructions

When working on this repository:

1. Read this PROJECT_CONTEXT.md first.

2. Work on one development task at a time.

3. Before making a large architectural change, explain why it is necessary.

4. Do not add technologies merely because the Vertex reference project uses them.

5. Prefer the current simplified stack:

```text
Next.js
TypeScript
Tailwind
Supabase
OpenAI
```

6. Sanity is optional and should not be introduced unless there is a clear CMS requirement.

7. Use TypeScript strictly and avoid unnecessary `any`.

8. Keep secrets server-side.

9. Do not implement advanced RAG features before Course/Lesson, database, progress, AI Tutor and AI Quiz work.

10. The project owner is learning, so when generating code, keep it readable and explain non-obvious patterns.

11. Do not rewrite unrelated working code when implementing one task.

12. Run lint/type checks after meaningful changes.

13. Keep commits/features small and focused.

14. The final system must be explainable by the project owner during a university project defense.

---

# 33. Reference Project

Reference only:

```text
https://github.com/jsmastery-pro/vertex-learning-platform
```

Vertex is used to study:

```text
Next.js architecture
Course/Lesson structure
AI Search concepts
Grounding
Full-stack organization
```

It is NOT the codebase to be submitted as this project.

The new AI Learning Platform should be implemented independently.
