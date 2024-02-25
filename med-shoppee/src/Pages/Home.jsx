import React, { useEffect, useState } from 'react'
import SimpleSlider from './SlickCarsol'
import SearchBar from "./Searchbar"
import Slick1 from "./slick1"
import Slick2 from "./slick2"
import Slick3 from "./slick3"
import Slick4 from "./slick4"
import Slick5 from "./Slick5"
import home from "./home.css"
import Footer from './Footer'
import Navbar2 from '../Routes/Navbar2'




export default function Home() {
 



  return (
      <div>
      <SearchBar/>
      <Navbar2/>
      <SimpleSlider/>
      <Slick1/>
      <Slick2/>
      <Slick3/>
      <Slick4/>
      <Slick5/>
    </div>
    
  )
}
