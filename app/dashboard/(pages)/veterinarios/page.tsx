// components
import { HeaderPage } from '../../components/header-page'
import { MainPage } from '../../components/main-page'
import { VeterinarianCard } from './card'
import { ActionBar } from './action-bar'

// constants
import { ROUTES } from '@/constants/routes'

// actions
import { getVeterinarians } from './actions'

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

	const veterinarians = await getVeterinarians()

	return (
		<>
			<HeaderPage breadcrumbItems={breadcrumbItems} />
			<MainPage>
				<ActionBar />
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
