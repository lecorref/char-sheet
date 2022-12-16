//import Ajv, {JTDSchemaType} from "ajv/dist/jtd"
import {Race, Attribute} from "../../utils/Enums"

export interface Character {
	name: string
	race: Race
	stats: Record<Attribute, number>
}

const characterSchema = {
	properties: {
		name: {
			type: 'string',
		},
		race: {
			type: 'enum',
		},
		stats: {
			type: 'object',
		}
	}
};

export default characterSchema
