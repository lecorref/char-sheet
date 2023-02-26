import {CharacterProps} from "utils/Types";

const ClassCss = "dark:text-gray-200 hover:bg-gray-700 text-gray-1000 rounded-md font-light"

export function ExportCharacter({char}: CharacterProps) {
	console.log(char);
	const downloadCharSheet = () => {
		const fileData = JSON.stringify(char);
		const blob = new Blob([fileData], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.download = char.name + ".json";
		link.href = url;
		link.click();
	}
	return (
		<button className={ClassCss}
			onClick={downloadCharSheet}
		>
			Export
		</button>
	)
}
