import Slider from "rc-slider"
import 'rc-slider/assets/index.css';
import {useState} from "react";
import {ISkill} from "utils/Skills"

type SkillData = {
	skillPoint: number,
	setSkillPoint: Function,
	item: ISkill,
	skills: ISkill[],
}

type SkillProps = SkillData & {
	updateFields: (fields: Partial<SkillData>) => void
}

export default function SelectSkill({
	skillPoint,
	setSkillPoint,
	item,
	skills,
	updateFields,
}: SkillProps) {
	const rows = {1: 1, 2: 2, 3: 3, 4: 4};
	const [value, setValue] = useState(getSkillValue());

	function getSkillValue(): number {
		let ret = skills.find(elem => (elem.name === item.name))
		return ret === undefined ? 1 : ret.level
	}

	const onSliderChange = (val: any) => {
		if (val === 0)
			return ;
		let points = skillPoint - (val - value);
		if (value === 4 && val < 4) {
			item.specialities.forEach(elem => {
				if (elem.chosen === true) {
					elem.chosen = false;
					points += 2;}});
			updateFields({skills: skills.map(skill => {
				if (skill.name === item.name) {
					skill.specialities.map(elem => {
						elem.chosen = false;
						return elem;})}
				return skill; })});
		}
		if (points >= 0) {
			setValue(val);
			setSkillPoint(points);
			updateFields({skills: skills.map(elem => {
				if (elem.name === item.name)
					elem.level = val;
				return elem;})})}
	}

	const onCheckedChange = (position: number, chosen: boolean) => {
		let points = skillPoint + (chosen ? 2 : -2);
		if (points >= 0) {
			setSkillPoint(points);
			updateFields({skills: skills.map(skill => {
				if (skill.name === item.name) {
					skill.specialities.map((elem, index) => {
						if (index === position)
							elem.chosen = !chosen;
						return elem;
					});
				}
				return skill;
			})});
			item.specialities.forEach((elem, index) => {
				if (index === position)
					elem.chosen = !chosen;
			});
		}
	}

	return (
		<div className="flex-col justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<div
				className="item-center w-full"
			>
				{item.name}
			</div>
			<div className="py-4"
			>
				<Slider
					min={0}
					max={4}
					marks={rows}
					value={value}
					onChange={e => onSliderChange(e)}
				/>
			</div>
			<ul className={`pt-2 text-gray-800 dark:text-gray-200 pt-0 overflow-hidden transition-[max-height] duration-200 ease-in ${value === 4 ? "max-h-80" : "max-h-0"}`}
			>
				{
					item.specialities.map(({name, chosen}, index) => (
						<li key={name} >
							<input
								type="checkbox"
								id={`checkbox-${index}`}
								name={name}
								checked={chosen}
								onChange={() => onCheckedChange(index, chosen)}
							/>
							<label htmlFor={`checkbox-${index}`}>
								{name}
							</label>
						</li>
					))
				}
			</ul>
		</div>
	)
}
