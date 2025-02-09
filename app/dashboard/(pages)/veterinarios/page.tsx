// components
import { HeaderPage } from '../../components/header-page'
import { MainPage } from '../../components/main-page'
import { VeterinarianCard } from './veterinarian-card'

// utils
import { createClient } from '@/lib/supabase/server'

// types
import { Veterinarian } from '@/types/veterinarian'

// constants
import { ROUTES } from '@/constants/routes'

export default async function Veterinarios() {
	const breadcrumbItems = [
		{
			label: 'Dashboard',
			href: ROUTES.DASHBOARD.HOME,
		},
		{
			label: 'Veterinarios',
			isCurrentPage: true,
		},
	]

	const supabase = await createClient()
	const { data: veterinarians, error } = await supabase
		.from('veterinarian')
		.select(`id, name, email, phone, veterinarian_specialization ( id, name ) `)
		.is('deleted_at', null)
		.returns<Veterinarian[]>()

	return (
		<>
			<HeaderPage breadcrumbItems={breadcrumbItems} />
			<MainPage>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{veterinarians?.map(veterinarian => (
						<VeterinarianCard
							key={veterinarian.id}
							veterinarian={veterinarian}
						/>
					))}
				</div>
			</MainPage>
		</>
	)
}
