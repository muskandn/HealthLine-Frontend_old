
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/layout/Footer/Footer';
import Header from "./component/layout/Header/Header.js"
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/products/:keyword" element={<Products/>}/>
      </Routes>
      
      <Footer/>
    </Router>
    
  );
}

export default App;
