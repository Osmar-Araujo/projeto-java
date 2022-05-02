import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  productDetailsReducer,
  productListReducer
} from "./reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducer";
import { endRegisterReducer, endListReducer } from "./reducers/endReducers";
import { payCardRegisterReducer, payCardListReducer } from "./reducers/payCardReducer";
import { orderDetailsReducer, orderCreateReducer } from "./reducers/orderReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  },
  cart: {
    cartItems: localStorage.getItem("cartItens")
      ? JSON.parse(localStorage.getItem("cartItens"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: localStorage.getItem("savePaymentMethod")
      ? JSON.parse(localStorage.getItem("savePaymentMethod"))
      : {},
  }
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  endRegister: endRegisterReducer,
  endList: endListReducer,
  payCardRegister: payCardRegisterReducer,
  payCardList: payCardListReducer,
  createOrder: orderCreateReducer,
  detailsOrder: orderDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
