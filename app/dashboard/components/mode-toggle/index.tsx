'use client'

// next and react
import { useTheme } from 'next-themes'

// components
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// icons
import { Moon, Sun, Monitor } from 'lucide-react'

// This component might be just temporal
export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='bg-sidebar gap-2'>
					<span className='scale-100 transition-all dark:scale-0'>
						Tema Claro
					</span>
					<span className='absolute scale-0 transition-all dark:scale-100'>
						Tema Oscuro
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='bg-sidebar z-[110]' align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')} className='gap-2'>
					<Sun className='size-4' />
					Claro
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')} className='gap-2'>
					<Moon className='size-4' />
					Oscuro
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')} className='gap-2'>
					<Monitor className='size-4' />
					Sistema
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
