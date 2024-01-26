function PurchaseBreakdown({ data, goBackFunc }) {
	return (
		<div>
			<button onClick={() => goBackFunc()}>back</button>
			<div> total {data.total} </div>
			<div>
				{data.products.map((p) => {
					return (
						<p>
							{p?.name} £{p?.price} quantity:{p?.quantity}
						</p>
					);
				})}
			</div>
			)
		</div>
	);
}

export default PurchaseBreakdown;
