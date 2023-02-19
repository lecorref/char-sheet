import React  from "react";
import {useDarkSide} from '../hook/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = () => {
	const [colorTheme, setTheme] = useDarkSide();
	const [isDarkMode, setDarkMode] = React.useState(colorTheme === 'light' ? true : false);

	const toggleDarkMode = (checked: boolean) => {
		setTheme(colorTheme);
		setDarkMode(checked);
	};

	return (
		<div className="flex flex-col items-center">
			<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} moonColor="#7dd3fc" sunColor="#38bdf8" size={30} />
		</div>
	);
};

export default Switcher;

