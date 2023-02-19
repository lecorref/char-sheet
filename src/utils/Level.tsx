import {ILevel} from "./Interfaces"

export const Levels: readonly ILevel[] = [
	{
		Id: 1,
		Name: "Faible",
		Description: "Un personnage de niveau Faible souffre généralement d’une forte déficience physique, intellectuelle ou psychologique qui n’est compensée par aucun talent ou savoir-faire particulier. Il est souvent relégué à des emplois ingrats ou dangereux, quand il ne finit pas en marge de la société. Certains groupes de mercenaires, de hors-là-loi, voir certaines armées régulières, n’hésitent pas à utiliser ces individus de peu de valeur comme chair à canon. Les individus de niveau Faible représentent environ 2% des membres d’une espèce.",
		Available: false,
		Points: 0,
	},
	{
		Id: 2,
		Name: "Inférieur",
		Description: "Un personnage de niveau Inférieur n’a aucun talent particulier mais peut toutefois réaliser certaines tâches de manière satisfaisante. Ils occupent généralement des emplois peu qualifiés et sont fréquemment exploités par des individus sans scrupules qui profitent de leur éducation souvent détaillante pour les manipuler. Bien encadrés, ils peuvent donner pleinement satisfaction dans de nombreux domaines. Les individus de niveau Inférieur représentent environ 13% des membres d’une espèce.",
		Available: false,
		Points: 1,
	},
	{
		Id: 3,
		Name: "Commun",
		Description: "Un personnage de niveau Commun représente parfaitement “Monsieur tout le monde”. Il n’a ni faiblesse, ni force majeure, mais se révèle pleinement compétent dans ses domaines de prédilection. On retrouve ces individus à tous les niveaux de la société et dans pratiquement tous les domaines d’expertise. Les individus de niveau Commun représentent environ 70% des membres d’une espèce.",
		Available: true,
		Points: 4,
	},
	{
		Id: 4,
		Name: "Supérieur",
		Description: "Un personnage de niveau Supérieur sort du lot et se distingue de la plupart de ses semblables. C’est un expert reconnu dans plusieurs domaines à qui l’on confie des postes ou des missions sensibles. Les personnages de niveau Supérieur sont peu nombreux et donc particulièrement recherchés par les entreprises, les administrations, les forces armées ou les organisations criminelles. Les individus de niveau Supérieur représentent environ 13% des membres d’une espèce.",
		Available: true,
		Points: 7,
	},
	{
		Id: 5,
		Name: "Élite",
		Description: "Un personnage de niveau Élite représente l’apex de son espèce. Il excelle dans de nombreux domaines et peut abattre à lui seul le travail de plusieurs de ses sembles de niveau Commun. Les personnages de niveau Élite occupent des fonctions prestigieuses ; qu’il s’agisse de dirigeants hors du commun, d’agents de terrain exceptionnels ou de criminels d’exception, l’étendue de leurs aptitudes les précède. Les individus de niveau Élite représentent environ 2% des membres d’une espèce.",
		Available: true,
		Points: 9,
	},
	{
		Id: 6,
		Name: "Légendaire",
		Description: "Les personnages de niveau Légendaire sont absolument hors du commun.  Extrêmement rares, ils se distinguent de manière éclatante et incontestable du reste de la population. Leur aura est telle qu’ils sont généralement connus et respectés ou craints par l’ensemble des membres d’une espèce, voir de la galaxie toute entière. Il n’est pas possible de créer un personnage joueur de niveau Légendaire, mais il est possible d’atteindre ce niveau en le faisant progresser via la dépense de points d’expérience. Les individus de niveau Légendaire représentent moins de 0,01% des membres d’une espèce.",
		Available: false,
		Points: 11,
	},
]
