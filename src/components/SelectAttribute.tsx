import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useState} from 'react';
import {EAttribute, IAttribute} from 'utils/Interfaces';

type AttributeData = {
	attrPoint: number,
	setAttrPoint: Function,
	attr: IAttribute,
	attributes: [EAttribute, number][],
}

type AttributeProps = AttributeData & {
	updateFields: (fields: Partial<AttributeData>) => void
}

export default function SelectAttribute({
	attrPoint,
	setAttrPoint,
	attr,
	attributes,
	updateFields,
}: AttributeProps) {
	const rows = {};
	Object.assign(rows, Array.from(Array(attr.Vmax + 1).keys()));

	function getAttributeValue(attributes: [EAttribute, number][], value: EAttribute): [EAttribute, number] {
		let ret = attributes.find(elem => (elem[0] === value));
		if (ret === undefined)
			return [EAttribute.Mind, 2];
		return ret;
	}

	const [value, setValue] = useState(getAttributeValue(attributes, attr.attr)[1]);

	const onSliderChange = (val: any) => {
		if (val >= attr.Vdefault) {
			let points = attrPoint - (val - value);
			if (points >= 0) {
				setValue(val);
				setAttrPoint(points);
				updateFields({attributes: attributes.map(elem  => {
					if (elem[0] === attr.attr)
						elem[1] = val;
					return elem;
				})})
			}
		}
	}

	return (
		<div className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<div
				className="item-center w-full"
			>
				{attr.name}
			</div>
			<Slider
				min={0}
				max={attr.Vmax}
				value={value}
				marks={rows}
				onChange={e => onSliderChange(e)}
			/>
		</div>
	)
}
