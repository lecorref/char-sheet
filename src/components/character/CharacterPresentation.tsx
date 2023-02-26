import { CharacterProps } from "utils/Types";

const key_css = "p-1 font-bold text-yellow-400"
const value_css = "px-2 bg-gray-400 text-yellow-800 text-lg"

export default function CharacterPresentation(
	{char}: CharacterProps) {
		return (
			<div
				className="p-4 gap-2 flex-initial flex flex-col bg-white border border-gray-200 dark:border-gray-700  dark:text-gray-300 dark:bg-gray-900"
			>
				<div
					className="p-2 place-content-center text-3xl font-bold center w-full dark:bg-gray-700 bg-gray-200 dark:text-yellow-400 text-center"
				>
					{char.species.Name.toUpperCase()}
				</div>
				<div className="border dark:border-gray-300">
					<div className={key_css}>&#x25A0;  Nom </div>
					<div className={value_css}> {char.name} </div>
					<div className={key_css}>&#x25A0; Age </div>
					<div className={value_css}> {char.age} </div>
					<div className={key_css}>&#x25A0; Carrière </div>
					<div className={value_css}> {char.career?.ShortName} </div>
					<div className={key_css}>&#x25A0; Unité </div>
					<div className={value_css}> {char.unit} </div>
					<div className={key_css}>&#x25A0; Niveau </div>
					<div className={value_css}> {char.level.Name} </div>
				</div>

			</div>
		);
	}
