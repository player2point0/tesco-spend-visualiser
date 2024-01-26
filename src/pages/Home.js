import PurchaseBreakdown from "../components/PurchaseBreakdown";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ purchases }) {
	const [currentPurchase, setCurrentPurchase] = useState(null);

	return (
		<div>
			<Link to="/stats">
				<div>stats</div>
			</Link>

			{currentPurchase === null &&
				purchases.map((p) => {
					return (
						<div>
							<button onClick={() => setCurrentPurchase(p)}>
								{p?.timeStamp.toString()}
							</button>
						</div>
					);
				})}
			{currentPurchase != null && (
				<PurchaseBreakdown
					data={currentPurchase}
					goBackFunc={() => setCurrentPurchase(null)}
				/>
			)}
		</div>
	);
}

export default Home;
