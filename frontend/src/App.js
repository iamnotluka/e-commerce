import "./App.css";
import React, { useState } from "react";
import data from "./data";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
	const [open, setOpen] = useState(false);

	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="header">
					<div className="brand">
						<button onClick={() => setOpen(!open)}>&#9776;</button>

						<Link to="/">Emporium</Link>
					</div>
					<div className="header-links">
						<a href="cart.html">Cart</a>
						<a href="signin.html">Sign In</a>
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
						<Route path="/products/:id" component={ProductScreen} />
						<Route path="/" component={HomeScreen} exact={true} />
					</div>
				</main>
				<footer className="footer">All rights reserved.</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
