export default function DebugEnvPage() {
  const envVars = {
    NEXT_PUBLIC_IDENTITY_SERVER_URL: process.env.NEXT_PUBLIC_IDENTITY_SERVER_URL || 'NOT SET',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'NOT SET',
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID || 'NOT SET',
    NEXT_PUBLIC_SCOPES: process.env.NEXT_PUBLIC_SCOPES || 'NOT SET',
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL || 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV || 'NOT ON VERCEL',
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Environment Variables Debug</h1>
      <pre style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        {JSON.stringify(envVars, null, 2)}
      </pre>
      <hr />
      <h2>Instructions:</h2>
      <p>If you see "NOT SET" for any NEXT_PUBLIC_* variable:</p>
      <ol>
        <li>Go to Vercel Dashboard → Settings → Environment Variables</li>
        <li>Add the missing variable with correct value</li>
        <li>Select Environment: Production</li>
        <li>Redeploy (Deployments → ... → Redeploy without cache)</li>
      </ol>
    </div>
  )
}
