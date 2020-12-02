import axios from "axios";
import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/constants";

const listProducts = () => async (dispatch) => {
	try {
		dispatch(PRODUCT_LIST_REQUEST);
		await axios.get("/api/products").then((data) => {
			dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
		});
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};

export { listProducts };
