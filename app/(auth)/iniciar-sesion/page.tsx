// components
import { LoginForm } from '@/app/(auth)/components/login-form'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { AnimatedAuthContent } from '../components/animated-auth-content'

export default function IniciarSesion() {
	return (
		<div className='flex min-h-[calc(100vh-4rem-1px)] items-center'>
			<MaxWidthWrapper>
				<AnimatedAuthContent>
					<div className='relative flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Accede a tu cuenta
						</h1>
						<p className='text-sm text-muted-foreground'>
							¡Bienvenido! Ingresa tus datos
						</p>
					</div>

					<LoginForm />

					<p className='px-8 text-center text-sm text-muted-foreground'>
						¿No tienes una cuenta?
						<a
							href='/registrarse'
							className='pl-2 text-sm font-medium text-primary hover:text-primary/90'
						>
							Regístrate
						</a>
					</p>
				</AnimatedAuthContent>
			</MaxWidthWrapper>
		</div>
	)
}
