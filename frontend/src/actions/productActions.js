import Axios from "axios";
import axios from "axios";
import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_SAVE_FAIL,
	PRODUCT_SAVE_REQUEST,
	PRODUCT_SAVE_SUCCESS,
} from "../constants/constants";

const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST });
		const { data } = await axios.get("/api/products");
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};

const productSave = (product) => async (dispatch, getState) => {
	try {
		dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
		const {
			userSignin: { userInfo },
		} = getState();

		const { data } = await Axios.post("/api/products", product);
		dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
	} catch (err) {
		dispatch({ type: PRODUCT_SAVE_FAIL, payload: err.message });
	}
};

const detailsProduct = (productId) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
		const { data } = await axios.get("/api/product/" + productId);
		dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
	}
};

export { listProducts, detailsProduct, productSave };
