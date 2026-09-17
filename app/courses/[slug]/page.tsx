/**
 * Trang /courses/[slug] — Chi tiết 1 khóa học
 *
 * ============================================================
 * DYNAMIC ROUTE (Đường dẫn động)
 * ============================================================
 * Thư mục [slug] trong app/courses/[slug]/ tạo ra dynamic route:
 * - /courses/linear-algebra  → slug = "linear-algebra"
 * - /courses/calculus         → slug = "calculus"
 * - /courses/xyz              → slug = "xyz" (không tồn tại → 404)
 *
 * Next.js truyền giá trị slug vào component qua prop `params`.
 *
 * ============================================================
 * QUAN TRỌNG: params LÀ PROMISE
 * ============================================================
 * Trong Next.js 15+, `params` là một Promise. Bạn PHẢI dùng `await`
 * để lấy giá trị. Component phải là `async function`.
 *
 * ============================================================
 * notFound()
 * ============================================================
 * Khi slug không khớp với bất kỳ khóa học nào, ta gọi notFound()
 * từ "next/navigation". Hàm này sẽ hiển thị trang 404 mặc định
 * hoặc file not-found.tsx nếu bạn tạo.
 * ============================================================
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCourseBySlug,
  getModulesByCourseId,
  getLessonsByModuleId,
} from "@/lib/mock-data";
import LessonList from "@/components/course/LessonList";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params vì nó là Promise trong Next.js 15+
  const { slug } = await params;

  // Tìm khóa học theo slug
  const course = getCourseBySlug(slug);

  // Nếu không tìm thấy → hiển thị trang 404
  if (!course) {
    notFound();
  }

  // Lấy danh sách modules của khóa học này
  const modules = getModulesByCourseId(course.id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb navigation — đường dẫn quay lại */}
      <nav className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
        <Link
          href="/courses"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Khóa học
        </Link>
        <span className="mx-2">→</span>
        <span className="text-foreground font-medium">{course.title}</span>
      </nav>

      {/* Header khóa học */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          {course.title}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Danh sách Modules */}
      <section>
        <h2 className="text-xl font-bold mb-6">
          Nội dung khóa học ({modules.length} module)
        </h2>

        <div className="space-y-6">
          {modules.map((mod) => {
            const moduleLessons = getLessonsByModuleId(mod.id);

            return (
              <div
                key={mod.id}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
              >
                {/* Header module */}
                <div className="px-5 py-4 bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-semibold">
                    Module {mod.position}: {mod.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {moduleLessons.length} bài học
                  </p>
                </div>

                {/* Danh sách bài học */}
                <div className="p-2">
                  <LessonList lessons={moduleLessons} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
