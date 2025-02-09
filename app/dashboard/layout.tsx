// next and react
import { redirect } from 'next/navigation'

// components
import { AppSidebar } from './components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

// utils
import { createClient } from '@/lib/supabase/server'

interface Props {
	children: React.ReactNode
}

export default async function Layout({ children }: Props) {
	const supabase = await createClient()
	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (!session) redirect('/iniciar-sesion')

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	)
}
