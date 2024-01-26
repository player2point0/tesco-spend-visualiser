import { Link } from "react-router-dom";
const _ = require("lodash");

export default function Stats({ purchases }) {
	const groupedByYear = _.groupBy(purchases, ({ timeStamp }) =>
		timeStamp.getYear()
	);

	console.log(groupedByYear);

	return (
		<div>
			<Link to="/">
				<div>Home</div>
			</Link>
			<div>stats</div>
			<div>year breakdown</div>
			{Object.values(groupedByYear).map((group) => {
				const year = group[0].timeStamp.getFullYear();
				const total = group.reduce((n, { total }) => n + Number(total), 0);
				return (
					<div>
						<br />
						{year}-£{total}
						{monthBreakdown(group)}
					</div>
				);
			})}
		</div>
	);
}

function monthBreakdown(yearPurchases) {
	const groupedByMonth = _.groupBy(yearPurchases, ({ timeStamp }) =>
		timeStamp.getMonth()
	);

	return (
		<div>
			{Object.values(groupedByMonth).map((group) => {
				const month = group[0].timeStamp.toLocaleString("default", {
					month: "long",
				});

				const total = group.reduce((n, { total }) => n + Number(total), 0);
				return (
					<div>
						{month}-£{total}
					</div>
				);
			})}
		</div>
	);
}
