// This file is loaded before any other code in Next.js
// Perfect place to validate environment variables

export async function register() {
  // Import env validation - this will throw error if env vars are missing
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./libs/env')
  }
}
