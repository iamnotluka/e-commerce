import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [open, setOpen] = useState(false);

	return (
		<div className="grid-container">
			<header className="header">
				<div className="brand">
					<button onClick={() => setOpen(!open)}>&#9776;</button>

					<a href="index.html">Emporium</a>
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
					<ul className="products">
						<li className="product">
							<img
								className="product-image"
								src="https://images.asos-media.com/products/nike-football-dry-academy-t-shirt-in-black/11707330-1-black?$XXL$&wid=513&fit=constrain"
								alt="Product"
							/>
							<div className="product-name">
								<a href="product.html">Slim shirt</a>
							</div>
							<div className="product-brand">Nike</div>
							<div className="product-price">$60</div>
							<div className="product-rating">
								4.5 Stars (10 Reviews)
							</div>
						</li>
						<li className="product">
							<img
								className="product-image"
								src="https://images.asos-media.com/products/nike-football-dry-academy-t-shirt-in-black/11707330-1-black?$XXL$&wid=513&fit=constrain"
								alt="Product"
							/>
							<div className="product-name">
								<a href="product.html">Slim shirt</a>
							</div>
							<div className="product-brand">Nike</div>
							<div className="product-price">$60</div>
							<div className="product-rating">
								4.5 Stars (10 Reviews)
							</div>
						</li>
						<li className="product">
							<img
								className="product-image"
								src="https://images.asos-media.com/products/nike-football-dry-academy-t-shirt-in-black/11707330-1-black?$XXL$&wid=513&fit=constrain"
								alt="Product"
							/>
							<div className="product-name">
								<a href="product.html">Slim shirt</a>
							</div>
							<div className="product-brand">Nike</div>
							<div className="product-price">$60</div>
							<div className="product-rating">
								4.5 Stars (10 Reviews)
							</div>
						</li>
						<li className="product">
							<img
								className="product-image"
								src="https://images.asos-media.com/products/nike-football-dry-academy-t-shirt-in-black/11707330-1-black?$XXL$&wid=513&fit=constrain"
								alt="Product"
							/>
							<div className="product-name">
								<a href="product.html">Slim shirt</a>
							</div>
							<div className="product-brand">Nike</div>
							<div className="product-price">$60</div>
							<div className="product-rating">
								4.5 Stars (10 Reviews)
							</div>
						</li>
					</ul>
				</div>
			</main>
			<footer className="footer">All rights reserved.</footer>
		</div>
	);
}

export default App;
