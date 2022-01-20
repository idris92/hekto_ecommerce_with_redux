import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopGrid from './pages/ShopGrid';
import ShopList from './pages/ShopList';
import ShopLeft from './pages/ShopLeft';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer';
import OrderCompleted from './pages/OrderCompleted';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import {userContext} from './context/UserContext';
import Homepage from './pages/Home/Homepage'
import './App.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function App() {
  const [jwt, setJwt]= useState('');
  const [userId, setUserId]= useState('');
  const [cartProduct, setCartProduct]= useState([]);
  const [cart, setCart]= useState(0);
  const [glocalInCart, setglocalInCart]= useState(0);
  const [glocalPrice, setglocalPrice]= useState(0);
  const [cartTotal, setCartTotal]= useState(0);
  const [pageSize, setPageSize]= useState(2);
  const [payload, setPayload]= useState({});
  const [filterName, setFilterName]= useState('');
  const [brandId, setBrandId] = useState([]);
  const [filterId, setFilterId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filterPrice, setFilterPrice] = useState({
    upperbound:"0",
    lowerbound:'0',
  });
  const [updatedFavourite, setUpdatedFavourite]= useState({});
  return (
    <div className="App">
    <userContext.Provider value={{filterPrice, setFilterPrice,searchName, setSearchName, filterName, setFilterName,pageSize, setPageSize,filterId, setFilterId,brandId, setBrandId, glocalPrice, setglocalPrice,glocalInCart, setglocalInCart,jwt, setJwt, userId, setUserId, payload, setPayload,updatedFavourite, setUpdatedFavourite, cart, setCart, cartTotal, setCartTotal, cartProduct, setCartProduct}}>
      
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/grid" element={<ShopGrid/>}/>
            <Route path="/list" element={<ShopList/>}/>
            <Route path="/left" element={<ShopLeft/>}/>
            <Route path="/details/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
            <Route path="/complete" element={<OrderCompleted/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        
    </userContext.Provider>
    </div>
  );
}

export default App;
