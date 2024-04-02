import Navbar from './components/navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/mens' element ={<ShopCategory category="men"/>} />
      <Route path='/womens' element ={<ShopCategory category="women" />} />
      <Route path='/kids' element ={<ShopCategory category="kid" />} />
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
