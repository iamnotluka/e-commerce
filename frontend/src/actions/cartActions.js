import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/constants";
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

export { addToCart, removeFromCart };
