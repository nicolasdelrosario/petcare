'use server'

// react and next
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// utils
import { createClient } from '@/lib/supabase/server'

// types and schemas
import { loginSchema } from '@/schemas/auth'
import type { LoginInput } from '@/schemas/auth'

export async function login(data: LoginInput) {
	const result = loginSchema.safeParse(data)
	if (!result.success) return { error: 'Invalid input data' }

	const supabase = await createClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: data.email,
		password: data.password,
	})

	if (error) return { error: 'Invalid credentials' }

	revalidatePath('/dashboard/home', 'layout')
	redirect('/dashboard/home')
}

export async function logout() {
	const supabase = await createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (user) await supabase.auth.signOut()

	revalidatePath('/', 'layout')
	redirect('/')
}
