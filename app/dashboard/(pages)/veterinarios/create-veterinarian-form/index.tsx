'use client'

// react and next
import { useState, useEffect } from 'react'

// third-party libraries
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// actions
import { createVeterinarian, getSpecializations } from '../actions'

// config
import { CREATE_MESSAGES } from '@/constants/messages'

// types and schemas
import type { CreateVeterinarianInput } from '@/schemas/veterinarian'
import { createVeterinarianSchema } from '@/schemas/veterinarian'

// ui components
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { DialogFooter } from '@/components/ui/dialog'
import { VeterinarianSpecialization } from '@/types/veterinarian'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface Props {
	onClose: () => void
}

export function CreateVeterinarianForm({ onClose }: Props) {
	const [isLoading, setIsLoading] = useState(false)
	const [specializations, setSpecializations] = useState<
		VeterinarianSpecialization[]
	>([])

	useEffect(() => {
		async function fetchSpecializations() {
			const data = await getSpecializations()
			setSpecializations(data || [])
		}
		fetchSpecializations()
	}, [])

	const form = useForm<CreateVeterinarianInput>({
		resolver: zodResolver(createVeterinarianSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			specialization_id: '',
		},
		mode: 'onSubmit',
	})

	async function onSubmit(data: CreateVeterinarianInput) {
		setIsLoading(true)

		try {
			await createVeterinarian(data)

			toast.success(CREATE_MESSAGES.SUCCESS.CREATE_SUCCESS)
			form.reset()
			onClose?.()

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_error) {
			toast.error(CREATE_MESSAGES.ERRORS.CREATE_ERROR)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex'>Nombre</FormLabel>
								<FormControl>
									<Input
										placeholder='Ingresa el nombre'
										disabled={isLoading}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex'>Correo</FormLabel>
								<FormControl>
									<Input
										placeholder='Ingresa el correo'
										disabled={isLoading}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex'>Teléfono</FormLabel>
								<FormControl>
									<Input
										placeholder='Ingresa el teléfono'
										disabled={isLoading}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='specialization_id'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex'>Especialización</FormLabel>
								<Select
									onValueChange={value => field.onChange(value)}
									value={field.value}
									disabled={isLoading}
								>
									<SelectTrigger>
										<SelectValue placeholder='Selecciona una especialización' />
									</SelectTrigger>
									<SelectContent>
										{specializations.map(specialization => (
											<SelectItem
												key={specialization.id}
												value={String(specialization.id)}
											>
												{specialization.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter>
						<Button type='submit' disabled={isLoading}>
							{isLoading
								? CREATE_MESSAGES.LOADING.CREATING
								: CREATE_MESSAGES.BUTTONS.CREATE}
						</Button>
					</DialogFooter>
				</form>
			</Form>
		</>
	)
}
