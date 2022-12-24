export enum Race {
	Asari,
	Human,
	Galarian,
	Krogan,
	Drell,
	Butarien,
}

export enum Attribute {
	Spirit,
	Charisma,
	Perception,
	Vigor,
	Dexterity,
	Biotics,
}

export interface Character {
	name: string
	race: string
	stats: Record<Attribute, number>
}

