import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
	productListReducer,
	productDetailsReducer,
	saveProductReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
	userRegisterReducer,
	userSigninReducer,
} from "./reducers/userReducers";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignin: { userInfo } };

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userSignin: userSigninReducer,
	userRegister: userRegisterReducer,
	saveProduct: saveProductReducer,
});

const store = createStore(
	reducer,
	initialState,
	compose(applyMiddleware(thunk))
);

export default store;
