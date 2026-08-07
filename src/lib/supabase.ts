import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

function getEnv(name: 'VITE_SUPABASE_URL' | 'VITE_SUPABASE_PUBLISHABLE_KEY'): string {
  const value = import.meta.env[name]
  if (!value) {
    throw new Error(
      `[supabase] Falta la variable de entorno ${name}. ` +
      `Asegurate de tener un archivo .env con su valor. ` +
      `Revisa .env.example para ver las claves requeridas.`
    )
  }
  return value
}

const url = supabaseUrl ?? getEnv('VITE_SUPABASE_URL')
const key = supabaseKey ?? getEnv('VITE_SUPABASE_PUBLISHABLE_KEY')

export const supabase = createClient<Database>(url, key)