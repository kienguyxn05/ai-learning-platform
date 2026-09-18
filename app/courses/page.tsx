/**
 * Trang /courses — Danh sách tất cả khóa học
 *
 * ============================================================
 * ĐÂY LÀ SERVER COMPONENT
 * ============================================================
 * Trang này chạy hoàn toàn trên server:
 * 1. Gọi getCourses() để lấy dữ liệu (hiện tại là mock data,
 *    sau này sẽ là Supabase query).
 * 2. Render HTML trên server rồi gửi về trình duyệt.
 * 3. Không cần JavaScript phía client → tải nhanh, SEO tốt.
 *
 * ============================================================
 * METADATA
 * ============================================================
 * export const metadata tạo thẻ <title> và <meta description>
 * cho trang này. Next.js tự động merge với metadata từ layout.tsx.
 * ============================================================
 */

import { Metadata } from "next";
import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/course/CourseCard";

export const metadata: Metadata = {
  title: "Khóa học | AI Learning Platform",
  description: "Khám phá các khóa học với hệ thống AI Tutor và Quiz thông minh.",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Tiêu đề trang */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Khóa học
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Chọn khóa học để bắt đầu hành trình học tập của bạn.
        </p>
      </div>

      {/* Grid danh sách khóa học */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}
