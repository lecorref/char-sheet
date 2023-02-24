import {useState} from "react"
import {ESkillGroup} from "utils/Skills"
import {Species} from "utils/Species"
import { ITalent } from "utils/Talents"

const minusIcon = '-'
const plusIcon = '+'

type TalentCardData = {
	talent: ITalent,
	index: number,
	talents?: ITalent[]
}

type TalentCardProps = TalentCardData & {
	updateFields: (fields: Partial<TalentCardData>) => void
}


export default function TalentCard({
	talent,
	index,
	talents,
	updateFields
}: TalentCardProps) {
	const [expanded, setExpanded] = useState(false)
	const toggleExpanded = () => setExpanded((current) => !current)
	const [level1, setLevel1] = useState(defaultState(1))
	const [level2, setLevel2] = useState(defaultState(2))

	function defaultState(level: number) {
		const index = talents?.findIndex(elem => (elem.name == talent.name))
		if (index != undefined && index >= 0 && talents) {
			const val = talents[index].level;
			if (val > 0 && level == 1)
				return true;
			if (val > 1) {
				return true;
			}
		}
		return false;
	}

	function updateTalent(talent_array: ITalent[], level: number): ITalent[] {
		const index = talent_array?.findIndex(elem => (elem.name == talent.name));
		if (index == -1 || index == undefined){
			talent.level = level;
			talent_array.push(talent);
		}
		else {
			talent_array[index].level = level;
		}
		return (talent_array);
	}

	function updateFirstLevel(e: any) {
		if (talent.type != ESkillGroup.Racial) {
			const new_state = !level1;
			setLevel1(new_state);
			if (!new_state)
				setLevel2(false);
			updateFields({
				talents: updateTalent(talents || [], (new_state ? 1 : 0))
			});
		} else {
			e.preventDefault();
		}
	}

	function updateSecondLevel(e: any) {
		if (level1) {
			const new_state = !level2;
			setLevel2(new_state);
			updateFields({
				talents: updateTalent(talents || [], (new_state ? 2 : 1))
			});
		} else {
			e.preventDefault();
		}
	}

	return (
		<li key={`card-${index}`}>
			<div className="p-2 center flex-cols w-full bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
				<div onClick={toggleExpanded}>
					<div className="select-none block center justify-between flex flex-row">
						<div className="font-semibold">
							{(talent.species != (null || undefined) ? (talent.name + " (" + Species[talent.species].Name + ")") : talent.name)}
						</div>
						<div className="pl-2 text-2xl text-right">
							{expanded ? minusIcon : plusIcon}
						</div>
					</div>
					<div className={`px-6 text-sm text-gray-700 dark:text-gray-400 pt-0 overflow-hidden transition-[max-height] duration-200 ease-in ${expanded ? "max-h-100" : "max-h-0"}`}>
						<p className="pb-4 text-left">
							{`Niveau 1: ${talent.description_1}`}
						</p>
						<p className="pb-4 text-left">
							{`Niveau 2: ${talent.description_2}`}
						</p>
					</div>
				</div>
				<div>
					<input type="checkbox"
						className="mx-2"
						id={`1-${talent.name}`}
						name="scales"
						checked={level1}
						onChange={(e) => updateFirstLevel(e)}
					/>
					<label htmlFor={`1-${talent.name}`}>Level 1</label>
				</div>
				<div>
					<input type="checkbox"
						className="mx-2"
						id={`2-${talent.name}`}
						name="scales"
						checked={level2}
						onChange={(e) => updateSecondLevel(e)}
					/>
					<label htmlFor={`2-${talent.name}`}>Level 2</label>
				</div>
			</div>
		</li>
	)
}
