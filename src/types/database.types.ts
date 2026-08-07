/**
 * Tipos generados del esquema de Supabase.
 *
 * Para regenerar este archivo desde el proyecto Supabase, ejecutá:
 *   supabase gen types typescript --project-id <PROJECT_ID> --schema public > src/types/database.types.ts
 *
 * Mientras tanto, este stub mantiene la compatibilidad con createClient<Database>().
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      [key: string]: {
        Row: Record<string, unknown>
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: never[]
      }
    }
    Views: {
      [key: string]: {
        Row: Record<string, unknown>
        Relationships: never[]
      }
    }
    Functions: Record<string, never>
    Enums: {
      [key: string]: string
    }
    CompositeTypes: {
      [key: string]: Record<string, unknown>
    }
  }
}