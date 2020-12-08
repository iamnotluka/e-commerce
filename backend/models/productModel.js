import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	brand: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
	stockCount: { type: Number, required: true },
	description: { type: String, required: true },
	rating: { type: Number, required: false },
	numReviews: { type: Number, required: false },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
