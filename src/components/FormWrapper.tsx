import { ReactNode, useState } from "react"

const minusIcon = '-'
const plusIcon = '+'

type FormWrapperProps = {
	title: string
	subtitle?: string
	children: ReactNode
}

export function FormWrapper({ title, subtitle, children }: FormWrapperProps) {
	const [expanded, setExpanded] = useState(false)
	const toggleExpanded = () => setExpanded((current) => !current)
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="center text-xl leading-6 text-gray-900 dark:text-gray-200" onClick={toggleExpanded}>
				<div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
					<h5 className="flex-1">
						{title}
					</h5>
					<div className="flex-none pl-2 text-2xl">{expanded ? minusIcon : plusIcon}</div>
				</div>
				<div className={`px-6 text-sm text-gray-700 dark:text-gray-400 pt-0 overflow-hidden transition-[max-height] duration-200 ease-in ${expanded ? "max-h-80" : "max-h-0"}`}>
					<p className="pb-4 text-left" style={{ whiteSpace: 'break-spaces' }}>
						{subtitle}
					</p>
				</div>
			</div>
			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
			</div>
			<div>
				{children}
			</div>
		</div>
	)
}
