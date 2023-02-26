import Point from "components/Points";
import {ISkill, ISkillGroup} from "utils/Skills";

type SkillGroupProps = {
	skill_group: ISkillGroup,
	skill_list: ISkill[],
}

export default function SkillGroupCard({
	skill_group,
	skill_list,
} : SkillGroupProps) {
	let found : ISkill;

	function getCharSkills(skill_name: string) {
		const skill = skill_list.find(elem =>
																	elem.name.toUpperCase() == skill_name.toUpperCase());
		if (skill === undefined)
			return (
				<>
					<Point points={1} total={4} />
					<div className="grid grid-rows-1 divide-x">
						<div>1</div>
						<div>2</div>
						<div>2</div>
					</div>
				</>
			);
		else {
			return (
				<>
					<Point points={skill.level} total={4} />
					<div>
						{skill.specialities.map(elem => (
									 (elem.chosen == true?
										 <p>{elem.name}</p>:
											 <></>)
						))}
					</div>
				</>
			);
		}
	}

	return (
		<div className="flex-col flex border border-gray-500 ">
			<legend className="text-center bg-gray-500">{skill_group.name}</legend>
			<div className="flex-row flex divide-x">
				{
					skill_group.skill_list.map(skill => (
						<div className="px-2 flex-1">
							<div>{skill}</div>
							{getCharSkills(skill)
							}
						</div>
					))
				}
			</div>
		</div>
	);
}
