import { FormEvent, useState } from "react";
import RaceSelection from "./creationForm/RaceSelection"
import DetailSelection from "./creationForm/DetailSelection"
import CampaignSelection from "./creationForm/CampaignSelection"
import AttributeSelection from "./creationForm/AttributeSelection";
import Steps from "./creationForm/Steps";
import { EAttribute, ICharacter, ISpecies } from "../utils/Interfaces"
import { Species } from "../utils/Species"
import { Careers } from "../utils/Career";
import { Levels } from "../utils/Level";
import useLocalStorageState from "use-local-storage-state";
import { useNavigate } from 'react-router-dom';
import SkillSelection from "./creationForm/SkillSelection";
import {ISkill, Skills} from "utils/Skills";

function defaultAttributes(species: ISpecies): [EAttribute, number][] {
	return species.DefaultAttr.map(item => ([item.attr, item.Vdefault]))
}

const INITIAL_DATA: ICharacter = {
	species: Species[0],
	name: '',
	age: undefined,
	career: Careers[0],
	unit: '',
	attributes: defaultAttributes(Species[0]),
	skills: JSON.parse(JSON.stringify(Skills)),
	talents: '',
  level: Levels[2],
};

function Creation() {
	const navigate = useNavigate();
	const [data, setData] = useState(INITIAL_DATA)
	const [characters, setCharacters] = useLocalStorageState<ICharacter[]>("characters")
	const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = Steps([
		<CampaignSelection {...data} updateFields={updateFields} />,
		<RaceSelection {...data} updateFields={updateFields} />,
		<AttributeSelection {...data} updateFields={updateFields} />,
		<SkillSelection {...data} updateFields={updateFields} />,
		<DetailSelection {...data} updateFields={updateFields} />,
	])

  function resetSkills() {
		Skills.map(elem => {
			elem.level = 1;
			resetSpecialties(elem)
		})
	}

	function resetSpecialties(skill: ISkill) {
		skill.specialities.map(elem => {
			elem.chosen = false;
		})
	}

	function updateFields(fields: Partial<ICharacter>) {
		console.log(fields)
		setData(prev => {
			return { ...prev, ...fields };
		})
	}

	function onSubmit(e: FormEvent) {
		e.preventDefault()
		if (currentStepIndex == 1) {
			updateFields({attributes: defaultAttributes(data.species)})
			resetSkills()
			updateFields({skills: JSON.parse(JSON.stringify(Skills))})
		}
		if (!isLastStep) {
			return next();
		}
		if (characters)
			setCharacters([...characters, data]);
		else
			setCharacters([data]);
		navigate('/characters');
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
