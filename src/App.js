
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/layout/Footer/Footer';
import Header from "./component/layout/Header/Header.js"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
      
      <Footer/>
    </Router>
    
  );
}

export default App;
