// Environment variables validation
// This file will throw error at build time if required env vars are missing

const requiredEnvVars = {
  NEXT_PUBLIC_IDENTITY_SERVER_URL: process.env.NEXT_PUBLIC_IDENTITY_SERVER_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
  NEXT_PUBLIC_SCOPES: process.env.NEXT_PUBLIC_SCOPES,
} as const

// Validate at module load time (build time for server components)
Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value || value === 'undefined') {
    throw new Error(
      `❌ Missing required environment variable: ${key}\n` +
      `Please set it in Vercel Dashboard → Settings → Environment Variables\n` +
      `Current value: ${value}`
    )
  }
})

// Export validated env vars
export const env = {
  IDENTITY_SERVER_URL: requiredEnvVars.NEXT_PUBLIC_IDENTITY_SERVER_URL!,
  API_URL: requiredEnvVars.NEXT_PUBLIC_API_URL!,
  CLIENT_ID: requiredEnvVars.NEXT_PUBLIC_CLIENT_ID!,
  SCOPES: requiredEnvVars.NEXT_PUBLIC_SCOPES!,
  WS_URL: process.env.NEXT_PUBLIC_WS_URL || '',
} as const

// Log env vars in development
if (process.env.NODE_ENV === 'development') {
  console.log('✅ Environment variables loaded:', {
    IDENTITY_SERVER_URL: env.IDENTITY_SERVER_URL,
    API_URL: env.API_URL,
    CLIENT_ID: env.CLIENT_ID,
    SCOPES: env.SCOPES,
  })
}
