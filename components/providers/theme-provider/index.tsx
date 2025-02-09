'use client'

// next and react
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface Props extends React.ComponentProps<typeof NextThemesProvider> {}

export function ThemeProvider({ children, ...props }: Props) {
	return (
		<NextThemesProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemesProvider>
	)
}
