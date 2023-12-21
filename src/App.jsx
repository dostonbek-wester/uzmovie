import React from "react"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "./pages/Detail/Detail"
import Searchbar from './components/Searchbar/Searchbar'
import Center from "./components/Containering/Center"

function App() {

	return(
		<React.Fragment>
			<BrowserRouter>
				<Center color="#222933">
					<Header />
				</Center>
				<Center color="#131A1F">
				<Searchbar />
				</Center>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/detail" element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App
