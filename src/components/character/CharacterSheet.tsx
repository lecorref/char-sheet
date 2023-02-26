import {ExportCharacter} from "components/Export"
import { CharacterProps } from "utils/Types"
import CharacterAttributes from "./CharacterAttributes"
import CharacterPresentation from "./CharacterPresentation"
import CharacterSkills from "./CharacterSkills"

export function CharacterSheet({char} : CharacterProps) {
	return (
		<>
			<div className="justify-center ml-6 flex items-baseline space-x-2">
				<ExportCharacter char={char} />
			</div>
			<div className="center flex-wrap flex flex-row gap-1 md:auto-cols-max">
				<CharacterPresentation char={char} />
				<CharacterAttributes char={char} />
				<CharacterSkills char={char} />
			</div>
		</>
	)
}
