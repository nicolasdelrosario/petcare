'use client'

// react and next
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// third-party libraries
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// actions
import { login } from '../../actions'

// config
import { ROUTES } from '@/constants/routes'
import { AUTH_MESSAGES } from '@/constants/messages'

// types and schemas
import type { LoginInput } from '@/app/(auth)/utils/auth'
import { loginSchema } from '@/app/(auth)/utils/auth'

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

export function LoginForm() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	async function onSubmit(data: LoginInput) {
		setIsLoading(true)

		try {
			const result = await login(data)

			if (result?.error) {
				toast.error(AUTH_MESSAGES.ERRORS.LOGIN_ERROR, {
					className: 'bg-red-500 text-white',
					description: AUTH_MESSAGES.ERRORS.INVALID_CREDENTIALS,
				})
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='Ingresa tu correo'
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
					name='password'
					render={({ field }) => (
						<FormItem>
							<div className='flex items-center justify-between'>
								<FormLabel>Contraseña</FormLabel>
								<Button
									variant='link'
									className='px-0'
									onClick={() => router.push(ROUTES.AUTH.FORGOT_PASSWORD)}
								>
									¿Olvidaste tu contraseña?
								</Button>
							</div>
							<FormControl>
								<Input
									type='password'
									placeholder='Ingresa tu contraseña'
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full' disabled={isLoading}>
					{isLoading
						? AUTH_MESSAGES.LOADING.SIGNING_IN
						: AUTH_MESSAGES.BUTTONS.SIGN_IN}
				</Button>
			</form>
		</Form>
	)
}
