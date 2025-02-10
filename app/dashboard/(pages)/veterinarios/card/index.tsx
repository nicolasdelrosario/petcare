// shadcn components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// utils
import { getInitials } from '@/utils/get-initials'
import { Veterinarian } from '@/types/veterinarian'

// icons
import { Mail, Phone } from 'lucide-react'

interface Props {
	veterinarian: Veterinarian
}

export function VeterinarianCard({ veterinarian }: Props) {
	const avatarInitials = getInitials(veterinarian.name)

	return (
		<Card className='bg-sidebar'>
			<CardHeader className='flex flex-row items-center gap-4'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
					<AvatarFallback>{avatarInitials}</AvatarFallback>
				</Avatar>
				<div className='flex flex-col'>
					<CardTitle className='text-base font-semibold tracking-wide break-words'>
						{veterinarian.name}
					</CardTitle>
					<p className='text-muted-foreground text-sm'>
						{veterinarian.veterinarian_specialization.name}
					</p>
				</div>
			</CardHeader>
			<CardContent>
				<div className='text-muted-foreground space-y-2'>
					<div className='flex items-center gap-2'>
						<Mail className='size-4' />
						<span className='truncate text-sm'>{veterinarian.email}</span>
					</div>
					<div className='flex items-center gap-2'>
						<Phone className='size-4' />
						<span className='truncate text-sm'>{veterinarian.phone}</span>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default VeterinarianCard
