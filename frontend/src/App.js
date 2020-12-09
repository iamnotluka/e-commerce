import "./App.css";
import React, { useState, useEffect } from "react";

import HomeScreen from "./components/HomeScreen";
import ProductsEditScreen from "./components/ProductEditScreen";
import ProductScreen from "./components/ProductScreen";
import CartScreen from "./components/CartScreen";
import SigninScreen from "./components/SigninScreen";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import RegisterScreen from "./components/RegisterScreen";
import ShippingScreen from "./components/ShippingScreen";
import PaymentScreen from "./components/PaymentScreen";
import PlaceOrderScreen from "./components/PlaceOrderScreen";

function App() {
	const [open, setOpen] = useState(false);
	const [products, setProducts] = useState([]);
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("/api/products");
			setProducts(data);
		};
		fetchData();
	}, []);

	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="header">
					<div className="brand">
						<button onClick={() => setOpen(!open)}>&#9776;</button>

						<Link to="/">Emporium</Link>
					</div>
					<div className="header-links">
						<Link to="/cart">Cart</Link>
						{userInfo ? (
							<Link to="/profile">{userInfo.name}</Link>
						) : (
							<Link to="/signin">Signin</Link>
						)}
					</div>
				</header>
				<aside className={`sidebar ${open ? "open" : ""}`}>
					<h3>Shopping categories</h3>
					<button
						className="sidebar-button"
						onClick={() => setOpen(!open)}>
						X
					</button>
					<ul>
						<li>
							<a href="index.html">Pants</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="index.html">Shirt</a>
						</li>
					</ul>
				</aside>
				<main className="main">
					<div className="content">
						<Route
							path="/products"
							exact={true}
							component={ProductsEditScreen}
						/>
						<Route path="/payment" component={PaymentScreen} />
						<Route
							path="/placeorder"
							component={PlaceOrderScreen}
						/>
						<Route path="/shipping" component={ShippingScreen} />
						<Route path="/signin" component={SigninScreen} />
						<Route path="/register" component={RegisterScreen} />
						<Route path="/products/:id" component={ProductScreen} />
						<Route
							path="/"
							exact={true}
							products={products}
							component={HomeScreen}
						/>
						<Route path="/cart/:id?" component={CartScreen} />
					</div>
				</main>
				<footer className="footer">All rights reserved.</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
