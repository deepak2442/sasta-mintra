import Navbar from './components/navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import Footer from './components/footer';
import men_banner from './components/Assets/banner_mens.png';
import banner_kids from './components/Assets/banner_kids.png';
import banner_women from './components/Assets/banner_women.png'



function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/mens' element ={<ShopCategory category="men" banner={men_banner}/>} />
      <Route path='/womens' element ={<ShopCategory category="women" banner={banner_women} />} />
      <Route path='/kids' element ={<ShopCategory category="kid" banner={banner_kids} />} />
      <Route path='/product' element= {<Product />}>
      <Route path=':productId' element = {<Product />} />
      </Route>
      <Route path='/cart' element = {<Cart /> } />
      <Route path= '/login' element= {<LoginSignUp />} />

    </Routes>
    <Footer />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
