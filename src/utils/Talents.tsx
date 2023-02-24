import {ESkillGroup} from "./Skills";

export interface ITalent {
	level: number;
	readonly name: string;
	readonly description_1: string;
	readonly description_2: string;
	readonly type: ESkillGroup;
	readonly species: number | null;
}

export const RacialTalentList: ITalent[] = [
	{
		level: 0,
		name: "Fusion de l’esprit",
		description_1: "Votre personnage est capable de fusionner son esprit avec celui d’une cible volontaire.",
		description_2: "Votre personnage est capable de fusionner son esprit avec celui d’une cible non volontaire d’un niveau inférieur ou égal au sien.",
		type: ESkillGroup.Racial,
		species: 0,
	},
	{
		level: 0,
		name: "Reptilien",
		description_1: "a peau de votre personnage sécrète naturellement une toxine hallucinogène. Ingérée, elle inflige pour une heure un malus de votre choix (de 1 à 3) à toutes les actions",
		description_2: "Votre personnage peut se remémorer n’importe quel moment de sa vie comme s’il s’agissait d’un film et se souvenir de chaque détail, aussi infime soit-il.",
		type: ESkillGroup.Racial,
		species: 1,
	},
	{
		level: 0,
		name: "Fougeux",
		description_1: "Lors d’un jet, si vous utilisez la totalité des dés présents dans l’une de vos réserves d’engagement (2 dés au minimum), l’un de ces dés devient Neutre.",
		description_2: "Lors d’un jet, vous annulez une difficulté d'un niveau maximum de 4, mais cela impliquera forcément une conséquence.",
		type: ESkillGroup.Racial,
		species: 2,
	},
	{
		level: 0,
		name: "Rage de sang",
		description_1: "Blessé, votre personnage peut entrer en frénésie et ignorer l’état sonné ainsi que tous les malus liés à ses blessures, jusqu’à la fin de la scène.",
		description_2: "Lorsque vous cochez la case “Mort” de gauche, votre personnage peut se relever après 2 rounds et continuer à combattre en rage du sang !",
		type: ESkillGroup.Racial,
		species: 3,
	},
	{
		level: 0,
		name: "Sens pratique",
		description_1: "Lors d'un jet de débrouillardise, le premier 10 obtenu sur un dés d'engagement est ignoré.",
		description_2: "Votre personnage peut réparer n’importe quel équipement dans l’urgence, quel que soit son état, mais cette réparation ne tiendra pas plus d’une scène.",
		type: ESkillGroup.Racial,
		species: 4,
	},
	{
		level: 0,
		name: "Hyperactivité",
		description_1: "Votre personnage récupère 1 dé d'engagement par heure de sommeil, avec un maximum de 2 dés par jour.",
		description_2: "our la durée de la scène, tous les succès obtenus sur vos dés d’engagement lors d’un jet lié à l’Esprit ou la Dextérité sont doublés",
		type: ESkillGroup.Racial,
		species: 5,
	},
	{
		level: 0,
		name: "Sens de l’honneur",
		description_1: "Votre personnage a un credo. Lorsque celui-ci s’applique directement, vous bénéficiez d’un dé d’engagement bonus (au choix).",
		description_2: "Jusqu’à la fin d’une scène d’action, les 10 obtenus sur un dé d’engagement ne provoquent pas de complication. De plus, leur perte est différée jusqu’à la fin de la scène",
		type: ESkillGroup.Racial,
		species: 6,
	},
]

export const BioticTalentList: ITalent[] = [
{
		level: 0,
		name: "Maître de l’ézo",
		description_1: "Lors d’une action biotique, votre personnage peut utiliser ses dés d’engagement comme il le souhaite et même les mélanger.",
		description_2: "Votre personnage peut créer un effet qui affecte toutes les cibles dont la Vigueur est inférieure à son score en Biotique, dans un rayon de 3 mètres autour du centre de l'effet.",
		type: ESkillGroup.Biotic,
		species: null,
	},
	{
		level: 0,
		name: "Fronde",
		description_1: "Lorsque vous utilisez la compétence kinésie sur votre personnage, l'action est une réussite automatique.",
		description_2: "Votre personnage peut se déplacer instantanément vers une position en vue, à moins de 100 mètres et en laissant une traînée bleue derrière lui",
		type: ESkillGroup.Biotic,
		species: null,
	},
	{
		level: 0,
		name: "Protecteur",
		description_1: "Vous disposez d’un nouveau boost (Stase) applicable à n’importe quelle cible : créer une armure de niveau 6 mais infliger un malus de 3",
		description_2: "Crée autour de votre personnage un dôme de 5 mètres de diamètre qui offre une protection équivalente à une armure d'un niveau égal à 2 x votre score en Biotique et qui doit être maintenu.",
		type: ESkillGroup.Biotic,
		species: null,
	},
	{
		level: 0,
		name: "MAîtrise des charges",
		description_1: "Lors d’une surcharge biotique, le premier 10 obtenu sur un dé d’engagement est ignoré.",
		description_2: "Sur un jet de Biotique, vous pouvez vous infliger une ou plusieurs blessures légères pour gagner autant de succès bonus que de blessures auto-infligées",
		type: ESkillGroup.Biotic,
		species: null,
	},
]

