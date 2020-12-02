import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<li className="product">
			<Link to={`/products/${product._id}`}>
				<img
					className="product-image"
					src={product.image}
					alt="Product"
				/>
			</Link>
			<div className="product-name">
				<Link to={`/products/${product._id}`}>{product.name}</Link>
			</div>
			<div className="product-brand">{product.brand}</div>
			<div className="product-price">${product.price}</div>
			<div className="product-rating">
				{product.rating} Stars ({product.numReviews} Reviews)
			</div>
		</li>
	);
};

export default Product;
