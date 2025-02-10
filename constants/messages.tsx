export const AUTH_MESSAGES = {
	// error messages
	ERRORS: {
		INVALID_CREDENTIALS: 'Credenciales inválidas',
		LOGIN_ERROR: 'Error al iniciar sesión',
	},
	// loading states
	LOADING: {
		SIGNING_IN: 'Ingresando...',
	},
	// button labels
	BUTTONS: {
		SIGN_IN: 'Ingresar',
	},
} as const

export const CREATE_MESSAGES = {
	// error messages
	ERRORS: {
		CREATE_ERROR: 'Error al registrar el veterinario',
		REQUIRED_FIELDS: 'Por favor, completa todos los campos',
	},
	// success messages
	SUCCESS: {
		CREATE_SUCCESS: 'Registrado con éxito',
	},
	// loading states
	LOADING: {
		CREATING: 'Creando...',
	},
	// button labels
	BUTTONS: {
		CREATE: 'Registrar',
	},
}