export const PhysicalTalentList: ITalent[] = [
	{
		level: 0,
		name: "As de la gâchette",
		description_1: "Lors d’un jet d’attaque à l’arme à feu, chaque 1 obtenu sur vos dés diminue l’armure de la cible de 1 point.",
		description_2: "Votre personnage peut toucher deux fois une même cible ou deux cibles situées côte à côte avec le même jet d'armes à feu",
		type: ESkillGroup.Physical,
		species: null,
	},
	{
		level: 0,
		name: "Art martial",
		description_1: "Lors d'une attaque au corps-à-corps, vous pouvez utiliser au choix l'attribut Vigueur ou Dextérité. De plus vous pouvez ajouter librement et mixer des dés de Conciliation et de Pragmatisme",
		description_2: "Jusqu'à la fin de la scène, si vous infligez une blessure lors d’une attaque au corps-à-corps à un adversaire d’un niveau inférieur à celui de votre personnage, l’adversaire est mis hors de combat.",
		type: ESkillGroup.Physical,
		species: null,
	},
	{
		level: 0,
		name: "Réflexes rapides",
		description_1: "Si vous n’avez pas encore agit durant ce tour, vous pouvez reprendre la main au meneur de jeu à tout moment pour réaliser votre action.  Vous devez ensuite lui rendre la main.",
		description_2: "Votre personnage peut esquiver automatiquement une attaque, de quelque nature qu’elle soit, pour peu que l’attaquant soit en vue.",
		type: ESkillGroup.Physical,
		species: null,
	},
]

export const MentalTalentList: ITalent[] = [
	{
		level: 0,
		name: "Érudit",
		description_1: "Lors d’un jet de connaissance, le premier 10 obtenu sur un dé d'engagement est ignoré.",
		description_2: "TBD",
		type: ESkillGroup.Mental,
		species: null,
	},
	{
		level: 0,
		name: "Fin limier",
		description_1: "Lorsque votre personnage quitte un lieu sur lequel il menait une enquête, il est averti par le meneur de jeu s’il a raté un indice important.",
		description_2: "En s'appuyant sur les informations qu'il a pu récolter, votre personnage peut obtenir en quelques heures la position et la situation d'une personne ou d’un indice qu'il recherche.",
		type: ESkillGroup.Mental,
		species: null,
	},
	{
		level: 0,
		name: "Touche à tout",
		description_1: "Suite à un échec sur un jet de dés, vous pouvez tenter à nouveau gratuitement mais en ajoutant au minimum un dé d'engagement à votre jet initial",
		description_2: "Pour la durée de la scène, votre personnage gagne la spécialité de son choix (sauf Connaissance et spécialités biotiques) au niveau du score d'engagement qu'il a utilisé pour activer ce talent (jusqu’à un maximum de +3).",
		type: ESkillGroup.Mental,
		species: null,
	},
]

export const SocialTalentList: ITalent[] = [
	{
		level: 0,
		name: "Contacts",
		description_1: "Diminue toute résistance sociale d’autant de points que la différence de niveau entre la cible et votre personnage. Cela peut rendre la cible hostile ",
		description_2: "Une connaissance de votre personnage peut lui rendre un service, mais elle ne fera rien qui pourrait lui nuire.",
		type: ESkillGroup.Social,
		species: null,
	},
	{
		level: 0,
		name: "Emprise",
		description_1: "Vous connaissez la difficulté de tous les jets d’influence",
		description_2: "Votre personnage force un PNJ de niveau inférieur au sien à lui rendre un service, quoi qu'il lui en coûte. La cible devient automatiquement hostile et n'aidera plus jamais votre personnage.  ",
		type: ESkillGroup.Social,
		species: null,
	},
	{
		level: 0,
		name: "Xéno empathie",
		description_1: "Vous disposez d’une spécialité de niveau 1 pour l’ensemble des espèces connues et organiques.",
		description_2: "TBD",
		type: ESkillGroup.Social,
		species: null,
	},
	{
		level: 0,
		name: "Meneur d’hommes",
		description_1: "Lors d’un combat, les coéquipiers situés à moins d’un mètre de votre personnage jouent leurs actions lorsque vous êtes només pour agir, sans que le meneur de jeu ne puisse intervenir.",
		description_2: "Vous créez un pool de dés neutres dans lequel les autres joueurs peuvent piocher, ce pool contient autant de dés que votre score en Commandement ou en Expression",
		type: ESkillGroup.Social,
		species: null,
	},
]

export const TechTalentList: ITalent[] = [
	{
		level: 0,
		name: "Camouflage",
		description_1: "Votre personnage peut utiliser un camouflage optique qui le rend pratiquement invisible jusqu’à la fin de la scène ou jusqu’à ce qu’il porte ou subisse une attaque ou un choc. Un observateur subit un malus de 3 pour vous repérer.",
		description_2: "Quoi qu’il arrive, le camouflage de votre personnage reste actif jusqu’à la fin de la scène, même s’il porte ou subit une attaque",
		type: ESkillGroup.Tech,
		species: null,
	},
	{
		level: 0,
		name: "Neuromnitech",
		description_1: "Votre personnage peut utiliser son Omnitech uniquement par la pensée, en toute discrétion",
		description_2: "Votre personnage peut retourner instantanément un drone IV ennemi (d’un niveau inférieur au vôtre) contre ses alliés jusqu’à la fin de la scène",
		type: ESkillGroup.Tech,
		species: null,
	},
]
