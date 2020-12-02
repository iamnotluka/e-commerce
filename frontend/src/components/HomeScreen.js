import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

const HomeScreen = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("/api/products");
			setProducts(data);
		};
		fetchData();
	}, []);

	return (
		<div>
			<ul className="products">
				{products.map((product) => (
					<Product product={product} />
				))}
			</ul>
		</div>
	);
};

export default HomeScreen;
