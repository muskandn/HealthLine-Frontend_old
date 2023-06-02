
import './App.css';
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import {useDispatch,useSelector} from 'react-redux'
import store from "./store";
import { loadUser } from "./actions/userAction";
import Home from './component/Home/Home';
import Footer from './component/layout/Footer/Footer';
import Header from "./component/layout/Header/Header.js"
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './component/User/LoginSignUp';
import UserOptions from "./component/layout/Header/UserOptions.js"
import Profile from "./component/User/Profile.js"
import UpdatePassword from "./component/User/UpdatePassword.js"
import ForgotPassword from './component/User/ForgotPassword.js';
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import ProtectedRoute from './component/Route/ProtectedRoute';
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"
import UpdateProfile from "./component/User/UpdateProfile.js";
import axios from 'axios';
import Payment from "./component/Cart/Payment.js"
function App() {


    const { isAuthenticated, user } = useSelector((state) => state.user);

    const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }


   useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

   getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header/>

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>

        


        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/products/:keyword" element={<Products/>}/>

        <Route path="/login" element={<LoginSignUp/>} />


        <Route path="/account" element={isAuthenticated && <Profile/>}/>
        <Route path="/me/update" element={isAuthenticated && <UpdateProfile/>}/>
        <Route path="/password/update" element={isAuthenticated && <UpdatePassword/>}/>
        
        <Route path="/password/forgot" element={<ForgotPassword/>}/>
        <Route path="/password/reset/:token" element={<ResetPassword/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/login/shipping" element={isAuthenticated && <Shipping/>}/>       
        <Route path="/order/confirm" element={isAuthenticated && <ConfirmOrder/>}/>
        <Route path="/process/payment" element={isAuthenticated && <Payment/>}/> 









         {/* <ProtectedRoute exact path="/account" component={Profile} /> */}
      </Routes>

      
      <Footer/>
    </Router>
    
  );
}

export default App;
