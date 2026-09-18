import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

/**
 * Tạo Supabase Client dùng cho Client Components ("use client")
 *
 * Chạy trên trình duyệt (Browser), tự động duy trì session trong cookies.
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY trong file .env.local"
    );
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}
