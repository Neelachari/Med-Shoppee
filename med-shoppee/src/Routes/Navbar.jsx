import React, {useContext } from 'react';
import {Link} from "react-router-dom"
import Logo from "../Images/Project-icon.png"
import navbar from "./Navbar.css"
import { Box } from "@chakra-ui/react"
import {BsCartPlus} from "react-icons/bs"
import { AuthContext } from '../Context/AuthContextProvider'
import Login from '../Pages/Login';

function Navbar() {
    


   
    
    const links=[
       
        {path: "/", title:"MEDICINES" },
        {path: "/products", title:"Products" },
        {path: "/about", title:"LAB TESTS" },
        {path: "/contact", title:"CONSULT" },
        {path: "/contact", title:"DOCTORS" },
        {path: "/contact", title:"COVID-19" },
        {path: "/contact", title:"AYURVEDA" },
        {path: "/contact", title:"CARE PLAN" },
        {path: "/login",   title:"Login | Signup" },
        {path: "/BsCartPlus", title:<BsCartPlus size="20px"/> },

    ]

    

   

    return(
        <>
       
        
     
        <Box className = "navbar" style={{display:"flex", margin:"auto", justifyContent:"space-between", textDecoration:"none",  }} ><a href="/"><img src={Logo} alt="Icon" width="100px" /></a>
            {links.map((e)=>{
                return  (
                    <>
                    
                    
                    
                    <Link key={e.path} to={e.path} >{e.title}</Link>
                    
                   
                   
                    
                    
                    
                    </>

                )
            })}
        </Box>
        </>
    )
}

export { Navbar }

