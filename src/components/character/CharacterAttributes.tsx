import Point from "components/Points";
import { CharacterProps } from "utils/Types";
import Health from "components/Health";
import {EAttribute} from "utils/Interfaces";

const title_css = "px-2 text-xl font-bold center w-full dark:text-yellow-400"

export default function CharacterAttributes({
	char
}: CharacterProps) {
	return (
		<div
			className="gap-1 flex flex-col bg-white  dark:text-gray-300 dark:bg-gray-900"
		>
			<div className={title_css} > &#x25A0; Attributs </div>
			<ul className="px-2 grid gap-2 w-full md:grid-cols-2">
				{
					char.attributes.map((item, index) => (
						<li key={index}>
							<div className="flex-row flex">
								{char.species.DefaultAttr[index].name}
							</div>
							<Point
								total={char.species
								.DefaultAttr[index].Vmax}
								points={item[1]}
							/>
						</li>
					))
				}
			</ul>
			<div className={title_css} > &#x25A0; Santé </div>
			<Health vigor={char.attributes[EAttribute.Vigor][1]} />

		</div>
	);
}
