import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_SHIPPING,
	CART_SAVE_PAYMENT,
} from "../constants/constants";
import Cookie from "js-cookie";
const { default: Axios } = require("axios");

const addToCart = (productId, qty) => async (dispatch, getState) => {
	try {
		const { data } = await Axios.get("/api/products/" + productId);

		const payloadProduct = {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			stockCount: data.stockCount,
			qty: parseInt(qty),
		};

		const dispatchProductObj = {
			type: CART_ADD_ITEM,
			payload: payloadProduct,
		};
		dispatch(dispatchProductObj);
		const {
			cart: { cartItems },
		} = getState();
		Cookie.set("cartItems", JSON.stringify(cartItems));
	} catch (err) {
		console.log(err);
	}
};

const removeFromCart = (productId) => (dispatch, getState) => {
	dispatch({ type: CART_REMOVE_ITEM, payload: productId });
};

const saveShipping = (data) => (dispatch) => {
	dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};

const savePayment = (data) => (dispatch) => {
	dispatch({ type: CART_SAVE_PAYMENT, payload: data });
};

export { addToCart, removeFromCart, saveShipping, savePayment };
