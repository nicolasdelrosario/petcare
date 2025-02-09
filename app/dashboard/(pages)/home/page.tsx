// components
import { HeaderPage } from '../../components/header-page'
import { MainPage } from '../../components/main-page'

// constants
import { ROUTES } from '@/constants/routes'

export default function Home() {
	const breadcrumbItems = [
		{
			label: 'Dashboard',
			href: ROUTES.DASHBOARD.HOME,
		},
		{
			label: 'Inicio',
			isCurrentPage: true,
		},
	]

	return (
		<>
			<HeaderPage breadcrumbItems={breadcrumbItems} />
			<MainPage>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					<div className='bg-muted/50 aspect-video rounded-xl' />
					<div className='bg-muted/50 aspect-video rounded-xl' />
					<div className='bg-muted/50 aspect-video rounded-xl' />
					<div className='bg-muted/50 aspect-video rounded-xl' />
				</div>
				<div className='bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min' />
			</MainPage>
		</>
	)
}
