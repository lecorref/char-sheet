import { CharacterProps } from "utils/Types"
import CharacterAttributes from "./CharacterAttributes"
import CharacterPresentation from "./CharacterPresentation"
import CharacterSkills from "./CharacterSkills"

export function CharacterSheet({char} : CharacterProps) {
	return (
		<>
			<div className="center flex-wrap flex flex-row gap-1 md:auto-cols-max">
				<CharacterPresentation char={char} />
				<CharacterAttributes char={char} />
				<CharacterSkills char={char} />
			</div>
		</>
	)
}
