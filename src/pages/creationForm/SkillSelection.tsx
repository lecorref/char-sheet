import {FormWrapper} from "components/FormWrapper"
import SelectSkill from "components/SelectSkills"
import {useState} from "react"
import {ILevel, ISpecies} from "utils/Interfaces"
import {ISkill, SkillGroups, Skills} from "utils/Skills"

type SkillData = {
	species: ISpecies,
	level : ILevel,
	skills: ISkill[],
}

type SkillProps = SkillData & {
	updateFields: (fields: Partial<SkillData>) => void
}

export default function SkillSelection({
	species,
	level,
	skills,
	updateFields,
}: SkillProps) {

	function getSkillPoints(current_skills: ISkill[]) {
		let acc = level.skill_points - ((species.Id <= 1) ? 4 : 0);
		current_skills.forEach((current) => {
			acc += (1 - current.level);
			const chosen = current.specialities.reduce((val, item) => (item.chosen ? val + 2 : val), 0)
			acc -= chosen
		})
		return acc;
	}

	const [attr, setAttr] = useState(getSkillPoints(skills))

	return (
		<FormWrapper title="Compétences de vos personnages" subtitle={`Les Compétences, au nombre de quinze, représentent les capacités que votre personnage a acquis au cours de son existence, telles que l’Éloquence, la Débrouillardise ou le Pilotage. Pour plus de lisibilité, ces compétences sont regroupées en cinq familles sur votre feuille de personnage : Mental, Physique, Social, Technique et Biotique. Les compétences sont chiffrées de 1 à 4, tous les personnages disposant à la création d’un score de niveau 1. Chaque niveau chiffré peut s’exprimer de la manière suivante :
			  1 - Incompétent : votre personnage n’a aucune expérience dans la compétence associée.
				2 - Novice : votre personnage vient juste de débuter une formation dans le domaine ou n’a fait qu’effleurer le sujet.
				3 - Apprenti : votre personnage commence à être à l’aise avec cette compétence, mais peine encore à réaliser certaines actions simples.
				4 - Professionnel : votre personnage dispose d’une bonne expérience dans le domaine. Il est à l’aise dans cette compétence mais ne brille pas particulièrement.`}>
			<div>
				Il reste {attr}/{level.skill_points - ((species.Id <= 1) ? 4 : 0)} Points a attribuer.
			</div>
			<ul className="grid gap-6 w-full md:grid-cols-2">
				{
					SkillGroups.map(group => (
						<li key={group.type}>
							<div>
								{group.name}
							</div>
							<ul className="grid gap-6 w-full md:grid-cols-2">
								{
									Skills.map(item => (
										(item.group === group.type) ?
											(
												<li key={item.name}>
													<SelectSkill
														skillPoint={attr}
														setSkillPoint={setAttr}
														item={item}
														skills={skills}
														updateFields={updateFields}
													/>
												</li>
										) : <></>
									))
								}
							</ul>
						</li>
					))
				}
			</ul>
		</FormWrapper>)
}
