import {FormWrapper} from "components/FormWrapper";
import Slider from "rc-slider";
import {useState} from "react";
import {IBonusDice, ILevel} from "utils/Interfaces";

type EngagementData = {
	level: ILevel,
	bonus_dices: IBonusDice,
}

type EngagementProps = EngagementData & {
	updateFields: (fields: Partial<EngagementData>) => void
}

function EngagementDices({
	level,
	bonus_dices,
	updateFields,
}: EngagementProps) {
	const [dices, setDices] = useState(level.talent_points - bonus_dices.paragon - bonus_dices.renegade)
	const rows = {};
	Object.assign(rows, Array.from(Array(7).keys()));

	const newDices = (id: number, value: number) => {
		if (!id)
			return {paragon: value, renegade: bonus_dices.renegade}
		return {paragon: bonus_dices.paragon, renegade: value}
	}

	const onSliderChange = (val: any, id: number) => {
		let rest = dices - (val - (id == 0 ? bonus_dices.paragon : bonus_dices.renegade));
		if (rest >= 0) {
			setDices(rest);
			updateFields({bonus_dices: newDices(id, val)})
		}
	}

	return (
		<FormWrapper title="Dés d'engagement" subtitle="Vous disposez de plusieurs dés d'engagement vous permettant d’améliorer les capacités de votre personnage lors de la résolution d’une action. Vous pouvez soit rajouter ces dés a votre lancé (sous reserve que l'action correspondante puisse être jusitifié comme pragmatique ou concilliante), ou sacrifier ces dés pour relancer un jet ou activer le niveau deux d'un talent. Vous regenerez un dé par jour">
			<div>Il reste {dices}/{level.talent_points} dés à attribuer.</div>
			<div className="grid gap-6 w-full md:grid-cols-2">
				<div>
					<legend>Conciliation</legend>
					<Slider
						min={0}
						max={7}
						marks={rows}
						value={bonus_dices.paragon}
						onChange={e => onSliderChange(e, 0)}
					/>
				</div>
				<div className="pb-6">
					<legend>Pragmatisme</legend>
					<Slider
						min={0}
						max={7}
						value={bonus_dices.renegade}
						marks={rows}
						onChange={e => onSliderChange(e, 1)}
					/>
				</div>
			</div>
		</FormWrapper>
	);
}

export default EngagementDices;
