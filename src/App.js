import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoTFound from './pages/notfound/NotFound';
import MyState from './contex/data/myState';
import Login from './pages/registraton/Login';
import Signup from './pages/registraton/Signup';
import ProductInfo from './pages/product info/ProductInfo';
import UpdateProduct from './pages/admin/Parges/UpdateProduct';
import AddProduct from './pages/admin/Parges/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import Allproducts from './pages/allproducts/Allproducts';


function App() {
  return (
    <MyState> 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="allproducts" element={<Allproducts />} />
        <Route path="/order" element={  
        <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
         <ProtectedRoutesForAdmin>
          <Dashboard />
          </ProtectedRoutesForAdmin>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/productinfo/:id' element={<ProductInfo/>} />
        <Route path="/addproduct" element={ 
        <ProtectedRoutesForAdmin>
          <AddProduct />
          </ProtectedRoutesForAdmin>} />
        <Route path="/updateProduct" element={<ProtectedRoutesForAdmin>
          <UpdateProduct />
          </ProtectedRoutesForAdmin>} />

        <Route path="/*" element={<NoTFound/>} />
      </Routes>
      < ToastContainer/>
    </Router>
     </MyState>

  )
}

export default App;
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'kd818552@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}