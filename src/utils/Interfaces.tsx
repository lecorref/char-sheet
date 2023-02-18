export interface ILevel {
	readonly Id: number;
	readonly Name: string;
	readonly Description: string;
	readonly Available: boolean;
	readonly Points: number;
}

export interface ICareer {
	readonly ShortName: string;
	readonly LongName: string;
	readonly Description: string;
}

export enum EAttribute {
	Mind,
	Charisma,
	Perception,
	Vigor,
	Dexterity,
	Biotics,
}

export interface IAttribute {
	readonly attr: EAttribute;
	readonly name: string;
	readonly Vmax: number;
	readonly Vdefault: number;
}

export interface ISpecies {
	readonly Id: number;
	readonly Name: string;
	readonly Description: string;
	readonly Talent?: string;
	readonly Image?: string;
	readonly DefaultAttr: IAttribute[];
}

export interface ICharacter {
	species: ISpecies
	name: string
	age?: number
	career?: ICareer
	unit?: string
	attributes: [EAttribute, number][]
	talents?: string
	abilities?: string
	level: ILevel
}
