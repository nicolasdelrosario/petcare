'use client'

// next
import { useRouter } from 'next/navigation'

// components
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// constants
import { ROUTES } from '@/constants/routes'

// icons
import { House, ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
	const router = useRouter()

	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<Card className='mx-4 w-full max-w-md border-0 shadow-none'>
				<CardContent className='text-center'>
					<p className='text-muted-foreground mb-2 text-lg'>404</p>
					<h1 className='mb-4 text-4xl font-bold'>Página no encontrada</h1>
					<p className='text-muted-foreground mb-8'>
						Lo sentimos, no pudimos encontrar la página que estás buscando. Por
						favor, verifica la URL o regresa al inicio.
					</p>
					<div className='flex justify-center gap-4'>
						<Button
							size='sm'
							variant='default'
							onClick={() => router.push(ROUTES.HOME)}
						>
							<House className='mr-1 size-5' />
							Ir al inicio
						</Button>
						<Button size='sm' variant='outline' onClick={() => router.back()}>
							<ArrowLeft className='mr-1 size-5' />
							Volver
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
