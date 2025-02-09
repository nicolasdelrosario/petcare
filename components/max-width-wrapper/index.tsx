// utils
import { cn } from '@/lib/utils'

interface Props {
	className?: string
	children: React.ReactNode
}

export function MaxWidthWrapper({ className, children }: Props) {
	return (
		<div
			className={cn(
				'mx-auto flex h-full w-full max-w-screen-xl flex-col px-2.5 md:px-20',
				className
			)}
		>
			{children}
		</div>
	)
}
