import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";

const ShippingScreen = (props) => {
	const dispatch = useDispatch();
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [postcode, setPostcode] = useState("");
	const [country, setCountry] = useState("");
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, userInfo, error } = userRegister;
	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(register(name, email, password));
	};

	return (
		<div className="form">
			<form onSubmit={submitHandler}>
				<ul className="form-container">
					<li>
						<h2>Shipping</h2>
					</li>
					<li>
						<label htmlFor="address">Address</label>
						<input
							type="text"
							name="address"
							id="address"
							onChange={(e) => setAddress(e.target.value)}
						/>
					</li>
					<li>
						<label htmlFor="city">City</label>
						<input
							type="text"
							name="city"
							id="city"
							onChange={(e) => setCity(e.target.value)}
						/>
					</li>
					<li>
						<label htmlFor="postcode">Postcode</label>
						<input
							type="text"
							name="postcode"
							id="postcode"
							onChange={(e) => setPostcode(e.target.value)}
						/>
					</li>
					<li>
						<label htmlFor="country">Country</label>
						<input
							type="text"
							name="country"
							id="country"
							onChange={(e) => setCountry(e.target.value)}
						/>
					</li>
					<li>
						<button type="submit" className="button primary">
							Continue
						</button>
					</li>
				</ul>
			</form>
		</div>
	);
};

export default ShippingScreen;
