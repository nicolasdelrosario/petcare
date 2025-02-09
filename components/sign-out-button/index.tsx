'use client'

// react and next.js
import { useRouter } from 'next/navigation'
import type { ComponentProps } from 'react'

// components
import { Button } from '@/components/ui/button'

// Actions
import { logout } from '@/app/(auth)/actions'

interface Props extends ComponentProps<typeof Button> {}

export function SignOutButton({ className, ...props }: Props) {
	const router = useRouter()

	const handleSignout = async () => {
		await logout()
		router.refresh()
	}

	return (
		<Button
			className={className}
			variant='ghost'
			onClick={handleSignout}
			{...props}
		>
			Cerrar sesión
		</Button>
	)
}
