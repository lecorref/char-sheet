import { FormWrapper } from "../../components/FormWrapper"
import { Careers } from "../../utils/Career"
import { Levels } from "../../utils/Level"
import { ICareer, ILevel } from "../../utils/Interfaces"

const CampaignSelectCss ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

type UserData = {
	career?: ICareer
	unit?: string
	level: ILevel
}

type UserFormProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void
}

export default function CampaignSelection({
	career,
	unit,
	level,
	updateFields,
}: UserFormProps) {
	return( 
		<FormWrapper title="Détails de la campagne" subtitle="Si vous ne les avez pas, demandez ces informations au maitre du jeu">
			<div className="mb-6">
				<label
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Carrière
				</label>
				<select
					className={CampaignSelectCss}
					value={career?.ShortName}
					title={career?.Description}
					onChange={e => updateFields(
						{career: Careers.filter(
							i => i.ShortName === e.target.value)[0]})}
				>
					{Careers.map(item => (
						<option
							value={item.ShortName}
							key={item.ShortName}
							title={item.Description}
							selected
						>
							{item.LongName}
						</option>
					))}
				</select>
			</div>
			<div className="mb-6">
				<label
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Unité
				</label>
				<input
					className={CampaignSelectCss}
					min={1}
					type="text"
					value={unit}
					onChange={e => updateFields({ unit: e.target.value })}
				/>
			</div>
			<div className="mb-6">
				<label
					className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
					Niveau
				</label>
				<select
					required
					className={CampaignSelectCss}
					onChange={e =>
						updateFields({
						level: Levels.filter(i => i.Name === e.target.value)[0]
					})
					}
				>
					{Levels.map(item => (
						<option
							disabled={!item.Available}
							value={item.Name}
							key={item.Name}
							title={item.Description}
						>
							{item.Name}
						</option>
					))}
				</select>
			</div>
		</FormWrapper>
				);
}
