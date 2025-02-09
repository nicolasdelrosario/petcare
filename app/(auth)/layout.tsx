import { Navbar } from './components/navbar'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<>
			<header className='sticky inset-x-0 top-0 z-[100] h-16 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:border-zinc-900 dark:bg-black/75'>
				<Navbar />
			</header>
			<main className='grainy-light flex min-h-[calc(100vh-4rem-1px)] flex-col'>
				<div className='flex h-full flex-1 flex-col'>{children}</div>
			</main>
		</>
	)
}
