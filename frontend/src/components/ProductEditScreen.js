import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	listProducts,
	productSave,
	deleteProduct,
} from "../actions/productActions";

const ProductEditScreen = (props) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [brand, setBrand] = useState("");
	const [category, setCategory] = useState("");
	const [stockCount, setStockCount] = useState("");
	const [description, setDescription] = useState("");
	const [id, setId] = useState("");

	const saveProduct = useSelector((state) => state.saveProduct);
	const { loadingSave, successSave, errorSave } = saveProduct;

	const productList = useSelector((state) => state.productList);
	const { loading, products, error } = productList;

	const productDelete = useSelector((state) => state.productDelete);
	const {
		loadingDelete,
		success: successDelete,
		errorDelete,
	} = productDelete;

	const dispatch = useDispatch();

	useEffect(() => {
		console.log(successSave);
		if (successSave) {
			setModalVisible(false);
		}
		dispatch(listProducts());
	}, [successSave, successDelete]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			productSave({
				_id: id,
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

	const deleteHandler = (product) => {
		dispatch(deleteProduct(product._id));
	};

	const openModal = (product) => {
		setModalVisible(true);
		if (product) {
			setName(product.name);
			setPrice(product.price);
			setImage(product.image);
			setBrand(product.brand);
			setCategory(product.category);
			setStockCount(product.stockCount);
			setId(product._id);
			setDescription(product.description);
		}
	};

	return (
		<div className="content content-margined">
			<div className="product-header">
				<h3>Products</h3>
				<button className="button primary" onClick={() => openModal()}>
					Create Product
				</button>
			</div>
			{modalVisible ? (
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
									value={name}
									type="text"
									id="name"
									name="name"
									onChange={(e) => setName(e.target.value)}
								/>
							</li>
							<li>
								<label htmlFor="price">Price</label>
								<input
									value={price}
									type="text"
									id="price"
									name="price"
									onChange={(e) => setPrice(e.target.value)}
								/>
							</li>
							<li>
								<label htmlFor="image">Image</label>
								<input
									value={image}
									type="text"
									id="image"
									name="image"
									onChange={(e) => setImage(e.target.value)}
								/>
							</li>
							<li>
								<label htmlFor="brand">Brand</label>
								<input
									value={brand}
									type="text"
									id="brand"
									name="brand"
									onChange={(e) => setBrand(e.target.value)}
								/>
							</li>
							<li>
								<label htmlFor="category">Category</label>
								<input
									value={category}
									type="text"
									id="category"
									name="category"
									onChange={(e) =>
										setCategory(e.target.value)
									}
								/>
							</li>
							<li>
								<label htmlFor="stockCount">Stock count</label>
								<input
									value={stockCount}
									type="text"
									id="stockCount"
									name="stockCount"
									onChange={(e) =>
										setStockCount(e.target.value)
									}
								/>
							</li>
							<li>
								<label htmlFor="description">Description</label>
								<textarea
									value={description}
									type="text"
									id="description"
									name="description"
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
							</li>
							<li>
								<button
									type="submit"
									className="button primary">
									{id ? "Update" : "Create"}
								</button>
							</li>
							<li>
								<button
									onClick={() => {
										setModalVisible(false);
										setId(null);
										setName("");
										setPrice("");
										setImage("");
										setBrand("");
										setCategory("");
										setStockCount("");
										setDescription("");
									}}
									className="button">
									Back
								</button>
							</li>
						</ul>
					</form>
				</div>
			) : (
				<div></div>
			)}
			<div className="product-list">
				<table className="table">
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
							<tr key={product._id}>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.category}</td>
								<td>{product.brand}</td>
								<td>
									<button
										className="button"
										onClick={() => openModal(product)}>
										Edit
									</button>{" "}
									<button
										className="button"
										onClick={() => deleteHandler(product)}>
										Delete
									</button>
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
