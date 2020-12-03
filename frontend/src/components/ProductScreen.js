import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

const ProductScreen = (props) => {
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsProduct(props.match.params.id));
		setQty(product.stockCount);
		console.log(qty);
		return () => {};
	}, []);

	const handleAddToCart = () => {
		props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
	};
	return (
		<div>
			<div className="back-to-result">
				<Link to="/">Back to result</Link>
			</div>
			{loading ? (
				<div>Loading</div>
			) : error ? (
				<div>Couldn't find the product.</div>
			) : (
				<div className="details">
					<div className="details-image">
						<img src={product.image} alt={product.name} />
					</div>
					<div className="details-info">
						<ul>
							<li>
								<h4>{product.name}</h4>
							</li>
							<li>
								{product.rating} Stars ({product.numReviews}{" "}
								Reviews)
							</li>
							<li>
								<b>Price: ${product.price}</b>
							</li>
							<li>
								Description:
								<div>{product.description}</div>
							</li>
						</ul>
					</div>
					<div className="details-action">
						<ul>
							<li>Price: {product.price}</li>
							<li>
								Status:{" "}
								{product.status
									? product.status
									: product.countInStock > 0
									? "Available"
									: "Not in stock"}
							</li>
							<li>
								Quantity:{" "}
								<select
									value={qty}
									onChange={(e) => {
										setQty(e.target.value);
									}}>
									{[...Array(product.stockCount).keys()].map(
										(x) => (
											<option value={x + 1}>
												{x + 1}
											</option>
										)
									)}
								</select>
							</li>
							<li>
								{qty > 0 ? (
									<button
										onClick={handleAddToCart}
										className="add-cart-button">
										Add to cart
									</button>
								) : (
									<button
										disabled="true"
										className="add-cart-button">
										Add to cart
									</button>
								)}
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductScreen;
