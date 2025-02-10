import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/providers/theme-provider'

interface Props {
	children: React.ReactNode
}

export function Providers({ children }: Props) {
	return (
		<ThemeProvider>
			<Toaster toastOptions={{ duration: 3000 }} richColors />
			{children}
		</ThemeProvider>
	)
}
