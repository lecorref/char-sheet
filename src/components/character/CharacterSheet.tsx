import {ExportCharacter} from "components/Export"
import { CharacterProps } from "utils/Types"

export function CharacterSheet({char} : CharacterProps) {
	return (
		<>
			<div className="justify-center ml-10 flex items-baseline space-x-4">
				<ExportCharacter char={char} />
			</div>
			{char.name}
		</>
	)
}
