import './App.css'
import Home from './pages/home/home'
import QuickView from './pages/QuickView/Quickview'
import Vendor from './pages/Vendors/Vendor'
import Cart from './pages/Cart/cart'
import Checkout from './pages/Checkout/checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Wishlist from './pages/home/Wishlist'
import Comparable from './pages/home/Comparable'
import Login from './pages/home/Login'
import Signup from './pages/home/Signup'
// import FakeProduct from './pages/fakeProduct/fakeProduct'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from './context/WishlistContext'
import { ComparableProvider } from './context/ComparableContext'
import { BlogPage } from './pages/Blog/BlogPage'
function App() {

  return (
    <>
    <CartProvider>
      <WishlistProvider>
         <ComparableProvider>
         <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/comparable' element={<Comparable/>}/>
          <Route path='/Vendors' element={<Vendor/>}/>
          <Route path='/Product' element={<QuickView/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/BlogPage' element={<BlogPage/>}/>
        </Routes>
       </Router>
         </ComparableProvider>
      </WishlistProvider>
      </CartProvider>
    </>
  )
}

export default App
