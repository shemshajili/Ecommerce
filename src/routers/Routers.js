import {Routes,Route,Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import SignUp from '../pages/SignUp'
import LookBook from '../pages/LookBook'
import About from '../pages/About'
import ProtectedRoute from './protectedRoute'
import Shoes from '../pages/Shoes'
import Bags from '../pages/Bags'
import Blog from '../pages/Blog'
import Story from '../pages/Story'
import Gummy from '../pages/Intro-Gummy'
import Mirror from '../pages/Intro-Mirror'


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<ProtectedRoute>
            <CheckOut/>
        </ProtectedRoute>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='lookbook' element={<LookBook/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='shoes' element={<Shoes/>}></Route>
        <Route path='bags' element={<Bags/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='story' element={<Story/>}></Route>
        <Route path='mirror' element={<Mirror/>}></Route>
        <Route path='gummy' element={<Gummy/>}></Route>
    </Routes>
};

export default Routers;
