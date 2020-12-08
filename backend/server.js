import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";
import productRoute from "./routes/productRoute";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

const app = express();
const port = 4321;

mongoose
	.connect(mongodbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.catch((error) => console.log(error.reason));

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// app.get("/api/products", (req, res) => {
// 	res.send(data.products);
// });

// app.get("/api/product/:id", (req, res) => {
// 	const productId = req.params.id;
// 	const product = data.products.find((x) => x._id === productId);
// 	if (product) {
// 		res.send(product);
// 	} else {
// 		res.status(404).send({ msg: "Product not found." });
// 	}
// });

app.listen(port, () => {
	console.log("App running. Server started at", port);
});
