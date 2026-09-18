/**
 * Trang /lessons/[slug] — Trang bài học chi tiết
 *
 * ============================================================
 * LUỒNG DỮ LIỆU (Data Flow)
 * ============================================================
 * 1. Nhận slug từ URL params (ví dụ: "introduction-to-vectors")
 * 2. Tìm lesson theo slug → nếu không có → 404
 * 3. Từ lesson.moduleId → tìm module chứa bài học
 * 4. Từ module.courseId → tìm course chứa module
 * 5. Render breadcrumb, video placeholder, ghi chú bài giảng
 *
 * Đây là cách dữ liệu quan hệ (relational data) hoạt động:
 * Lesson → thuộc Module → thuộc Course
 * ============================================================
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getLessonBySlug,
  getModuleById,
  getCourseById,
} from "@/lib/courses";
import { formatDuration } from "@/lib/utils";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Bước 1: Tìm bài học
  const lesson = await getLessonBySlug(slug);
  if (!lesson) {
    notFound();
  }

  // Bước 2: Tìm module chứa bài học (để lấy tên module và courseId)
  const lessonModule = await getModuleById(lesson.moduleId);

  // Bước 3: Tìm khóa học (để tạo breadcrumb và link quay lại)
  const course = lessonModule ? await getCourseById(lessonModule.courseId) : undefined;

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb navigation */}
      <nav className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
        <Link
          href="/courses"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Khóa học
        </Link>

        {course && (
          <>
            <span className="mx-2">→</span>
            <Link
              href={`/courses/${course.slug}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {course.title}
            </Link>
          </>
        )}

        <span className="mx-2">→</span>
        <span className="text-foreground font-medium">{lesson.title}</span>
      </nav>

      {/* Tiêu đề bài học + thời lượng */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          {lesson.title}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          {lesson.description}
        </p>
        <div className="mt-3 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <span>⏱ {formatDuration(lesson.durationSeconds)}</span>
          {lessonModule && <span>📁 {lessonModule.title}</span>}
        </div>
      </div>

      {/* Video placeholder — sau này sẽ dùng video player thật */}
      <div className="mb-10 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 aspect-video flex items-center justify-center">
        <div className="text-center text-neutral-400">
          <div className="text-5xl mb-3">▶️</div>
          <p className="text-sm">Video Player</p>
          <p className="text-xs mt-1 text-neutral-500">
            {lesson.videoUrl}
          </p>
        </div>
      </div>

      {/* Ghi chú bài giảng */}
      {lesson.notes && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">📝 Ghi chú bài giảng</h2>
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800">
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
              {lesson.notes}
            </p>
          </div>
        </section>
      )}

      {/* Nút quay lại khóa học */}
      {course && (
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Quay lại {course.title}
          </Link>
        </div>
      )}
    </main>
  );
}
