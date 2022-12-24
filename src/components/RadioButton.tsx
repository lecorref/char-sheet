import {ReactNode} from 'react';

type RadoButtonProps = {
	label: ReactNode
	value: boolean
	onChange: any
}

export default function RadioButton({ label, value, onChange }: RadoButtonProps) {
	return (
		<label>
			<input type="radio" checked={value} />
			{label}
		</label>
	);
};
