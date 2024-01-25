function Purchase({ data, goBackFunc }) {
	console.log(data);

	return (
		<div>
			<button onClick={() => goBackFunc()}>back</button>
			<div> total {data.basketValueGross} </div>
			<div>
				{data.product.map((p) => {
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

export default Purchase;
