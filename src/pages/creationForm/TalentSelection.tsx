import {FormWrapper} from "components/FormWrapper"
import TalentCard from "components/TalentCard"
import {ILevel, ISpecies} from "utils/Interfaces"
import {ITalent, BioticTalentList, RacialTalentList, TechTalentList, MentalTalentList, SocialTalentList, PhysicalTalentList} from "utils/Talents"

type TalentData = {
	species: ISpecies,
	level: ILevel,
	talents?: ITalent[],
}

type TalentProps = TalentData & {
	updateFields: (fields: Partial<TalentData>) => void
}

export default function TalentSelection ({
	talents,
	updateFields,
}: TalentProps) {

	const ListTalentList: [string, ITalent[]][] = [
		["Talent d'espèce", RacialTalentList],
		["Talent biotiques", BioticTalentList],
		["Talent physiques", PhysicalTalentList],
		["Talent sociaux", SocialTalentList],
		["Talent mentaux", MentalTalentList],
		["Talent Technologiques", TechTalentList],
	]

	return (
		<FormWrapper title="Choix des talents" subtitle={`Votre personnage dispose de plusieurs talents, dont un lié spécifiquement à son espèce. Chaque talent se décline en deux niveaux. Le niveau 1 est peu puissant mais souvent utile, il peut être activé à volonté, gratuitement. Le niveau 2 produit par contre un effet spectaculaire, mais il nécessite que vous sacrifiez un dé d’engagement pour l’activer. Sacrifier un dé d’engagement signifie que vous devez le retirer de votre réserve.`}>
			<ul className="grid gap-4 w-full md:grid-cols-2">
				{
					ListTalentList.map((talent_list, index) => (
						<li key={`tlist-${index}`}>
							<fieldset
								className="p-2 center flex-cols w-full bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800"
							>
								<legend className="text-lg font-bold" >
									{ talent_list[0] }
								</legend>
								<ul className="grid gap-6 w-full grid-cols-2">
									{
										talent_list[1].map((item, index) => (
											<TalentCard
												talent={item}
												index={index}
												talents={talents}
												updateFields={updateFields}
												/>
										))
									}
								</ul>
							</fieldset>
						</li>))
				}
			</ul>
		</FormWrapper>
	)
}
