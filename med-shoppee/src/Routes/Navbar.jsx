import React, {useContext } from 'react';
import {Link} from "react-router-dom"
import Logo from "../Images/Project-icon.png"
import navbar from "./Navbar.css"
import { Box } from "@chakra-ui/react"
import {BsCartPlus} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"
import { AuthContext } from '../Context/AuthContextProvider'
import Login from '../Pages/Login';


function Navbar() {
    


    const {isAuth,setIsAuth}=useContext(AuthContext)

    

console.log(isAuth)


    
    const links=[
       
        {path: "/", title:"MEDICINES" },
        {path: "/products", title:"Products" },
        {path: "https://www.1mg.com/labs?utm_source=1mg&utm_medium=jewel&utm_campaign=labsgrowth", title:"LAB TESTS" },
        {path: "https://www.1mg.com/online-doctor-consultation", title:"CONSULT" },
        {path: "https://www.1mg.com/online-doctor-consultation", title:"DOCTORS" },
        {path: "https://www.1mg.com/coronavirus-covid19", title:"COVID-19" },
        {path: "https://www.1mg.com/ayurveda", title:"AYURVEDA" },
        {path: "https://www.1mg.com/subscription-plan/subscriptions", title:"CARE PLAN" },
        {path: "/login",   title:`${isAuth?"👨‍🔬":"Login|Signup"}` },
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

