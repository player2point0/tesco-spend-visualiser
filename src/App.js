import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import { loadData } from "./logic/dataLoader";
import { useState } from "react";

function App() {
	// <Route path="blogs" element={<Blogs />} />
	const [data] = useState(loadData());

	console.log(data);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home data={data} />}>
					<Route index element={<Home data={data} />} />
				</Route>
				<Route path="/stats" element={<Stats data={data} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
