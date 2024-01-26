import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import { loadPurchases } from "./logic/DataLoader";
import { useState } from "react";

function App() {
	// <Route path="blogs" element={<Blogs />} />
	const [purchases] = useState(loadPurchases());

	console.log(purchases);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home purchases={purchases} />}>
					<Route index element={<Home purchases={purchases} />} />
				</Route>
				<Route path="/stats" element={<Stats purchases={purchases} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
