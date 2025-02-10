// next and react
import React from 'react'

// components
import { ModeToggle } from '@/components/mode-toggle'

// shadcn
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'

// utils
import { cn } from '@/lib/utils'

// icons
import { SidebarTrigger } from '@/components/ui/sidebar'

interface BreadcrumbItemType {
	label: string
	href?: string
	isCurrentPage?: boolean
}

interface HeaderProps {
	breadcrumbItems?: BreadcrumbItemType[]
	showSidebar?: boolean
	className?: string
	onSidebarToggle?: () => void
}

export function HeaderPage({
	breadcrumbItems = [],
	className = '',
}: HeaderProps) {
	return (
		<header
			className={cn(
				'mr-4 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12',
				className
			)}
		>
			<div className='flex items-center gap-2 px-4'>
				<SidebarTrigger className='-ml-1' />
				<Separator className='min-h-4' orientation='vertical' />
				{breadcrumbItems.length > 0 && (
					<Breadcrumb>
						<BreadcrumbList>
							{breadcrumbItems.map((item, index) => (
								<React.Fragment key={index}>
									<BreadcrumbItem
										className={index === 0 ? 'hidden md:block' : ''}
									>
										{item.isCurrentPage ? (
											<BreadcrumbPage>{item.label}</BreadcrumbPage>
										) : (
											<BreadcrumbLink href={item.href || '#'}>
												{item.label}
											</BreadcrumbLink>
										)}
									</BreadcrumbItem>
									{index < breadcrumbItems.length - 1 && (
										<BreadcrumbSeparator className='hidden md:block' />
									)}
								</React.Fragment>
							))}
						</BreadcrumbList>
					</Breadcrumb>
				)}
			</div>
			<ModeToggle />
		</header>
	)
}
