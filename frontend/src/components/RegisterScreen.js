import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";

const RegisterScreen = (props) => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
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
						<h2>Sign-In</h2>
					</li>
					<li>{loading && <div>Loading...</div>}</li>
					<li>{error && <div>{error}</div>}</li>
					<li>
						<label htmlFor="name">Name</label>
						<input
							type="name"
							name="name"
							id="name"
							onChange={(e) => setName(e.target.value)}
						/>
					</li>
					<li>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</li>
					<li>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</li>
					<li>
						<label htmlFor="repassword">Re-Enter Password</label>
						<input
							type="password"
							id="repassword"
							name="repassword"
							onChange={(e) => setRePassword(e.target.value)}
						/>
					</li>
					<li>
						<button type="submit" className="button primary">
							Register
						</button>
					</li>
					<li>Already have an account?</li>
					<li>
						<Link
							to={
								redirect === "/"
									? "/signin"
									: "signin?redirect=" + redirect
							}
							className="button primary text-center">
							Sign-in
						</Link>
					</li>
				</ul>
			</form>
		</div>
	);
};

export default RegisterScreen;
