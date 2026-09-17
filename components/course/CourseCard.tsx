/**
 * CourseCard — Thẻ hiển thị thông tin tóm tắt của 1 khóa học
 *
 * ============================================================
 * ĐÂY LÀ SERVER COMPONENT (mặc định)
 * ============================================================
 * Component này KHÔNG có "use client" ở đầu file, nên nó chạy trên server.
 * Nó chỉ nhận props và render HTML tĩnh → không cần JavaScript phía client.
 *
 * ============================================================
 * LINK COMPONENT
 * ============================================================
 * Dùng <Link> từ "next/link" thay vì <a href>:
 * - <a> sẽ reload toàn bộ trang (full page reload)
 * - <Link> thực hiện client-side navigation (chỉ thay đổi phần {children}
 *   trong layout, không reload navbar/footer) → mượt hơn và nhanh hơn
 *
 * ============================================================
 * PROPS & TYPESCRIPT
 * ============================================================
 * Component nhận đúng 1 prop có kiểu Course (import từ types/).
 * TypeScript sẽ báo lỗi nếu ta truyền thiếu trường hoặc sai kiểu.
 * ============================================================
 */

import Link from "next/link";
import { Course } from "@/types";

/** Mapping cấp độ sang nhãn tiếng Việt và màu sắc */
const levelConfig = {
  beginner: { label: "Cơ bản", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  intermediate: { label: "Trung bình", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
  advanced: { label: "Nâng cao", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
};

export default function CourseCard({ course }: { course: Course }) {
  const level = levelConfig[course.level];

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700"
    >
      {/* Thumbnail placeholder — sau này sẽ dùng course.thumbnailUrl */}
      <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
        <span className="text-4xl">📐</span>
      </div>

      {/* Nội dung thẻ */}
      <div className="p-5">
        {/* Badge cấp độ */}
        <span
          className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full mb-3 ${level.color}`}
        >
          {level.label}
        </span>

        {/* Tiêu đề khóa học */}
        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {course.title}
        </h3>

        {/* Mô tả — giới hạn 2 dòng */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {course.description}
        </p>
      </div>
    </Link>
  );
}
