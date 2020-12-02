import React from "react";
import data from "../data";
import Product from "./Product";

const HomeScreen = (props) => {
	return (
		<div>
			<ul className="products">
				{data.products.map((product) => (
					<Product product={product} />
				))}
			</ul>
		</div>
	);
};

export default HomeScreen;
