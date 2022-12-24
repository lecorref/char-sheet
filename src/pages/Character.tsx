import { CharacterSheet } from "components/character/CharacterSheet" 
import {useParams} from "react-router-dom"
import useLocalStorageState from "use-local-storage-state"
import { ICharacter } from "../utils/Interfaces"
import NotFound from "./NotFound"

export function Character() {
	const param = useParams()
	const name = param.charId
	const [characters, ] = useLocalStorageState<ICharacter[]>("characters")

	const char = characters?.find(character => character.name == name);
	if (char != undefined) {
		return <CharacterSheet char={char} />
	}
	return <NotFound />
}
