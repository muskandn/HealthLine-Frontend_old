import {combineReducers, applyMiddleware,compose} from "redux"
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension";
import { productsReducer } from "./reducers/productsReducer";
import { productDetailsReducer } from "./reducers/productsReducer"; 
import { userReducer,
        profileReducer,
        forgotPasswordReducer,
    } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer=combineReducers({
    
    products: productsReducer,
    productDetails:productDetailsReducer ,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart:cartReducer

})

let inititalState={
    //means there exits any data in local storage then load it in initial state else empty array
    //cart:{
        cartitems: localStorage.getItem("cartitems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[],
        shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
    //}
};

const middleware=[thunk];
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducer,
    inititalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
