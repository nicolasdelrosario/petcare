'use client'

import { motion } from 'framer-motion'

interface Props {
	children: React.ReactNode
}

export function AnimatedAuthContent({ children }: Props) {
	return (
		<motion.div
			className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	)
}
