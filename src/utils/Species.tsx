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
		Name: "Humain",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 5, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 5, Vdefault: 0}],
		Description: "Bah, un humain quoi"
	},
	{
		Id: 2,
		Name: "Krogan",
		DefaultAttr: [{attr: EAttribute.Mind, name: "Esprit", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Charisma, name: "Charisme", Vmax: 4, Vdefault: 2},
			{attr: EAttribute.Perception, name: "Perception", Vmax: 6, Vdefault: 2},
			{attr: EAttribute.Vigor, name: "Vigeur", Vmax: 7, Vdefault: 2},
			{attr:EAttribute.Dexterity, name: "Dexterité", Vmax: 5, Vdefault: 2},
			{attr: EAttribute.Biotics, name: "Biotique", Vmax: 5, Vdefault: 0}],
		Description: "Les Krogans sont des créatures massives, semblables à de grands reptiles bipèdes. Ils sont originaires de Tuchanka, un monde connu pour son environnement difficile, ses ressources limitées et ses prédateurs aussi nombreux que féroces. Les Krogans ont non seulement réussi à survivre sur ce monde, mais ont également prospéré dans ces conditions extrêmes.  Connus pour leur tempérament bourru et sanguin, ils sont extrêmement résistants et disposent d'une force et d'une endurance hors du commun faisant d'eux des combattants exceptionnels. Rudes et âpres, égoïstes et brutaux, les krogans obéissent au principe de la loi du plus fort.  Nombreux sont ceux qui pensent que les krogans sont des brutes décérébrées. Il n'en est rien, les krogans sont aussi intelligents que n'importe quelle autre espèce. Mais l'hiver nucléaire dans lequel ils se sont plongés, la malédiction du génophage et les incessantes luttes de clans ont laissé peu de place au développement de leur civilisation. Ils ont ainsi consacré les deux derniers millénaires à la plus élémentaire des nécessités : survivre."
	},
]
