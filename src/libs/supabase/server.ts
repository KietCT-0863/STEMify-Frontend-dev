import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient | null = null

export function getSupabase() {
  if (!supabaseInstance) {
    const url = process.env.SUPABASE_URL || ''
    const key = process.env.SUPABASE_ANON_KEY || ''
    
    if (!url || !key) {
      throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set')
    }
    
    supabaseInstance = createClient(url, key)
  }
  return supabaseInstance
}

// For backward compatibility
export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop) {
    return getSupabase()[prop as keyof SupabaseClient]
  }
})
