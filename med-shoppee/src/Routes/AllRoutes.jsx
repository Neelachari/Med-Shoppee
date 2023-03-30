import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import LocationSearch from '../Pages/Loaction'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import SearchBar from '../Pages/Searchbar'
import { SignUp } from '../Pages/SignUp'
import { PrivateRoute } from './PrivateRoute'



const AllRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products" element={
            <PrivateRoute>
                <Products/>
            </PrivateRoute> 
        }></Route>
        <Route path="/products/:id" element={<Products/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SearchBar" element={<SearchBar/>}></Route> 
        <Route path="/LocationSearch" element={<LocationSearch/>}></Route>
        
    </Routes>
    
    )
}

export {AllRoutes}