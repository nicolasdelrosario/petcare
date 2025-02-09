// next and react
import Link from 'next/link'

// components
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { ModeToggle } from '@/components/mode-toggle'

// icons
import { PawPrint } from 'lucide-react'

// config
import { ROUTES } from '@/constants/routes'

export function Navbar() {
	return (
		<MaxWidthWrapper>
			<nav
				className='flex h-16 w-full items-center justify-between'
				aria-label='Auth navigation'
			>
				<div className='flex items-center'>
					<Link
						href={ROUTES.HOME}
						className='flex flex-shrink-0 items-center text-xl font-bold'
					>
						<PawPrint className='mr-2 size-6' />
						Petcare
					</Link>
				</div>
				{/* Actions */}
				<div className='flex items-center'>
					<ModeToggle />
				</div>
			</nav>
		</MaxWidthWrapper>
	)
}
