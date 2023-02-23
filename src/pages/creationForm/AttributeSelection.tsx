import SelectAttribute from 'components/SelectAttribute';
import {useState} from 'react';
import {EAttribute, IAttribute, ILevel, ISpecies} from 'utils/Interfaces';
import { FormWrapper } from "../../components/FormWrapper"

type UserData = {
	species: ISpecies,
	level : ILevel,
	attributes: [EAttribute, number][],
}

type FormProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void
}

export default function AttributeSelection({
	species,
	level,
	attributes,
	updateFields,
}: FormProps) {

	function getAttributeattr_points(currentAttr: [EAttribute, number][], defaultAttr: IAttribute[]) {
		let acc = level.attr_points
		currentAttr.forEach((current) => {
			defaultAttr.forEach((elem) => {
				if (elem.attr === current[0])
					acc += (elem.Vdefault - current[1])
			})
		})
		return acc
	}
	
	const [attr, setAttr] = useState(getAttributeattr_points(attributes, species.DefaultAttr))

	return(
		<FormWrapper title="Attributs de vos personnages" subtitle="Les attributs sont les caractéristiques innées de votre personnage. Les personnages disposent gratuitement à la création d’un niveau 2 dans chacun des Attributs. Il est toutefois à noter qu’à la création, l’attribut Biotique n’est offert au niveau 2 que pour les espèces naturellement biotiques, à savoir les Asari et les Drell." >
			<div className="px-6 text-left items-center select-none flex justify-between flex-row">
				Personnage {level.Name} avec {attr}/{level.attr_points} points disponibles
			</div>
			<ul className="grid gap-6 w-full md:grid-cols-2">
				{
					species.DefaultAttr.map(item => (
						<li key={item.attr}>
							<SelectAttribute
								attrPoint={attr}
								setAttrPoint={setAttr}
								attr={item}
								attributes ={attributes}
								updateFields={updateFields}
							/>
						</li>
					))
				}
			</ul>
		</FormWrapper>
	);
}

