import express from "express";
import Product from "../models/productModel";

const router = express.Router();

router.post("/", async (req, res) => {
	console.log("Product posting");
	console.log("req.body", req.body);
	const product = new Product({
		name: req.body.name,
		price: req.body.price,
		image: req.body.image,
		brand: req.body.brand,
		category: req.body.category,
		stockCount: req.body.stockCount,
		description: req.body.description,
	});

	const newProduct = await product.save();
	if (newProduct) {
		return res
			.status(201)
			.send({ message: "New Product Created", data: newProduct });
	}
	return res
		.status(500)
		.send({ message: "Error while Creating the product" });
});

router.get("/", async (req, res) => {
	console.log("Returning all products.");
	const products = await Product.find({});
	res.send(products);
});

export default router;