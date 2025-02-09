export interface VeterinarianSpecialization {
	id: string
	name: string
}

export interface Veterinarian {
	id: string
	name: string
	email: string
	phone: string
	veterinarian_specialization: VeterinarianSpecialization
}
