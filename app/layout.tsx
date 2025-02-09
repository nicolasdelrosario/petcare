// react and next
import { Poppins } from 'next/font/google'

// utils and config
import { cn } from '@/lib/utils'
import { constructMetadata } from '@/utils/generate-metadata'

// components
import { Providers } from '@/components/providers'

// styles
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
})

export const metadata = constructMetadata({})

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='es' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen min-w-screen antialiased',
					poppins.className
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
