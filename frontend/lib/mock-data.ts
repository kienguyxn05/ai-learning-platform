/**
 * Mock Data Layer — Dữ liệu giả mô phỏng database
 *
 * ============================================================
 * TẠI SAO TẠO FILE NÀY?
 * ============================================================
 * Thay vì kết nối Supabase ngay từ đầu, chúng ta dùng dữ liệu cứng
 * (hardcoded) để tập trung vào UI và routing trước.
 *
 * Các hàm ở cuối file (getCourses, getCourseBySlug, ...) được thiết kế
 * giống như các hàm sẽ query database sau này. Khi chuyển sang Supabase
 * ở Phase 3, chỉ cần thay nội dung bên trong mỗi hàm — KHÔNG cần sửa
 * bất kỳ component nào đang gọi chúng.
 *
 * ============================================================
 * DỮ LIỆU GỒM NHỮNG GÌ?
 * ============================================================
 * 1 Category: Mathematics
 * 2 Courses:  Linear Algebra, Calculus
 * Mỗi Course có 2 Modules, mỗi Module có 2-3 Lessons
 * ============================================================
 */

import { Category, Course, Module, Lesson } from "@/types";

// ─── Categories ───────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "cat-1",
    name: "Mathematics",
    slug: "mathematics",
    description: "Nền tảng toán học cho khoa học máy tính và kỹ thuật",
    createdAt: "2024-01-01T00:00:00Z",
  },
];

// ─── Courses ──────────────────────────────────────────────────

const courses: Course[] = [
  {
    id: "course-1",
    categoryId: "cat-1",
    title: "Linear Algebra",
    slug: "linear-algebra",
    description:
      "Học về vector, ma trận, hệ phương trình tuyến tính và các phép biến đổi tuyến tính — nền tảng quan trọng cho Machine Learning và Computer Graphics.",
    level: "beginner",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "course-2",
    categoryId: "cat-1",
    title: "Calculus",
    slug: "calculus",
    description:
      "Giải tích vi phân và tích phân: giới hạn, đạo hàm, tích phân và ứng dụng trong tối ưu hóa và mô hình hóa.",
    level: "intermediate",
    createdAt: "2024-02-01T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z",
  },
];

// ─── Modules ──────────────────────────────────────────────────

const modules: Module[] = [
  // Linear Algebra modules
  {
    id: "mod-1",
    courseId: "course-1",
    title: "Vectors and Spaces",
    position: 1,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "mod-2",
    courseId: "course-1",
    title: "Matrix Transformations",
    position: 2,
    createdAt: "2024-01-15T00:00:00Z",
  },
  // Calculus modules
  {
    id: "mod-3",
    courseId: "course-2",
    title: "Limits and Continuity",
    position: 1,
    createdAt: "2024-02-01T00:00:00Z",
  },
  {
    id: "mod-4",
    courseId: "course-2",
    title: "Derivatives",
    position: 2,
    createdAt: "2024-02-01T00:00:00Z",
  },
];

// ─── Lessons ──────────────────────────────────────────────────

