import './App.css';
import Cart from './Pages/Cart/Cart';
import ContactUs from './Pages/ContactUs/ContactUs';
import DeshBoard from './Pages/DeshBoard/DeshBoard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ServicePage from './Pages/Service/Service';
import UserInfo from './Pages/UserInfo/UserInfo';
import WishList from './Pages/WishList/WishList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { createContext } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  return (
    <>
      <div>

        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path='/login' element={<Login />} />;
            <Route path='/' element={<Home />} />;
            <Route path='/productes' element={<Product />} />;
            <Route path='/service' element={<ServicePage />} />;
            <Route path='/contactus' element={<ContactUs />} />;
            <Route path='*' element={<Home />} />

            <Route path='/cart' element={<Cart />} />;
            <Route path='/wishlist' element={<WishList />} />;

            <Route path='/productdetails' element={<ProductDetails />} />;

            <Route path='/userinfo' element={<UserInfo />} />
            <Route path='/deshboard' element={<DeshBoard />} />




          </Routes>
          {/* <Footer /> */}
        </Router>


        {/* <Cart /> */}

      </div>

    </>
  );
}

export default App;
