export interface ILevel {
	readonly Id: number;
	readonly Name: string;
	readonly Description: string;
	readonly Available: boolean;
}

export interface ICareer {
	readonly ShortName: string;
	readonly LongName: string;
	readonly Description: string;
}

export interface ISpecies {
	readonly Id: number;
	readonly Name: string;
	readonly Description: string;
	readonly Talent?: string;
	readonly Image?: string;
}

export interface ICharacter {
	species: ISpecies
	name: string
	age?: number
	career?: ICareer
	unit?: string
	attributes?: string
	talents?: string
	abilities?: string
	level?: ILevel
}
