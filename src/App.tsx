import Characters from "./pages/Characters"
import ComingSoon from "./pages/ComingSoon"
import NotFound from "./pages/NotFound"
import Creation from "./pages/Creation"
import { Character } from "./pages/Character"
import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom'
import Layout from "components/Layout"

function App() {
	return (
		<HashRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Characters />} />
					<Route path='/characters' element={<Characters/>} />
					<Route path='/character_creation' element={<Creation />} />
					<Route path='/character/:charId' element={<Character/>} />
					<Route path='/project' element={<ComingSoon />} />

					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</HashRouter>
	);
}

export default App;
