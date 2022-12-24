import {Link} from "react-router-dom"
import { CharacterProps } from "utils/Types"

export default function CharacterBox(props: CharacterProps) {
	const character = props.char
	return (
		<li key={character.name}>
			<Link to={`/Character/${character.name}`} state={{char: {character}}} >
				<label
					htmlFor={"Id-" + character.name}
					className="flex p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<div className="space-x-4 flex">
						<div className="flex-1 w-full text-xl font-semibold">
							{character.name}
						</div>
						<div className="flex-auto">
							{character.species.Name} {character.level?.Name}. Employeur: {character.career?.ShortName}
						</div>
					</div>
				</label>
			</Link>
		</li>
	)
}

