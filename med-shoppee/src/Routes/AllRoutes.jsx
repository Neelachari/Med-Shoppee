import React from 'react'
import {Routes,Route} from "react-router-dom"
// import About from '../Pages/About'
// import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
// import LocationSearch from '../Pages/Loaction'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import SearchBar from '../Pages/Searchbar'
import { SignUp } from '../Pages/SignUp'
import { PrivateRoute } from './PrivateRoute'
import { Admin } from '../Pages/Admin'
import Footer from '../Pages/Footer'
import BsCartPlus  from '../Pages/BsCartPlus'
import PaymentPage from '../Pages/Paymnet'
import { Homepage } from '../Pages/Homepage'
import { Singlepage } from '../Pages/Singlepage'
import Success from '../Pages/Success'





const AllRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
        <Route path="/Login" element={<Login/>}></Route>
        {/* <Route path="/contact" element={<Contact/>}></Route> */}
        <Route path="/products" element={<Homepage/>}></Route>
        <Route path="/products/:id" element={<Products/>}></Route>
        <Route path="/Singlepage/:id" element={<Singlepage/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SearchBar" element={<SearchBar/>}></Route> 
        {/* <Route path="/LocationSearch" element={<LocationSearch/>}></Route> */}
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/Footer" element={<Footer/>}></Route>
        <Route path="/BsCartPlus" element={<PrivateRoute><BsCartPlus/></PrivateRoute>}></Route>
        <Route path="/PaymentPage" element={<PaymentPage/>}></Route>
        <Route path="/Success" element={<Success/>}></Route>
     
    </Routes>
    
    )
}

export {AllRoutes}

//<PrivateRoute></PrivateRoute>