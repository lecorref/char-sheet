export default function CharacterList(props: any) {
	if (props.characterList === null) {
		return (
			<div className="text-center">
				No character available.
			</div>	
		);
	}
	else {
		console.log(props.characterList)
		return (
			<div>truc</div>
		);
	}
}

