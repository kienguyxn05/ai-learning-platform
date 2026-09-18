import type { Course, Lesson } from "@/types";

const SPRING_BOOT_BASE_URL =
  process.env.SPRING_BOOT_API_URL || "http://localhost:8080/api";

export type SpringModuleDto = {
  id: string;
  courseId: string;
  title: string;
  position: number;
  lessons: Lesson[];
};

export type SpringCourseDetailDto = {
  course: Course;
  modules: SpringModuleDto[];
};

/**
 * Gọi API lấy danh sách khóa học từ Spring Boot Backend
 */
export async function fetchCoursesFromSpring(): Promise<Course[] | null> {
  try {
    const res = await fetch(`${SPRING_BOOT_BASE_URL}/courses`, {
      next: { revalidate: 60 }, // Cache 60s trong Next.js
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

/**
 * Gọi API lấy chi tiết khóa học kèm modules và lessons từ Spring Boot
 */
export async function fetchCourseDetailFromSpring(
  slug: string
): Promise<SpringCourseDetailDto | null> {
  try {
    const res = await fetch(`${SPRING_BOOT_BASE_URL}/courses/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

/**
 * Gọi API lấy chi tiết 1 bài học từ Spring Boot
 */
export async function fetchLessonFromSpring(slug: string): Promise<Lesson | null> {
  try {
    const res = await fetch(`${SPRING_BOOT_BASE_URL}/lessons/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}
