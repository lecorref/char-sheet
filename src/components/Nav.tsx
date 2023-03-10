import { Link } from "react-router-dom";
import Switcher from "./Switcher"

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
			<nav className="dark:bg-gray-900 bg-gray-300">
				<div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
					<div className="flex items-center justify-between h-8 sm:h-12 lg:h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<Switcher />
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link className="dark:text-gray-200 hover:bg-gray-700 text-gray-1000 px-3 py-2 rounded-md text-sm font-medium"
									to="/">
										Home
									</Link>
									<Link className="dark:text-gray-200 hover:bg-gray-700 text-gray-1000 px-3 py-2 rounded-md text-sm font-medium"
									to="/characters"
									>
										Characters
									</Link>
									<Link className="dark:text-gray-200 hover:bg-gray-700 text-gray-1000 px-3 py-2 rounded-md text-sm font-medium"
									to="/characters"
									>
										TBD
									</Link>
								</div>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-gray-1000 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 text-gray-900 hover:text-white hover:bg-gray-600 "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
									<Link className="dark:text-gray-200 hover:bg-gray-700 text-gray-1000 block px-3 py-2 rounded-md text-base font-medium"
									to="/">
										Home
									</Link>
									<Link className="dark:text-gray-200 hover:bg-gray-700 text-gray-1000 block px-3 py-2 rounded-md text-base font-medium"
									to="/characters"
									>
										Characters
									</Link>
									<Link className="dark:text-gray-200 hover:bg-gray-700 text-gray-1000 block px-3 py-2 rounded-md text-base font-medium"
										to="characters"
									>
										TBD
									</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
	);
}

export default Nav;

