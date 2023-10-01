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
import Fav from '../pages/Fav'
import Story from '../pages/Story'
import Gummy from '../pages/Intro-Gummy'
import Mirror from '../pages/Intro-Mirror'

import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'
import Dashboard from '../admin/Dashboard'
import Users from '../admin/Users'
import ForgotPassword from '../pages/ForgotPassword'


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='fav' element={<Fav/>}/>
        <Route path='bags' element={<Bags/>}/>
        <Route path='shoes' element={<Shoes/>}/>

        <Route path='/*' element={<ProtectedRoute/>}>
            <Route path='checkout' element={<CheckOut/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='dashboard/all-products' element={<AllProducts/>}/>
            <Route path='dashboard/add-product' element={<AddProducts/>}/>
            <Route path='dashboard/users' element={<Users/>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='lookbook' element={<LookBook/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='shoes/:id' element={<ProductDetails/>}></Route>
        <Route path='bags/:id' element={<ProductDetails/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='story' element={<Story/>}></Route>
        <Route path='mirror' element={<Mirror/>}></Route>
        <Route path='gummy' element={<Gummy/>}></Route>
        <Route path='/reset' element={<ForgotPassword/>}></Route>

    </Routes>
};

export default Routers;
