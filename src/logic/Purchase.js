export class Purchase {
	constructor(data) {
		this.timeStamp = new Date(data?.timeStamp);
		this.total = data?.basketValueGross;
		this.savings = data?.overallBasketSavings;
		this.products = data?.product;
	}
}

// class Product {}
