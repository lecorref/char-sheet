import { Link } from "react-router-dom";
import CharacterBox from "components/character/CharacterButton";
import { ICharacter } from "../utils/Interfaces"
import useLocalStorageState from "use-local-storage-state";

const ClassCss = "dark:text-gray-200 hover:bg-gray-700 text-gray-1000 px-3 py-2 rounded-md text-lg font-light"

export default function Characters() {
	const [characters, setCharacters] = useLocalStorageState<ICharacter[]>("characters")

	const setData = (e: ICharacter) => {
	  const char = characters?.find(character => character.name === e.name);
		if (char) 
			e.name += "(new)";
		if (characters)
			setCharacters([...characters, e]);
		else
			setCharacters([e]);
	}

	const readFileOnUpload = (e: React.ChangeEvent<HTMLInputElement>) =>{
		const fileReader = new FileReader();
		fileReader.onloadend = ()=>{
			if (fileReader.result && typeof fileReader.result == "string") {
				setData(JSON.parse(fileReader.result));
			}
		}
		if (e.target.files)
			fileReader.readAsText(e.target.files[0]);
	}


	return (
		<>
			<div className="justify-center ml-10 flex items-baseline space-x-4">
				<Link className={ClassCss}
					to="/character_creation"
				>
					Créer un personnage
				</Link>
				<Link className={ClassCss}
					to="characters"
				>
					Générer un personnage
				</Link>
				<form>
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="file_input"
					>
						Importer un personnage
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						type={"file"}
						id={"file_input"}
						accept={".json"}
						onChange={readFileOnUpload}
					/>
				</form>
			</div>
			<ul className="grid gap-6 w-full md:grid-cols-2">
				{characters && characters.map((character: ICharacter) => (
					<CharacterBox char={character}/>
				))}
			</ul>
		</>
	);
}
