// third-party libraries
import { createBrowserClient } from '@supabase/ssr'

// Config
import { env } from '@/config/env'

/**
 * Browser Client
 * Used for: Client Components that need real-time features
 * Context: Runs in the browser
 * Best for:
 * - Real-time subscriptions
 * - Client-side interactions
 * - Immediate UI updates
 * - WebSocket connections
 * Note: Cannot access server-only features or environment variables
 */
export function createClient() {
	return createBrowserClient(
		env.NEXT_PUBLIC_SUPABASE_URL!,
		env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	)
}
