import { FormEvent, useState } from "react";
import RaceSelection from "./creationForm/RaceSelection"
import DetailSelection from "./creationForm/DetailSelection"
import CampaignSelection from "./creationForm/CampaignSelection"
import Steps from "./creationForm/Steps";
import { ICharacter } from "../utils/Interfaces"
import { Species } from "../utils/Species"
import { Careers } from "../utils/Career";
import { Levels } from "../utils/Level";
import useLocalStorageState from "use-local-storage-state";
import { useNavigate } from 'react-router-dom';

const INITIAL_DATA: ICharacter = {
	species: Species[0],
	name: '',
	age: undefined,
	career: Careers[0],
	unit: '',
	attributes: '',
	abilities: '',
	talents: '',
	level: Levels[3]
};

function Creation() {
	const navigate = useNavigate();
	const [data, setData] = useState(INITIAL_DATA)
	const [characters, setCharacters] = useLocalStorageState<ICharacter[]>("characters")
	const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = Steps([
		<CampaignSelection {...data} updateFields={updateFields} />,
		<RaceSelection {...data} updateFields={updateFields} />,
		<DetailSelection {...data} updateFields={updateFields} />,
	])

	function updateFields(fields: Partial<ICharacter>) {
		console.log(fields)
		setData(prev => {
			return { ...prev, ...fields }
		})
	}

	function onSubmit(e: FormEvent) {
		e.preventDefault()
		if (!isLastStep) {
			return next()
		}
		if (characters)
			setCharacters([...characters, data])
		else
			setCharacters([data])
		navigate('/characters')
	}

	return (
		<form onSubmit={onSubmit}>
			{step}
			<div className="flex justify-end space-x-4">
				{!isFirstStep && (
					<button type="button" onClick={back}>
						Back
					</button>
				)}
				<button type="submit">{isLastStep ? "Finish" : "Next"}</button>
			</div>
		</form>
	);
}
export default Creation;
