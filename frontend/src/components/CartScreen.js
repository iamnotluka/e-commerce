import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

const CartScreen = (props) => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const productId = props.match.params.id;
	const qty = props.location.search
		? Number(props.location.search.split("=")[1])
		: 1;

	const dispatch = useDispatch();

	const removeFromCartHandler = (productId) => {
		dispatch(removeFromCart(productId));
	};
	const checkoutHandler = () => {
		props.history.push("/signin?redirect=shipping");
	};

	const handleQuantityChange = (productId, e) => {
		dispatch(addToCart(productId, e.target.value));
	};

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, []);

	return (
		<div className="cart">
			<div className="cart-list">
				<ul className="cart-list-container">
					<li>
						<h3>Shopping cart</h3>
						<div>Price</div>
					</li>
					{cartItems.lenght === 0 ? (
						<div>Cart is empty.</div>
					) : (
						cartItems.map((item) => (
							<li>
								<div className="cart-image">
									<img src={item.image} alt={item.name} />
								</div>
								<div className="cart-name">
									<Link to={"/product/" + item.product}>
										{item.name}
									</Link>
									<div>
										Quantity:
										<select
											value={item.qty}
											onChange={(e) =>
												handleQuantityChange(
													item.product,
													e
												)
											}>
											{[
												...Array(
													item.stockCount
												).keys(),
											].map((x) => (
												<option
													key={x + 1}
													value={x + 1}>
													{x + 1}
												</option>
											))}
										</select>
										<button
											type="button"
											className="button"
											onClick={() =>
												removeFromCartHandler(
													item.product
												)
											}>
											Delete
										</button>
									</div>
								</div>
								<div className="cart-price">${item.price}</div>
							</li>
						))
					)}
				</ul>
			</div>
			<div className="cart-action">
				<h3>
					Subtotal (
					{cartItems.reduce((a, c) => Number(a) + Number(c.qty), 0)}{" "}
					items) : $
					{cartItems.reduce(
						(a, c) => Number(a) + Number(c.price) * Number(c.qty),
						0
					)}
				</h3>
				<button
					onClick={checkoutHandler}
					className="button primary full-width"
					disabled={cartItems.length === 0}>
					Proceed to checkout
				</button>
			</div>
		</div>
	);
};

export default CartScreen;
