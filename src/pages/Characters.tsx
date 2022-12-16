import Layout from "../components/Layout";
const {remote} = require('electron');

const dbInstance = remote.getGlobal('db');

export default function Characters() {
	return (
		<Layout>
			<div>
				dbInstance.count({})
			</div>
		</Layout>
	);
}

