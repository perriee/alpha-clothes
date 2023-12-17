import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Login from './Pages/Login';
import { Register } from './Pages/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<HomeCategory category="shop" />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
