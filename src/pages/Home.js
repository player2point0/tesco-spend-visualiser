import Purchase from "../components/Purchase";

function Home({ data }) {
	return (
		<div>
			{data?.Purchase[0].map((p) => {
				console.log(p);
				return <Purchase data={p} />;
			})}
		</div>
	);
}

export default Home;
