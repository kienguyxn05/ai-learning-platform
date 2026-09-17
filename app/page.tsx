import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Badge trạng thái */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-900">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
        Day 1: Project Foundation Ready
      </div>

      {/* Tiêu đề chính */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mb-6">
        AI Learning Platform
      </h1>

      {/* Mô tả phụ */}
      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 leading-relaxed">
        Nền tảng học tập cá nhân hóa với trợ lý AI Tutor, hệ thống câu hỏi Quiz tự động và theo dõi tiến độ học tập thông minh.
      </p>

      {/* Nút CTA — điều hướng đến trang danh sách khóa học */}
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-10"
      >
        Khám phá khóa học →
      </Link>

      {/* Các tính năng cốt lõi (Kiến trúc theo Phase) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full text-left mt-4">
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
          <div className="text-2xl mb-2">📚</div>
          <h2 className="font-bold text-base mb-1">Cấu trúc phân cấp</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Khóa học được tổ chức chặt chẽ: Danh mục → Khóa học → Module → Bài học video.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
          <div className="text-2xl mb-2">🤖</div>
          <h2 className="font-bold text-base mb-1">AI Tutor thông minh</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Giải đáp thắc mắc của học viên bám sát vào transcript và ghi chú bài giảng.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
          <div className="text-2xl mb-2">📊</div>
          <h2 className="font-bold text-base mb-1">Quiz & Tiến độ</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Tự động sinh bài kiểm tra củng cố kiến thức và tính điểm minh bạch, chính xác.
          </p>
        </div>
      </div>
    </main>
  );
}