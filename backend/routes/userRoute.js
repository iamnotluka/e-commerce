import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.get("/createadmin", async (req, res) => {
	console.log("hitting the route");
	try {
		const user = new User({
			name: "Luka",
			email: "luka.zoric@griffithuni.edu.au",
			password: "1234",
			isAdmin: true,
		});

		const newUser = await user.save();

		res.send(newUser);
	} catch (err) {
		res.send({ msg: error.message });
	}
});

export default router;
