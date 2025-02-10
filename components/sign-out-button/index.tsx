'use client'

// react and next.js
import { useRouter } from 'next/navigation'
import type { ComponentProps } from 'react'

// components
import { Button } from '@/components/ui/button'

// Actions
import { logout } from '@/app/(auth)/actions'

export function SignOutButton({
	className,
	...props
}: ComponentProps<typeof Button>) {
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
