# 🚀 AI Learning Platform (Fullstack Monorepo)

Nền tảng học tập cá nhân hóa ứng dụng AI với kiến trúc **Next.js (Frontend)** + **Spring Boot (Backend)** + **Supabase PostgreSQL (Database)**.

---

## 📁 Cấu trúc thư mục (Monorepo Architecture)

```text
ai-learning-platform/
│
├── 🌐 frontend/              # Ứng dụng Next.js 16 + React 19 + Tailwind CSS
│   ├── app/                  # Routing theo App Router (/, /courses, /lessons)
│   ├── components/           # UI Components (CourseCard, LessonList...)
│   ├── lib/                  # Data Access Layer & API Clients
│   └── types/                # TypeScript Domain & Database Types
│
├── ☕ backend/               # Ứng dụng Spring Boot 3 / 4 (Java 21 LTS)
│   ├── src/main/java/        # 4 tầng: Entity -> Repository -> Service -> Controller
│   └── pom.xml               # Quản lý thư viện Maven (Spring Web, JPA, PostgreSQL)
│
└── 🗄️ supabase/              # Cơ sở dữ liệu PostgreSQL
    ├── schema.sql            # Bản thiết kế bảng, khóa ngoại, RLS, Index
    └── seed.sql              # Dữ liệu mẫu ban đầu
```

---

## 🛠️ Hướng dẫn khởi chạy dự án

### 1. Chạy Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Trang web sẽ chạy tại: **`http://localhost:3000`**

---

### 2. Chạy Backend (Spring Boot)
Yêu cầu: Máy đã cài đặt JDK 21 LTS.
```bash
cd backend
.\mvnw.cmd spring-boot:run
```
REST API Backend sẽ chạy tại: **`http://localhost:8080`**

Các Endpoint REST API có sẵn:
- `GET http://localhost:8080/api/courses`: Danh sách tất cả khóa học
- `GET http://localhost:8080/api/courses/{slug}`: Chi tiết khóa học kèm modules và bài học
- `GET http://localhost:8080/api/lessons/{slug}`: Chi tiết bài học
