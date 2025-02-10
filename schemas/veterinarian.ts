import * as z from 'zod'

export const createVeterinarianSchema = z.object({
	name: z.string().min(2, {
		message: 'El nombre debe tener al menos 2 caracteres',
	}),
	email: z.string().email({
		message: 'Ingresa un correo válido',
	}),
	phone: z.string().min(9, {
		message: 'Ingresa un número de teléfono válido',
	}),
	specialization_id: z
		.string({
			required_error: 'Selecciona una especialización',
		})
		.min(1, 'Selecciona una especialización'),
})

export const updateVeterinarianSchema = createVeterinarianSchema.partial()

export type CreateVeterinarianInput = z.infer<typeof createVeterinarianSchema>
export type UpdateVeterinarianInput = z.infer<typeof updateVeterinarianSchema>
