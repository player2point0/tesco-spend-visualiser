import data from "../Tesco-Customer-Data.json";
import { Purchase } from "./Purchase";

export function loadData() {
	return data;
}

export function loadPurchases() {
	console.log(data?.Purchase[0]);
	// TODO why is purchase an array?
	const purchases = data?.Purchase[0].map((p) => {
		return new Purchase(p);
	});

	return purchases;
}
