'use server'

// react and next
import { revalidatePath } from 'next/cache'

// utils
import { createClient } from '@/lib/supabase/server'

// schemas
import { CreateVeterinarianInput } from '@/schemas/veterinarian'

// types
import { Veterinarian, VeterinarianSpecialization } from '@/types/veterinarian'

// constants
import { ROUTES } from '@/constants/routes'

export async function getVeterinarians() {
	const supabase = await createClient()
	const { data, error } = await supabase
		.from('veterinarian')
		.select(`id, name, email, phone, veterinarian_specialization ( id, name ) `)
		.is('deleted_at', null)
		.returns<Veterinarian[]>()

	if (error) throw new Error(`Error al obtener veterinarios: ${error.message}`)

	return data
}

export async function getSpecializations() {
	const supabase = await createClient()
	const { data, error } = await supabase
		.from('veterinarian_specialization')
		.select(`id, name`)
		.is('deleted_at', null)
		.returns<VeterinarianSpecialization[]>()

	if (error)
		throw new Error(`Error al obtener especializaciones: ${error.message}`)

	return data
}

export async function createVeterinarian({
	name,
	email,
	phone,
	specialization_id,
}: CreateVeterinarianInput) {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from('veterinarian')
		.insert({
			name,
			email,
			phone,
			specialization_id,
		})
		.select(`id, name, email, phone, veterinarian_specialization ( id, name )`)
		.single()

	if (error) throw new Error(`Error al crear veterinario: ${error.message}`)

	revalidatePath(ROUTES.DASHBOARD.VETERINARIANS)
	return data
}