const lessons: Lesson[] = [
  // Module 1: Vectors and Spaces
  {
    id: "lesson-1",
    moduleId: "mod-1",
    title: "Introduction to Vectors",
    slug: "introduction-to-vectors",
    description: "Tìm hiểu khái niệm vector, biểu diễn hình học và các phép toán cơ bản trên vector.",
    videoUrl: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
    notes:
      "Vector là đại lượng có cả hướng và độ lớn. Trong không gian 2D, vector được biểu diễn bằng cặp (x, y). Các phép toán cơ bản gồm cộng vector, nhân với scalar, và tích vô hướng (dot product).",
    durationSeconds: 720,
    position: 1,
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "lesson-2",
    moduleId: "mod-1",
    title: "Linear Combinations and Span",
    slug: "linear-combinations-and-span",
    description: "Hiểu về tổ hợp tuyến tính, không gian sinh (span), và cơ sở (basis) của không gian vector.",
    videoUrl: "https://www.youtube.com/watch?v=k7RM-ot2NWY",
    notes:
      "Tổ hợp tuyến tính của các vector v1, v2 là tất cả vector dạng a*v1 + b*v2 với a, b là scalar bất kỳ. Span là tập hợp tất cả các tổ hợp tuyến tính có thể tạo được.",
    durationSeconds: 900,
    position: 2,
    createdAt: "2024-01-16T00:00:00Z",
    updatedAt: "2024-01-16T00:00:00Z",
  },
  {
    id: "lesson-3",
    moduleId: "mod-1",
    title: "Linear Independence",
    slug: "linear-independence",
    description: "Phân biệt các vector độc lập tuyến tính và phụ thuộc tuyến tính.",
    videoUrl: "https://www.youtube.com/watch?v=CrV1xCWdY-g",
    notes:
      "Tập vector được gọi là độc lập tuyến tính khi không vector nào có thể được biểu diễn bằng tổ hợp tuyến tính của các vector còn lại. Nếu có thể, chúng được gọi là phụ thuộc tuyến tính.",
    durationSeconds: 660,
    position: 3,
    createdAt: "2024-01-17T00:00:00Z",
    updatedAt: "2024-01-17T00:00:00Z",
  },

  // Module 2: Matrix Transformations
  {
    id: "lesson-4",
    moduleId: "mod-2",
    title: "Introduction to Matrices",
    slug: "introduction-to-matrices",
    description: "Tìm hiểu ma trận, các phép toán trên ma trận và ý nghĩa hình học của chúng.",
    videoUrl: "https://www.youtube.com/watch?v=xyAuNHPsq-g",
    notes:
      "Ma trận là bảng số hình chữ nhật m×n. Phép nhân ma trận có thể hiểu như phép biến đổi tuyến tính: biến vector đầu vào thành vector đầu ra thông qua xoay, co giãn, hoặc phản chiếu.",
    durationSeconds: 840,
    position: 1,
    createdAt: "2024-01-20T00:00:00Z",
    updatedAt: "2024-01-20T00:00:00Z",
  },
  {
    id: "lesson-5",
    moduleId: "mod-2",
    title: "Matrix Multiplication",
    slug: "matrix-multiplication",
    description: "Hiểu cơ chế nhân ma trận và ý nghĩa của phép hợp thành biến đổi.",
    videoUrl: "https://www.youtube.com/watch?v=XkY2DOUCWMU",
    notes:
      "Nhân hai ma trận A (m×n) và B (n×p) cho ra ma trận C (m×p). Mỗi phần tử C[i][j] là tích vô hướng của hàng i trong A và cột j trong B. Nhân ma trận không có tính giao hoán: AB ≠ BA.",
    durationSeconds: 780,
    position: 2,
    createdAt: "2024-01-21T00:00:00Z",
    updatedAt: "2024-01-21T00:00:00Z",
  },

  // Module 3: Limits and Continuity
  {
    id: "lesson-6",
    moduleId: "mod-3",
    title: "Understanding Limits",
    slug: "understanding-limits",
    description: "Khái niệm giới hạn của hàm số và cách tính giới hạn cơ bản.",
    videoUrl: "https://www.youtube.com/watch?v=riXcZT2ICjA",
    notes:
      "Giới hạn mô tả hành vi của hàm số khi biến x tiến tới một giá trị. Ký hiệu: lim(x→a) f(x) = L có nghĩa là f(x) tiến gần tới L khi x tiến gần tới a.",
    durationSeconds: 600,
    position: 1,
    createdAt: "2024-02-01T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z",
  },
  {
    id: "lesson-7",
    moduleId: "mod-3",
    title: "Continuity of Functions",
    slug: "continuity-of-functions",
    description: "Định nghĩa tính liên tục và phân loại các dạng gián đoạn.",
    videoUrl: "https://www.youtube.com/watch?v=joewRl1CTL8",
    notes:
      "Hàm f liên tục tại x = a khi: (1) f(a) xác định, (2) lim(x→a) f(x) tồn tại, và (3) lim(x→a) f(x) = f(a). Nếu thiếu bất kỳ điều kiện nào, hàm gián đoạn tại điểm đó.",
    durationSeconds: 540,
    position: 2,
    createdAt: "2024-02-02T00:00:00Z",
    updatedAt: "2024-02-02T00:00:00Z",
  },

  // Module 4: Derivatives
  {
    id: "lesson-8",
    moduleId: "mod-4",
    title: "Introduction to Derivatives",
    slug: "introduction-to-derivatives",
    description: "Đạo hàm là gì? Ý nghĩa hình học và vật lý của đạo hàm.",
    videoUrl: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
    notes:
      "Đạo hàm f'(x) đo tốc độ thay đổi tức thời của f tại x. Ý nghĩa hình học: đạo hàm là hệ số góc của tiếp tuyến tại điểm đó trên đồ thị hàm số.",
    durationSeconds: 720,
    position: 1,
    createdAt: "2024-02-05T00:00:00Z",
    updatedAt: "2024-02-05T00:00:00Z",
  },
  {
    id: "lesson-9",
    moduleId: "mod-4",
    title: "Differentiation Rules",
    slug: "differentiation-rules",
    description: "Các quy tắc đạo hàm: quy tắc tích, thương, chuỗi.",
    videoUrl: "https://www.youtube.com/watch?v=5yfh5cf4-0w",
    notes:
      "Các quy tắc cơ bản: Power rule (x^n)' = n*x^(n-1). Product rule: (fg)' = f'g + fg'. Quotient rule: (f/g)' = (f'g - fg') / g². Chain rule: [f(g(x))]' = f'(g(x)) * g'(x).",
    durationSeconds: 900,
    position: 2,
    createdAt: "2024-02-06T00:00:00Z",
    updatedAt: "2024-02-06T00:00:00Z",
  },
];

// ═══════════════════════════════════════════════════════════════
// HÀM TRUY VẤN DỮ LIỆU (Data Access Functions)
// ═══════════════════════════════════════════════════════════════
// Các hàm này mô phỏng database queries.
// Sau này ở Phase 3, chỉ cần thay phần thân hàm bằng Supabase queries
// mà KHÔNG cần sửa component nào đang dùng chúng.
// ═══════════════════════════════════════════════════════════════

/** Lấy tất cả khóa học */
export function getCourses(): Course[] {
  return courses;
}

/** Lấy 1 khóa học theo slug, trả về undefined nếu không tìm thấy */
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

/** Lấy tất cả modules của 1 khóa học, sắp xếp theo position */
export function getModulesByCourseId(courseId: string): Module[] {
  return modules
    .filter((m) => m.courseId === courseId)
    .sort((a, b) => a.position - b.position);
}

/** Lấy tất cả lessons của 1 module, sắp xếp theo position */
export function getLessonsByModuleId(moduleId: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.position - b.position);
}

/** Lấy 1 bài học theo slug, trả về undefined nếu không tìm thấy */
export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

/** Lấy module chứa 1 lesson cụ thể */
export function getModuleById(moduleId: string): Module | undefined {
  return modules.find((m) => m.id === moduleId);
}

/** Lấy course chứa 1 module cụ thể */
export function getCourseById(courseId: string): Course | undefined {
  return courses.find((c) => c.id === courseId);
}

/** Lấy category theo id */
export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((cat) => cat.id === categoryId);
}
