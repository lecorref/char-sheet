import { useState } from 'react';
import { FormWrapper } from "../../components/FormWrapper"
import { Species } from "../../utils/Species"
import { ISpecies } from "../../utils/Interfaces"
import {ITalent, RacialTalentList} from 'utils/Talents';

type UserData = {
	species: ISpecies
	talents?: ITalent[]
}

const minusIcon = '-'
const plusIcon = '+'

type FormProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void
}

export default function RaceSelection({
	species,
	talents,
	updateFields,
}: FormProps) {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = () => setExpanded((current) => !current);

	function updateTalent(id: number): ITalent[] {
		let talent = JSON.parse(JSON.stringify(RacialTalentList[id]));
		talent.level = 1;
		return ([talent]);
	}
	
	function updateSelection(choice: ISpecies) {
		updateFields({
			species: choice,
			talents: updateTalent(choice.Id)
		});
	}

	return(
		<FormWrapper title="Selection de la race" subtitle="Votre race determinera votre talent inné, ainsi que les valeurs maximal de vos characteristiques. Certaines races commencent avec un talent biotique inné, mais auront moins de points pour developper leurs autres capacitées.">
			<div>
				<ul className="grid gap-6 w-full md:grid-cols-2">
					{
						Species.map(item => (
							<li key={item.Id}>
								<input
									id={"Id-" + item.Id}
									className="hidden peer"
									type="radio" value={item.Id}
									checked={species === item}
									onChange={() => updateSelection(Species[item.Id])}
								/>
								<label
									htmlFor={"Id-" + item.Id}
									className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
								>
									<div className="block text-left items-center select-none flex justify-between flex-row">
										<div className="w-full text-lg font-semibold">
											{item.Name}
										</div>
										<div className="pl-2 text-2xl text-left" onClick={toggleExpanded}>
											{expanded ? minusIcon : plusIcon}
										</div>
									</div>
									<div className={`px-6 text-sm text-gray-600 dark:text-gray-500 pt-0 overflow-hidden transition-[max-height] duration-200 ease-in ${expanded ? "max-h-80" : "max-h-0"}`}>
										<p className="pb-4 text-center">
											{item.Description}
										</p>
									</div>
								</label>
							</li>
						))
					}
				</ul>
			</div>
		</FormWrapper>
	);
}

