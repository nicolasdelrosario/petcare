'use server'

// react and next
import Link from 'next/link'

// utils
import { createClient } from '@/lib/supabase/server'

// components
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { ModeToggle } from '@/components/mode-toggle'
import { SignOutButton } from '@/components/sign-out-button'
import { buttonVariants } from '@/components/ui/button'

// icons
import { PawPrint } from 'lucide-react'

// config
import { ROUTES } from '@/constants/routes'

export async function Navbar() {
	const supabase = await createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	return (
		<MaxWidthWrapper>
			<nav
				className='flex h-16 w-full items-center justify-between'
				aria-label='Main navigation'
			>
				{/* Logo */}
				<div>
					<Link
						href={ROUTES.HOME}
						className='flex flex-shrink-0 items-center text-xl font-bold'
					>
						<PawPrint className='mr-2 size-6' />
						Petcare
					</Link>
				</div>
				{/* Actions */}
				<div className='flex items-center gap-2'>
					<ModeToggle />
					{!user ? (
						<>
							<Link
								href={ROUTES.AUTH.LOGIN}
								className={buttonVariants({
									variant: 'ghost',
								})}
							>
								Iniciar sesión
							</Link>
							<Link href={ROUTES.AUTH.REGISTER} className={buttonVariants()}>
								Registrarse
							</Link>
						</>
					) : (
						<>
							<SignOutButton />
							<Link href={ROUTES.DASHBOARD.HOME} className={buttonVariants()}>
								Dashboard ✨
							</Link>
						</>
					)}
				</div>
			</nav>
		</MaxWidthWrapper>
	)
}
