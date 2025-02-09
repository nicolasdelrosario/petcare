// Icons
import {
	Home,
	PawPrint,
	Calendar,
	Settings,
	Users,
	Stethoscope,
	FileText,
	Syringe,
	Receipt,
	Building2,
} from 'lucide-react'

export const ROUTES = {
	// Public routes
	HOME: '/',

	// Authentication routes
	AUTH: {
		LOGIN: '/iniciar-sesion',
		REGISTER: '/registrarse',
		FORGOT_PASSWORD: '/recuperar-contrasena',
	},

	// Protected routes
	DASHBOARD: {
		HOME: '/dashboard/home',
		PETS: '/dashboard/mascotas',
		APPOINTMENTS: '/dashboard/citas',
		VETERINARIANS: '/dashboard/veterinarios',
		OWNERS: '/dashboard/tutores',
		MEDICAL_RECORDS: '/dashboard/historias-clinicas',
		VACCINATIONS: '/dashboard/vacunas',
		INVOICES: '/dashboard/facturas',
		SERVICES: '/dashboard/servicios',
		SETTINGS: '/dashboard/ajustes',
	},
} as const

export const DASHBOARD_NAV = [
	{
		title: 'Inicio',
		url: ROUTES.DASHBOARD.HOME,
		icon: Home,
		description: 'Vista general de tu dashboard',
	},
	{
		title: 'Tutores',
		url: ROUTES.DASHBOARD.OWNERS,
		icon: Users,
		description: 'Administra los tutores',
	},
	{
		title: 'Mascotas',
		url: ROUTES.DASHBOARD.PETS,
		icon: PawPrint,
		description: 'Administra las mascotas',
	},
	{
		title: 'Veterinarios',
		url: ROUTES.DASHBOARD.VETERINARIANS,
		icon: Stethoscope,
		description: 'Equipo veterinario',
	},
	{
		title: 'Citas',
		url: ROUTES.DASHBOARD.APPOINTMENTS,
		icon: Calendar,
		description: 'Programa y gestiona citas',
	},
	{
		title: 'Historias Clínicas',
		url: ROUTES.DASHBOARD.MEDICAL_RECORDS,
		icon: FileText,
		description: 'Registros médicos',
	},
	{
		title: 'Vacunas',
		url: ROUTES.DASHBOARD.VACCINATIONS,
		icon: Syringe,
		description: 'Control de vacunación',
	},
	{
		title: 'Facturas',
		url: ROUTES.DASHBOARD.INVOICES,
		icon: Receipt,
		description: 'Gestión de facturas',
	},
	{
		title: 'Servicios',
		url: ROUTES.DASHBOARD.SERVICES,
		icon: Building2,
		description: 'Servicios veterinarios',
	},
	{
		title: 'Ajustes',
		url: ROUTES.DASHBOARD.SETTINGS,
		icon: Settings,
		description: 'Configura tu cuenta',
		items: [
			{
				title: 'General',
				url: '/general',
			},
			{
				title: 'Equipo',
				url: '/equipo',
			},
		],
	},
] as const
