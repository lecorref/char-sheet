import { CharacterProps } from "utils/Types";
import {SkillGroups} from "utils/Skills";
import SkillGroupCard from "./SkillGroupCard";

const title_css = "px-2 text-xl font-bold center w-full dark:text-yellow-400"

export default function CharacterSkills({
	char
}: CharacterProps) {
	return (
		<div
			className="flex-1 gap-1 flex flex-col bg-white dark:text-gray-300 dark:bg-gray-900"
		>
			<div className={title_css} > &#x25A0; Compétences </div>
			<ul>
				{
					SkillGroups.map((item, index) => (
						<li key={index}>
							<SkillGroupCard
								skill_group={item}
								skill_list={char.skills}
							/>
						</li>
					))
				}
			</ul>
		</div>
	);
}

