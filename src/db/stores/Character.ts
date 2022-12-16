import characterSchema,{Character} from '../schemas/character';
import Datastore from "nedb-promises";
import path from "path";

const remote = window.require("electron").remote;
const Ajv = require('ajv');

class CharacterStore {
	private db: Datastore<Character>;
	schemaValidator: typeof Ajv;

	constructor() {
		const ajv = new Ajv({
			allErrors: true,
			useDefaults: true
		});

		this.schemaValidator = ajv.compile(characterSchema);
		const dbPath = path.join(remote.app.getPath("userData"), "/char.db");
		this.db = Datastore.create({
			autoload: true,
			filename: dbPath,
			timestampData: true,
		});
	}

	validate(data: Character) {
		return this.schemaValidator(data);
	}

	create(data: Character) {
		const isValid = this.validate(data);
		if (isValid) {
			return this.db.insert(data);
		}
	}

	read(_id: number) {
		return this.db.findOne({_id}).exec()
	}

	readAll() {
		return this.db.find({})
	}
}

exports = new CharacterStore();
