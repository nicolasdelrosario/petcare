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
						<p className='text-muted-foreground text-sm'>
							¡Bienvenido! Ingresa tus datos
						</p>
					</div>

					<LoginForm />

					<p className='text-muted-foreground px-8 text-center text-sm'>
						¿No tienes una cuenta?
						<a
							href='/registrarse'
							className='text-primary hover:text-primary/90 pl-2 text-sm font-medium'
						>
							Regístrate
						</a>
					</p>
				</AnimatedAuthContent>
			</MaxWidthWrapper>
		</div>
	)
}
