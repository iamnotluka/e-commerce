import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts, productSave } from "../actions/productActions";

const ProductEditScreen = (props) => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [brand, setBrand] = useState("");
	const [category, setCategory] = useState("");
	const [stockCount, setStockCount] = useState("");
	const [description, setDescription] = useState("");

	const saveProduct = useSelector((state) => state.saveProduct);
	const { loadingSave, successSave, errorSave } = saveProduct;

	const productList = useSelector((state) => state.productList);
	const { loading, products, error } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
		return;
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			productSave({
				name,
				price,
				image,
				brand,
				category,
				stockCount,
				description,
			})
		);
	};

	return (
		<div className="content content-margined">
			<div className="product-header">
				<h3>Products</h3>
				<button>Create Product</button>
			</div>

			<div className="form">
				<form onSubmit={submitHandler}>
					<ul className="form-container">
						<li>
							<h2>Create product</h2>
						</li>
						<li>{loadingSave && <div>Loading...</div>}</li>
						<li>{errorSave && <div>{errorSave}</div>}</li>
						<li>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								onChange={(e) => setName(e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor="price">Price</label>
							<input
								type="text"
								id="price"
								name="price"
								onChange={(e) => setPrice(e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor="image">Image</label>
							<input
								type="text"
								id="image"
								name="image"
								onChange={(e) => setImage(e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor="brand">Brand</label>
							<input
								type="text"
								id="brand"
								name="brand"
								onChange={(e) => setBrand(e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor="category">Category</label>
							<input
								type="text"
								id="category"
								name="category"
								onChange={(e) => setCategory(e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor="stockCount">Stock count</label>
							<input
								type="text"
								id="stockCount"
								name="stockCount"
								onChange={(e) => setStockCount(e.target.value)}
							/>
						</li>
						<li>
							<label htmlFor="description">Description</label>
							<textarea
								type="text"
								id="description"
								name="description"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</li>
						<li>
							<button type="submit" className="button primary">
								Create
							</button>
						</li>
					</ul>
				</form>
			</div>
			<div className="product-list">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Price</th>
							<th>Category</th>
							<th>Brand</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.category}</td>
								<td>{product.brand}</td>
								<td>
									<button>Edit</button>
									<button>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductEditScreen;
