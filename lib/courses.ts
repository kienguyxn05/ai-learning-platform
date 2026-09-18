/**
 * Data Access Layer cho Khóa học, Module và Bài học
 *
 * Tự động chuyển đổi giữa Supabase Database (khi có cấu hình)
 * và Mock Data (khi chưa cấu hình hoặc trong môi trường dev cục bộ).
 */

import { isSupabaseConfigured, createClient } from "@/lib/supabase/server";
import * as mockData from "@/lib/mock-data";
import type { Course, Module, Lesson } from "@/types";

/**
 * Lấy danh sách tất cả các khóa học
 */
export async function getCourses(): Promise<Course[]> {
  if (!isSupabaseConfigured()) {
    return mockData.getCourses();
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error || !data) {
      console.warn("Lỗi tải courses từ Supabase, chuyển sang mock data:", error);
      return mockData.getCourses();
    }

    return data.map((item) => ({
      id: item.id,
      categoryId: item.category_id || "",
      title: item.title,
      slug: item.slug,
      description: item.description,
      thumbnailUrl: item.thumbnail_url || undefined,
      level: item.level,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
    }));
  } catch (err) {
    console.warn("Exception khi gọi Supabase, dùng mock data:", err);
    return mockData.getCourses();
  }
}

/**
 * Lấy chi tiết 1 khóa học bằng slug
 */
export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  if (!isSupabaseConfigured()) {
    return mockData.getCourseBySlug(slug);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return mockData.getCourseBySlug(slug);
    }

    return {
      id: data.id,
      categoryId: data.category_id || "",
      title: data.title,
      slug: data.slug,
      description: data.description,
      thumbnailUrl: data.thumbnail_url || undefined,
      level: data.level,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch {
    return mockData.getCourseBySlug(slug);
  }
}

/**
 * Lấy danh sách các module thuộc về một khóa học
 */
export async function getModulesByCourseId(courseId: string): Promise<Module[]> {
  if (!isSupabaseConfigured()) {
    return mockData.getModulesByCourseId(courseId);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("modules")
      .select("*")
      .eq("course_id", courseId)
      .order("position", { ascending: true });

    if (error || !data) {
      return mockData.getModulesByCourseId(courseId);
    }

    return data.map((item) => ({
      id: item.id,
      courseId: item.course_id,
      title: item.title,
      position: item.position,
      createdAt: item.created_at,
    }));
  } catch {
    return mockData.getModulesByCourseId(courseId);
  }
}

/**
 * Lấy danh sách bài học thuộc về một module
 */
export async function getLessonsByModuleId(moduleId: string): Promise<Lesson[]> {
  if (!isSupabaseConfigured()) {
    return mockData.getLessonsByModuleId(moduleId);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("module_id", moduleId)
      .order("position", { ascending: true });

    if (error || !data) {
      return mockData.getLessonsByModuleId(moduleId);
    }

    return data.map((item) => ({
      id: item.id,
      moduleId: item.module_id,
      title: item.title,
      slug: item.slug,
      description: item.description || "",
      videoUrl: item.video_url || "",
      transcript: item.transcript || undefined,
      notes: item.notes || undefined,
      durationSeconds: item.duration_seconds,
      position: item.position,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
    }));
  } catch {
    return mockData.getLessonsByModuleId(moduleId);
  }
}

/**
 * Lấy chi tiết 1 bài học theo slug
 */
export async function getLessonBySlug(slug: string): Promise<Lesson | undefined> {
  if (!isSupabaseConfigured()) {
    return mockData.getLessonBySlug(slug);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return mockData.getLessonBySlug(slug);
    }

    return {
      id: data.id,
      moduleId: data.module_id,
      title: data.title,
      slug: data.slug,
      description: data.description || "",
      videoUrl: data.video_url || "",
      transcript: data.transcript || undefined,
      notes: data.notes || undefined,
      durationSeconds: data.duration_seconds,
      position: data.position,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch {
    return mockData.getLessonBySlug(slug);
  }
}

/**
 * Lấy module theo ID
 */
export async function getModuleById(id: string): Promise<Module | undefined> {
  if (!isSupabaseConfigured()) {
    return mockData.getModuleById(id);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("modules")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return mockData.getModuleById(id);
    }

    return {
      id: data.id,
      courseId: data.course_id,
      title: data.title,
      position: data.position,
      createdAt: data.created_at,
    };
  } catch {
    return mockData.getModuleById(id);
  }
}

/**
 * Lấy course theo ID
 */
export async function getCourseById(id: string): Promise<Course | undefined> {
  if (!isSupabaseConfigured()) {
    return mockData.getCourseById(id);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return mockData.getCourseById(id);
    }

    return {
      id: data.id,
      categoryId: data.category_id || "",
      title: data.title,
      slug: data.slug,
      description: data.description,
      thumbnailUrl: data.thumbnail_url || undefined,
      level: data.level,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch {
    return mockData.getCourseById(id);
  }
}
