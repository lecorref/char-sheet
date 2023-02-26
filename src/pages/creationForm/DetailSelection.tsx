import { FormWrapper } from "../../components/FormWrapper"
import { ICharacter } from "../../utils/Interfaces"
import useLocalStorageState from "use-local-storage-state";

type UserData = {
	name: string
	age?: number
}

type FormProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void
}

export default function DetailSelection({
	name,
	age,
	updateFields,
}: FormProps) {
	const [characters, ] = useLocalStorageState<ICharacter[]>("characters");

	function validateName(name: string) {
		const exist = characters?.some(character => {
			if (character.name === name) return true
			return false
		});
		if (exist) {
			console.log("error. This character already exist")
			return ;
		}
		updateFields({name: name});
	}

	return(
		<FormWrapper title="Détails sur votre personnage" subtitle="Nom, background..." >
			<div className="mb-6">
				<label
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Prénom et Nom
				</label>
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					min={1}
					type="text"
					value={name}
					onChange={e => validateName(e.target.value)}
				/>
			</div>
			<div>{age}</div>
		</FormWrapper>
	);
}
