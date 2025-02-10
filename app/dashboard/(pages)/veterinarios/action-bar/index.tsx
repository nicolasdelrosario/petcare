'use client'

// react and next
import { useState } from 'react'

// components
import { CreateVeterinarianForm } from '../create-veterinarian-form'

// shadcn components
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogHeader,
	DialogTrigger,
	DialogTitle,
	DialogDescription,
	DialogContent,
} from '@/components/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

// icons
import { ListFilter, ArrowDownUp, Stethoscope } from 'lucide-react'

export function ActionBar() {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className='flex w-full flex-col justify-between gap-4 space-y-2 lg:flex-row lg:space-y-0'>
			<div className='lg:min-w-[360px] xl:min-w-[600px]'>
				<Input placeholder='Search...' type='search'></Input>
			</div>
			<div className='flex items-center gap-2 sm:gap-4'>
				{/* filter */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' size='sm'>
							<ListFilter className='size-5' />
							Filtrar
						</Button>
					</DropdownMenuTrigger>
				</DropdownMenu>

				{/* sort */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' size='sm'>
							<ArrowDownUp className='size-5' />
							Ordenar
						</Button>
					</DropdownMenuTrigger>
				</DropdownMenu>

				{/* add vets */}
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger asChild>
						<Button size='sm'>
							<Stethoscope className='hidden size-5 sm:block' />
							Registrar
						</Button>
					</DialogTrigger>
					<DialogContent className='space-y-2 sm:max-w-[425px]'>
						<DialogHeader>
							<DialogTitle>Registrar Veterinario</DialogTitle>
							<DialogDescription>
								Ingresa los datos del veterinario. Clic en registrar una vez
								hayas terminado.
							</DialogDescription>
						</DialogHeader>
						<CreateVeterinarianForm onClose={() => setOpen(false)} />
					</DialogContent>
				</Dialog>
			</div>
		</div>
	)
}
