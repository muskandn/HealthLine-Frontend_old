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


const reducer=combineReducers({
    
    products: productsReducer,
    productDetails:productDetailsReducer ,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,

})

let inititalState={};

const middleware=[thunk];
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducer,
    inititalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
