import Purchase from "../components/Purchase";
import { useState } from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";

function Home({ data }) {
	const [currentPurchase, setCurrentPurchase] = useState(null);

	return (
		<div>
			<Link to="/stats">
				<div>stats</div>
			</Link>

			{currentPurchase === null &&
				data?.Purchase[0].map((p) => {
					return (
						<div>
							<button onClick={() => setCurrentPurchase(p)}>
								{p?.timeStamp}
							</button>
						</div>
					);
				})}
			{currentPurchase != null && (
				<Purchase
					data={currentPurchase}
					goBackFunc={() => setCurrentPurchase(null)}
				/>
			)}
		</div>
	);
}

export default Home;
