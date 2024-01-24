import { useState } from "react";

function Purchase({ data }) {
	console.log(data);
	const [clicked, setClicked] = useState(false);

	return (
		<div>
			<button onClick={() => setClicked((val) => !val)}>
				{data.timeStamp}
			</button>
			{clicked && <div> {data.basketValueGross} </div>}
			{clicked && (
				<div>
					{data.product.map((p) => {
						return (
							<p>
								{p?.name}
								{p?.price}
								{p?.quantity}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Purchase;
