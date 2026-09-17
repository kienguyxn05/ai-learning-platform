/**
 * Core domain types for AI Learning Platform
 */

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
};

export type Course = {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  description: string;
  thumbnailUrl?: string;
  level: "beginner" | "intermediate" | "advanced";
  createdAt: string;
  updatedAt: string;
};

export type Module = {
  id: string;
  courseId: string;
  title: string;
  position: number;
  createdAt: string;
};

export type Lesson = {
  id: string;
  moduleId: string;
  title: string;
  slug: string;
  description: string;
  videoUrl: string;
  transcript?: string;
  notes?: string;
  durationSeconds: number;
  position: number;
  createdAt: string;
  updatedAt: string;
};
