import{BrowserRouter, Routes, Route} from 'react-router-dom' 
import './App.css';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Serviceform from './pages/Serviceform';
import Productform from './pages/Productform';
import Employeeregisterform from './pages/Employeeregisterform';
import Viewproduct from './components/Viewproduct';
import Hair from './components/Hair';
import Userhomepage from './pages/Userhomepage';
import Employeehomepage from './pages/Employeehomepage';
import Productdetails from './pages/Productdetails';
import Editproduct from './pages/Editproduct';
import Userorder from './pages/Userorder';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout/Checkout';



export default  function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>


    <Route path ='/' element={<Main/>} />
    <Route path ='/login' element={<Login/>} />
    <Route path ='/register' element={<Register/>} />
    <Route path ='/serviceform' element={<Serviceform/>}/>
    <Route path ='/productform' element={<Productform/>}/>
    <Route path ='/employeeregister' element={<Employeeregisterform/>}/>
    <Route path ='/serviceview' element={<Hair/>}/>
    <Route path ='/userhomepage' element={<Userhomepage/>}/>
    <Route path ='/employeehomepage' element={<Employeehomepage/>}/>
    <Route path ='/productview' element={<Viewproduct/>}/>
    <Route path ='/productdetails/:id' element={<Productdetails/>}/>
    <Route path ='/editproduct/:id' element={<Editproduct/>}/>
    <Route path ='/myorders' element={<Userorder/>}/>
    <Route path ='/cart' element={<Cart/>}/>
    <Route path ='/payment' element={<Checkout/>}/>
   
    
    
    </Routes>
    </BrowserRouter></>
  )
}
