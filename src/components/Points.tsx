type PointProps = {
	points: number,
	total: number,
}
export default function Point({points, total} : PointProps) {
	return (
		<div
			className="flex-row flex gap-0 text-sm"
		>

			{
				[...Array(total)].map((e, i) => (
					(i < points)?
						<div>&#x25C9;</div>:
						<div>&#x25CB;</div>
				))
			}
		</div>
	);
}
