import React from "react"
import {Link} from "react-router-dom"
import Logo from "../Images/Project-icon.png"
import navbar from "./Navbar.css"



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
        {path: "/login", title:"Login" }    
    ]

    return(
        <>
       
        
     
        <div className = "navbar" style={{display:"flex", width:"80%", margin:"auto", justifyContent:"space-between", textDecoration:"none", marginTop:"10px",  }} ><a href="/"><img src={Logo} alt="Icon" width="100px" /></a>
            {links.map((e)=>{
                return  (
                    <>
                    
                    
                    <Link key={e.path} to={e.path} >{e.title}</Link>
                    
                   
                   
                    </>
                )
            })}
        </div>
        </>
    )
}

export { Navbar }