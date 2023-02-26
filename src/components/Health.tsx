const health_table: number[][] = [
	[2, 1, 1, 1, 1, 1],
	[3, 2, 1, 1, 1, 1],
	[3, 3, 2, 1, 1, 1],
	[4, 3, 2, 2, 1, 1],
	[4, 4, 3, 2, 1, 1],
	[5, 4, 3, 2, 2, 1],
]

const health_value: string[][] = [
	[" 1 ", "superficielle"],
	["2-3", "légère"],
	["4-5", "Sérieuse (-1)"],
	["6-7", "Grave (-2)"],
	["8-9", "Critique (-3)"],
	["10+", "Mort"],
]

const shield_value: string[] = [
	" 1-2 ",
	" 3-5 ",
	" 6-9 ",
	"10-14",
	"15-20",
	"20-26",
]

export default function Health({vigor}: {vigor: number}) {
	const health: number[] = health_table[vigor - 2]
	return (
		<div className="flex flex-row gap-x-2 divide-x">
			<div className="text-blue-400">
				<div className="text-sm font-semibold text-center">
					Boucliers
				</div>
				<ul className="px-2 grid text-sm">
					{
						shield_value.map((val, index) =>(
							<li key={`shield-${index}`}
								className="flex flex-row auto-cols-max gap-x-2">
								<pre>{val}</pre>
								<div className="flex flex-row gap-x-1">
									<input type="checkbox" />
								</div>
							</li>
						))
					}
				</ul>
			</div>
			<div className="text-red-400">
				<div className="text-sm font-semibold pl-9">
					Blessures
				</div>
				<ul className="px-2 text-sm">
					{
						health.map((value, index) => (
							<li key={index}>
								<div
								className="flex flex-row gap-x-2 w-full">
								<pre>{health_value[index][0]}</pre>
									<div className="flex flex-row gap-x-1">
										{[...Array(value)].map(() =>(
											<input type="checkbox" />
										))
										}
									</div>
									<div className="grow text-right">
										{health_value[index][1]}
									</div>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}
