import {ISpecies, EAttribute} from "./Interfaces"

export const Species: readonly ISpecies[] = [
	{
		Id: 0,
		Name: "Asari",
		Description: "Les asari, originaires de la planète Thessia, sont souvent considérées comme l'espèce consciente la plus puissante et la plus respectée de la galaxie connue. Ceci est en partie dû au fait qu'elles furent la première espèce de ce cycle à avoir découvert le vol supraluminique, à utiliser les relais cosmodésiques et à découvrir et coloniser la Citadelle.  Race mono-genre d'apparence féminine, les asari sont connues pour leur élégance, leurs talents diplomatiques et leurs capacités biotiques. Leur espérance de vie d'une durée supérieure à un millénaire et leur physiologie unique leur permettant de se reproduire avec un partenaire de n'importe quel genre ou espèce leur donnent une attitude conservatrice, mais bienveillante envers les autres races. Privilégiant la coopération et le compromis au conflit et à la violence, les asari ont joué un rôle prépondérant dans la fondation du Conseil de la Citadelle et sont, depuis, au cœur de la société galactique.",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 6, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 4, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 6, Vdefault: 2}]
	},
	{
		Id: 1,
		Name: "Drell",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 6, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 2, Vdefault: 2}],
			Description: "Originaires de la planète Rakhana, les Drells ont été sauvés de l'extinction par les Hanari il y a plus de deux siècles. Ils vivent désormais sur Kahjé, où ils servent les Hanari au travers d'un pacte nommé le Synacte. Espèce mineure sur la scène galactique, les Drells sont toutefois parvenus à se rendre indispensables aux yeux des Hanari."
	},
	{
		Id: 2,
		Name: "Humain",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 5, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 5, Vdefault: 0}],
			Description: "Derniers arrivés sur la scène Galactique, les Humains sont reconnus pour leur polyvalence et leur capacité d'adaptation. Leurs détracteurs les jugent trop ambitieux et individualistes. Ils ont toutefois joué un rôle central lors de la Guerre du Dernier Cycle, la plupart des espèces s'accordant pour dire qu'ils ont sauvé la Galaxie de la menace des Moissonneurs en œuvrant pour unifier les forces galactiques."
	},
	{
		Id: 3,
		Name: "Krogan",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 4, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 6, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 7, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 5, Vdefault: 0}],
		Description: "Les Krogans sont des créatures massives, semblables à de grands reptiles bipèdes. Ils sont originaires de Tuchanka, un monde connu pour son environnement difficile, ses ressources limitées et ses prédateurs aussi nombreux que féroces. Les Krogans ont non seulement réussi à survivre sur ce monde, mais ont également prospéré dans ces conditions extrêmes.  Connus pour leur tempérament bourru et sanguin, ils sont extrêmement résistants et disposent d'une force et d'une endurance hors du commun faisant d'eux des combattants exceptionnels. Rudes et âpres, égoïstes et brutaux, les krogans obéissent au principe de la loi du plus fort.  Nombreux sont ceux qui pensent que les krogans sont des brutes décérébrées. Il n'en est rien, les krogans sont aussi intelligents que n'importe quelle autre espèce. Mais l'hiver nucléaire dans lequel ils se sont plongés, la malédiction du génophage et les incessantes luttes de clans ont laissé peu de place au développement de leur civilisation. Ils ont ainsi consacré les deux derniers millénaires à la plus élémentaire des nécessités : survivre."
	},
	{
		Id: 4,
		Name: "Quarien",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 5, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 5, Vdefault: 0}],
			Description: "Peuple nomade vivant au sein d'une gigantesque flotte, les Quariens sont reconnus pour leur ingéniosité et leur talent pour la technologie, notamment les intelligences virtuelles et artificielles. Créateurs des Geth, ils errent dans l'espace depuis que ces derniers se rebellèrent contre leurs maîtres et prirent possession de Rannoch, la planète mère des Quariens."
	},
	{
		Id: 5,
		Name: "Galarian",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 6, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 4, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 6, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 4, Vdefault: 0}],
			Description: "Les Galariens sont d'excellents scientifiques et des techniciens hors pair, faisant d'eux l'espèce disposant de la technologie la plus avancée parmi les espèces galactiques connues. Ils sont les créateurs du « génophage », une arme biologique qui a causé le déclin des Krogans.  Afin de rallier ces derniers lors de la Guerre du Dernier Cycle, ils ont consenti à leur fournir un remède."
	},
	{
		Id: 6,
		Name: "Turien",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 6, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 4, Vdefault: 0}],
			Description: "Les Turiens constituent le bras armé du Conseil.  Ils mettent à contribution leurs compétences militaires et leur gigantesque flotte de guerre afin de maintenir la paix Concilienne. Fins tacticiens et combattants émérites, ils sont reconnus pour leur loyauté et leur sens de l'honneur. Pour mater les Krogans durant la rébellion, ils ont utilisé le Génophage, s'attirant la haine et le mépris de cette espèce."
	},
]
