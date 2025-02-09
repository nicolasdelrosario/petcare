'use client'

// react and next
import * as React from 'react'
import { useState, useEffect } from 'react'

// components
import { ModeToggle } from '../mode-toggle'

// shadcn
import { NavMain } from '../nav-main'
import { NavProjects } from '../nav-projects'
import { NavUser } from '../nav-user'
import { TeamSwitcher } from '../team-switcher'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar'

// icons
import {
	AudioWaveform,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
} from 'lucide-react'

// constants
import { DASHBOARD_NAV } from '@/constants/routes'

// utils
import { createClient } from '@/lib/supabase/client'
import { User } from '@/types/user'

// This is sample data.
const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveform,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: Command,
			plan: 'Free',
		},
	],
	projects: [
		{
			name: 'Design Engineering',
			url: '#',
			icon: Frame,
		},
		{
			name: 'Sales & Marketing',
			url: '#',
			icon: PieChart,
		},
		{
			name: 'Travel',
			url: '#',
			icon: Map,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const [user, setUser] = useState<User | null>(null)

	const getUser = async () => {
		const supabase = createClient()
		const {
			data: { user },
		} = await supabase.auth.getUser()
		setUser(user as User | null)
	}

	useEffect(() => {
		getUser()
	}, [])

	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={DASHBOARD_NAV} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			{user && (
				<SidebarFooter>
					<ModeToggle />
					<NavUser user={user} />
				</SidebarFooter>
			)}
			<SidebarRail />
		</Sidebar>
	)
}
