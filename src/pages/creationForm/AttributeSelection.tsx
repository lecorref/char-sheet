import { FormWrapper } from "../../components/FormWrapper"


type UserData = {
	attributes?: string
}

type FormProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void
}

export default function DetailSelection({
	attributes,
	updateFields,
}: FormProps) {
	return(
		<FormWrapper title="Détails sur votre personnage" subtitle="Nom, background..." >
			<div>{attributes}</div>
		</FormWrapper>
	);
}

