// third-party libraries
import { createServerClient } from '@supabase/ssr'

// react and next
import { NextResponse, type NextRequest } from 'next/server'

// config
import { env } from '@/config/env'

export async function updateSession(request: NextRequest) {
	let supabaseResponse = NextResponse.next({
		request,
	})

	const supabase = createServerClient(
		env.NEXT_PUBLIC_SUPABASE_URL!,
		env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll()
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value }) =>
						request.cookies.set(name, value)
					)
					supabaseResponse = NextResponse.next({
						request,
					})
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options)
					)
				},
			},
		}
	)

	await supabase.auth.getUser()

	return supabaseResponse
}
