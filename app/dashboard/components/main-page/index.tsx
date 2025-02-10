import { cn } from '@/lib/utils'

interface Props {
	children: React.ReactNode
	className?: string
}

export function MainPage({ children, className }: Props) {
	return (
		<div className={cn('flex flex-1 flex-col gap-4 p-4 pt-0', className)}>
			{children}
		</div>
	)
}
