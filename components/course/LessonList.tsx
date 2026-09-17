/**
 * LessonList — Danh sách bài học bên trong 1 module
 *
 * ============================================================
 * CÁCH HOẠT ĐỘNG
 * ============================================================
 * Component nhận vào danh sách Lessons và render từng bài học dưới dạng
 * một dòng có link chuyển đến trang bài học (/lessons/[slug]).
 *
 * Thời lượng bài học được hiển thị bằng hàm formatDuration từ lib/utils.
 *
 * Đây là Server Component — chỉ render HTML tĩnh trên server.
 * ============================================================
 */

import Link from "next/link";
import { Lesson } from "@/types";
import { formatDuration } from "@/lib/utils";

export default function LessonList({ lessons }: { lessons: Lesson[] }) {
  if (lessons.length === 0) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
        Chưa có bài học nào trong module này.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
      {lessons.map((lesson, index) => (
        <li key={lesson.id}>
          <Link
            href={`/lessons/${lesson.slug}`}
            className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
          >
            {/* Bên trái: số thứ tự + tiêu đề */}
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-sm font-medium truncate">
                {lesson.title}
              </span>
            </div>

            {/* Bên phải: thời lượng */}
            <span className="flex-shrink-0 text-xs text-neutral-500 dark:text-neutral-400">
              {formatDuration(lesson.durationSeconds)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
