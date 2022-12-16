import Nav from "./Nav"

export default function Layout(props: any) {
	return (
		<div className="dark:bg-gray-800 bg-gray-100 dark:text-gray-200 text-gray-1000">
			<Nav />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
				{props.children}
			</div>
		</div>
	)
}
