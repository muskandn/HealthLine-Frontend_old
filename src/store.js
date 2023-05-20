import {combineReducers, applyMiddleware} from "redux"
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension";
import { productsReducer } from "./reducers/productsReducer";
import { productDetailsReducer } from "./reducers/productsReducer"; 


const reducer=combineReducers({
    products: productsReducer,
    productDetails:productDetailsReducer

})

let inititalState={};

const middleware=[thunk];

const store= createStore(reducer,
    inititalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
