import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "../checkoutComponents/CheckoutSteps";

const PlaceOrderScreen = (props) => {
	const cart = useSelector((state) => state.cart);
	const { cartItems, shipping, payment } = cart;
	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
	const shippingPrice = itemsPrice > 100 ? 0 : 10;
	const taxPrice = 0.15 * itemsPrice;
	const totalPrice = itemsPrice + shippingPrice + taxPrice;
	console.log(cartItems, shipping, payment);
	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const placeOrderHandler = () => {};

	if (!shipping) {
		props.history.push("/shipping");
		return <div></div>;
	} else if (!payment) {
		props.history.push("/payment");
		return <div></div>;
	} else {
		const checkoutHandler = () => {
			props.history.push("/signin?redirect=shipping");
		};

		return (
			<div>
				<div>
					<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
				</div>
				<div className="placeorder">
					<div className="placeorder-info">
						<div>
							<h3>Shipping</h3>
						</div>
						{cart && (
							<div>
								<div>
									{cart.shipping.address},{" "}
									{cart.shipping.city},
									{cart.shipping.postcode},{" "}
									{cart.shipping.country}
								</div>
								<div>
									<h3>Payment</h3>
								</div>
								<div>{cart.shipping.paymentMethod}</div>
								<div>
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
														<img
															src={item.image}
															alt={item.name}
														/>
													</div>
													<div className="cart-name">
														{item.name}
														<div>
															Quantity: {item.qty}
														</div>
													</div>
													<div className="cart-price">
														${item.price}
													</div>
												</li>
											))
										)}
									</ul>
								</div>
							</div>
						)}
						<div className="placeorder-action">
							<ul>
								<li>
									<h3>Order Summary</h3>
								</li>
								<li>
									<div>Items</div>
									<div>${itemsPrice}</div>
								</li>
								<li>
									<div>Tax</div>
									<div>${taxPrice}</div>
								</li>
								<li>
									<div>Shipping</div>
									<div>${shippingPrice}</div>
								</li>
								<li>
									<div>Order Total</div>
									<div>${totalPrice}</div>
								</li>
								<li>
									<button
										onClick={placeOrderHandler}
										className="button primary full-width">
										Place Order
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default PlaceOrderScreen;
