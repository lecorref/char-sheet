import { Link } from "react-router-dom";
import CharacterBox from "components/character/CharacterButton";
import { ICharacter } from "../utils/Interfaces"
import useLocalStorageState from "use-local-storage-state";

const ClassCss = "dark:text-gray-200 hover:bg-gray-700 text-gray-1000 px-3 py-2 rounded-md text-lg font-light"

export default function Characters() {
	const [characters, ] = useLocalStorageState<ICharacter[]>("characters")

	return (
		<>
			<div className="justify-center ml-10 flex items-baseline space-x-4">
				<Link className={ClassCss}
					to="/character_creation"
				>
					Create Character
				</Link>
				<Link className={ClassCss}
					to="characters"
				>
					Import character
				</Link>
				<Link className={ClassCss}
					to="characters"
				>
					Generate character
				</Link>
			</div>
			<ul className="grid gap-6 w-full md:grid-cols-2">
				{characters && characters.map((character: ICharacter) => (
					<CharacterBox char={character}/>
				))}
			</ul>
		</>
	);
}
