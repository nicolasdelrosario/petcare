// third-party libraries
import { createServerClient } from '@supabase/ssr'

// react and next
import { cookies } from 'next/headers'

// config
import { env } from '@/config/env'

/**
 * Server Client
 * Used for: Server Components and Server Actions
 * Context: Runs on the server only
 * Best for:
 * - Initial data fetching
 * - Authentication checks
 * - Secure operations
 * - Cookie management
 * - Protected API calls
 * Note: Has access to server-side features and can handle cookies
 */
export async function createClient() {
	const cookieStore = await cookies()

	return createServerClient(
		env.NEXT_PUBLIC_SUPABASE_URL!,
		env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll()
				},
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options)
						)
					} catch {
						// The `setAll` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
					}
				},
			},
		}
	)
}
