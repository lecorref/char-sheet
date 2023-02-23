import {EAttribute} from "./Interfaces";

export enum ESkillGroup {
	Mental,
	Physical,
	Social,
	Tech,
	Biotic,
}

export interface ISkillGroup {
	readonly type: ESkillGroup;
	readonly name: string
}

export const SkillGroups: ISkillGroup[
] = [

	{type: ESkillGroup.Mental, name: "Mental"},
	{type: ESkillGroup.Physical, name: "Physique"},
	{type: ESkillGroup.Social, name: "Social"},
	{type: ESkillGroup.Tech, name: "Technique"},
	{type: ESkillGroup.Biotic, name: "Biotique"},
]

export interface ISpecialities {
	readonly name: string;
	chosen: boolean;
}

export interface ISkill {
	readonly name: string;
	readonly description: string;
	level: number;
	readonly group: ESkillGroup;
	readonly dependsOn: EAttribute[
	];
	specialities: ISpecialities[
	];
}

export const Skills: ISkill[
] = [

	{
		name: "CONNAISSANCE",
		description: "La compétence Connaissance représente l’ensemble des savoirs et des savoirs-faires acquis par votre personnage, qu’il s’agisse de culture générale, de connaissances pointues dans un domaine (science, littérature, art, histoire, etc.) ou d’une capacité à réaliser des tâches complexes requérant un savant mélange de précision et de connaissances (chirurgie, électronique, etc).",
		level : 1,
		group: ESkillGroup.Mental,
		dependsOn: [
			EAttribute.Dexterity, EAttribute.Mind],
			specialities: [
				{name: "Culture générale", chosen: false},
				{name: "Forensic", chosen: false},
				{name: "Histoire", chosen: false},
				{name: "Médecine", chosen: false},
				{name: "Politique", chosen: false},
				{name: "Science", chosen: false},
				{name: "Ethnologie", chosen: false},
				{name: "Technologie", chosen: false}
			],
	},
	{
		name: "DÉBROUILLARDISE",
		description: "La Débrouillardise représente la capacité de votre personnage à se sortir d’un mauvais pas, à trouver une solution en urgence à un problème ou à réaliser des tâches simples mais très utiles comme prodiguer les premiers soins, réparer une navette, fabriquer un piège ou adopter les bons comportements pour survivre en milieu hostile",
		level : 1,
		group: ESkillGroup.Mental,
		specialities: [
			{name: "Bricolage", chosen: false},
			{name: "Premiers soins", chosen: false},
			{name: "Survie", chosen: false},
		],
		dependsOn: [
			EAttribute.Dexterity, EAttribute.Mind]
	},
	{
		name: "SENS",
		description: "Le Sens représente la capacité de votre personnage à percevoir son environnement en utilisant ses cinq sens : vue, ouïe, odorat, goût et toucher. Le Sens permet de déceler des détails ou de rester sur ses gardes.",
		level : 1,
		group: ESkillGroup.Mental,
		specialities: [
			{name: "Acuité", chosen: false},
			{name: "Fouille", chosen: false},
			{name: "Pistage", chosen: false},
			{name: "Vigilance", chosen: false},
		],
		dependsOn: [
			EAttribute.Perception]
	},
	{
		name: "ARMES À FEU",
		description: "La compétence Arme à feu représente la capacité de votre personnage à utiliser tous types d’armes à feu : pistolets, fusils, armes automatiques, lance-grenades, etc",
		level : 1,
		group: ESkillGroup.Physical,
		specialities: [
			{name: "Arme de poing", chosen: false},
			{name: "Arme lourde", chosen: false},
			{name: "Fusil d'assaut", chosen: false},
			{name: "Fusil à pompe", chosen: false},
			{name: "Fusil de précision", chosen: false},
		],
		dependsOn: [
			EAttribute.Dexterity]
	},
	{
		name: "CORPS À CORPS",
		description: "La compétence Corps-à-corps représente la capacité de votre personnage à combattre à mains nues ou avec tout type d’armes blanches : couteau, sabre, masse, etc.",
		level : 1,
		group: ESkillGroup.Physical,
		specialities: [
			{name: "Couteau", chosen: false},
			{name: "Mêlée", chosen: false},
			{name: "Sabre", chosen: false},
			{name: "Masse", chosen: false},
		],
		dependsOn: [
			EAttribute.Vigor]
	},
	{
		name: "HABILETÉ",
		description: "L’Habileté représente la maîtrise que votre personnage a de son corps, sa capacité à réaliser des actions physiques complexes, requérant de la coordination ou un entraînement particulier",
		level : 1,
		group: ESkillGroup.Physical,
		specialities: [
			{name: "Athlétisme", chosen: false},
			{name: "Réflexes", chosen: false},
			{name: "Discrétion", chosen: false},
			{name: "Larcin", chosen: false},
		],
		dependsOn: [
			EAttribute.Dexterity]
	},
	{
		name: "ÉLOQUENCE",
		description: "L’Éloquence représente la capacité de votre personnage à s’exprimer avec clarté, à discourir devant un auditoire, à se faire des amis ou à adopter les bons comportements en société",
		level : 1,
		group: ESkillGroup.Social,
		specialities: [
			{name: "Étiquette", chosen: false},
			{name: "Expression", chosen: false},
		],
		dependsOn: [
			EAttribute.Charisma]
	},
	{
		name: "EMPATHIE",
		description: "L’Empathie représente la capacité de votre personnage à comprendre les émotions et les motivations de ses interlocuteurs, quelle que soit leur espèce.  Bien comprendre son interlocuteur permet parfois de savoir s’il ment ou vous cache des informations, s’il attend quelque chose de vous de manière tacite, s’il a besoin de réconfort mais n’ose pas l’avouer, etc",
		level : 1,
		group: ESkillGroup.Social,
		specialities: [
			{name: "Asari", chosen: false},
			{name: "Butarien", chosen: false},
			{name: "Drell", chosen: false},
			{name: "Elcor", chosen: false},
			{name: "Galarien", chosen: false},
			{name: "Geth", chosen: false},
			{name: "Hanarii", chosen: false},
			{name: "Humain", chosen: false},
			{name: "Krogan", chosen: false},
			{name: "Quarien", chosen: false}
		],
		dependsOn: [
			EAttribute.Perception]
	},
	{
		name: "INFLUENCE",
		description: "L’Influence représente la capacité de votre personnage à manipuler une personne pour l’inciter à agir selon sa volonté, à croire à ses mensonges ou à tomber sous son charme.",
		level : 1,
		group: ESkillGroup.Social,
		specialities: [
			{name: "Baratin", chosen: false},
			{name: "Commandement", chosen: false},
			{name: "Intimidation", chosen: false},
			{name: "Persuasion", chosen: false},
			{name: "Politique", chosen: false},
			{name: "Séduction", chosen: false},
		],
		dependsOn: [
			EAttribute.Charisma]
	},
	{
		name: "INTERFACE",
		description: "L’Interface représente la capacité de votre personnage à utiliser des systèmes informatiques, les Intelligences Virtuelles (IV) ou les Intelligences Articielles (IA), à les programmer, les pirater, etc.",
		level : 1,
		group: ESkillGroup.Tech,
		specialities: [
			{name: "IA", chosen: false},
			{name: "IV", chosen: false},
			{name: "Piratage", chosen: false},
			{name: "Artillerie", chosen: false},
		],
		dependsOn: [
			EAttribute.Mind]
	},
	{
		name: "OMNITECH",
		description: "La compétence Omnitech représente la capacité de votre personnage à utiliser son omnitech et les nombreux modules qui peuvent y être installés. Il s’agit le plus souvent d’un usage lié à un contexte de combat ou de guerre électronique.",
		level : 1,
		group: ESkillGroup.Tech,
		specialities: [
			{name: "Brouillage", chosen: false},
			{name: "Projectile", chosen: false},
			{name: "Sabotage", chosen: false},
			{name: "Surcharge", chosen: false},
		],
		dependsOn: [
			EAttribute.Mind]
	},
	{
		name: "PILOTAGE",
		description: "La compétence Pilotage représente la capacité de votre personnage à piloter tous types d’engins : véhicules terrestres, navettes, mécas, drones, etc.",
		level : 1,
		group: ESkillGroup.Tech,
		specialities: [
			{name: "Méca", chosen: false},
			{name: "Véhicule", chosen: false},
			{name: "Vaisseau", chosen: false},
			{name: "Drone", chosen: false},
		],
		dependsOn: [
			EAttribute.Dexterity]
	},
	{
		name: "KINÉSIE",
		description: "La Kinésie représente la capacité de votre personnage à déplacer des objets par la pensée. Il peut s’agir de mouvements fins et précis comme de violentes projections d’objets ou d’individus",
		level : 1,
		group: ESkillGroup.Biotic,
		specialities: [
			{name: "Télékinésie", chosen: false},
			{name: "Projection", chosen: false},
		],
		dependsOn: [
			EAttribute.Biotics]
	},
	{
		name: "ÉGIDE",
		description: "L’Égide représente la capacité de votre personnage à créer des champs de protection biotique de formes variées. Deux formes sont toutefois les plus courantes : le bouclier qui entoure un individu ou le dôme qui protège un groupe de combattants.",
		level : 1,
		group: ESkillGroup.Biotic,
		specialities: [
			{name: "Barrière", chosen: false},
			{name: "Fortification", chosen: false},
		],
		dependsOn: [
			EAttribute.Biotics]
	},
	{
		name: "CHAOS",
		description: "Le Chaos représente la capacité de votre personnage à déstructurer la matière grâce à des champs de gravité chaotiques. Il est ainsi possible de rendre la matière plus friable ou de causer des dommages à des créatures organiques",
		level : 1,
		group: ESkillGroup.Biotic,
		specialities: [
			{name: "Déchirure", chosen: false},
			{name: "Entrave", chosen: false},
		],
		dependsOn: [
			EAttribute.Biotics]
	},
]
