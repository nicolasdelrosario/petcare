import { Metadata } from 'next'

import { env } from '@/config/env'

interface Props {
	title?: string
	description?: string
	image?: string
	icons?: string
}

export function constructMetadata({
	title = 'Petcare Dashboard',
	description = 'Dashboard',
	image = '/favicon.ico',
	icons = '/favicon.ico',
}: Props): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			locale: 'es-PE',
			images: [{ url: image }],
		},
		icons,
		metadataBase: new URL(env.NEXT_PUBLIC_APP_URL!),
	}
}
