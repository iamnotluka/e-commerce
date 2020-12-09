import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = (props) => {
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts());
	}, []);

	return loading ? (
		<div>Loading...</div>
	) : error ? (
		<div>{error}</div>
	) : (
		<div>
			<ul className="products">
				{products.map((product) => (
					<li key={product._id} className="product">
						<Product product={product} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default HomeScreen;
