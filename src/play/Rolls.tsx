import React from 'react';
import Chance from 'chance';


class Rolls extends React.Component {
	render() {
		return <p>Hello {new Chance().d10()}!</p>;
	}
}

export default Rolls;
