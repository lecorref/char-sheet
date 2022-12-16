import React from "react";
import Landing from "./pages/Landing"
import Characters from "./pages/Characters"
import ComingSoon from "./pages/ComingSoon"
import NotFound from "./pages/NotFound"
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/characters' element={<Characters />} />
				<Route path='/project' element={<ComingSoon />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
