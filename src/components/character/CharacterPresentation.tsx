import {ExportCharacter} from "components/Export";
import Point from "components/Points";
import { CharacterProps } from "utils/Types";

const key_css = "p-1 font-bold text-yellow-400"
const value_css = "px-2 bg-gray-400 text-yellow-800 text-lg"

export default function CharacterPresentation(
	{char}: CharacterProps) {
		const capitalize = (s: string) => (s && s[0].toUpperCase() + s.slice(1)) || ""
		return (
			<div
				className="p-4 gap-1 flex-initial flex flex-col bg-white border border-gray-200 dark:border-gray-700  dark:text-gray-300 dark:bg-gray-900"
			>
				<div
					className="p-2 place-content-center text-xl font-bold center w-full dark:bg-gray-700 bg-gray-200 dark:text-yellow-400 text-center"
				>
					{char.species.Name.toUpperCase()}
				</div>
				<div className="border dark:border-gray-300">
					<div className={key_css}>&#x25A0;  Nom </div>
					<div className={value_css}> {capitalize(char.name)} </div>
					<div className={key_css}>&#x25A0; Age </div>
					<div className={value_css}> {char.age} </div>
					<div className={key_css}>&#x25A0; Carrière </div>
					<div className={value_css}> {char.career?.ShortName} </div>
					<div className={key_css}>&#x25A0; Unité </div>
					<div className={value_css}> {char.unit} </div>
					<div className={key_css}>&#x25A0; Niveau </div>
					<div className={value_css}> {char.level.Name} </div>
				</div>
				<div className="justify-center flex space-x-2">
					<ExportCharacter char={char} />
				</div>
				<div>
					<div className="py-2 justify-center border border-blue-500 text-blue-500">
						<legend className="text-center">Conciliation</legend>
						<Point points={char.bonus_dices.paragon} total={9}/>
					</div>
					<div className=" py-2 justify-center border border-red-500 text-red-500">
						<legend className="text-center">Pragmatisme</legend>
						<Point points={char.bonus_dices.renegade} total={9}/>
					</div>
				</div>
			</div>
		);
	}
