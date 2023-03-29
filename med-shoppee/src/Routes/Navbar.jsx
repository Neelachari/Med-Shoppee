import React from "react"
import {Link} from "react-router-dom"



function Navbar() {

   
    const links=[
       
        {path: "/", title:"Medicines" },
        {path: "/about", title:"About" },
        {path: "/contact", title:"Contact" },
        {path: "/products", title:"Products" },
        {path: "/login", title:"Login" }    
    ]

    return(
        <div className = "navbar" style={{display:"flex", width:"80%", margin:"auto", justifyContent:"space-evenly", textDecoration:"none", marginTop:"10px" }} >
            {links.map((e)=>{
                return  (
                    <>
                    
                    <Link key={e.path} to={e.path} >{e.title}</Link>
                    </>
                )
            })}
        </div>
    )
}

export { Navbar }