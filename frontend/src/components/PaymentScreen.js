import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../actions/cartActions";
import CheckoutSteps from "../checkoutComponents/CheckoutSteps";

const PaymentScreen = (props) => {
	const dispatch = useDispatch();

	const [paymentMethod, setPaymentMethod] = useState("");
	const [message, setMessage] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePayment(paymentMethod));
		if (paymentMethod !== "") {
			props.history.push("placeorder");
		} else {
			setMessage("Please select payment method.");
		}
	};

	useEffect(() => {
		setMessage("");
	}, [paymentMethod]);

	return (
		<div>
			<div>
				<CheckoutSteps step1 step2 step3></CheckoutSteps>
			</div>
			<div className="form">
				<form onSubmit={submitHandler}>
					<ul className="form-container">
						<li>
							<h2>Payment</h2>
						</li>

						<li>
							<label htmlFor="paymentMethod">Paypal</label>
							<input
								value="paypal"
								type="radio"
								name="paymentMethod"
								id="paymentMethod"
								onChange={(e) =>
									setPaymentMethod(e.target.value)
								}
							/>
						</li>
						<li>
							<button type="submit" className="button primary">
								Continue
							</button>
						</li>
						<li>
							<small>{message === "" ? " " : message}</small>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
};

export default PaymentScreen;
