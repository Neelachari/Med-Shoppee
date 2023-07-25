import React from 'react'
import SimpleSlider from './SlickCarsol'
import SearchBar from "./Searchbar"
import Slick1 from "./slick1"
import Slick2 from "./slick2"
import Slick3 from "./slick3"
import Slick4 from "./slick4"
import home from "./home.css"
import Footer from './Footer'
import { Spacer } from '@chakra-ui/react'
import Navbar2 from '../Routes/Navbar2'

export default function Home() {
  return (
    <div>
      <h1 className = "home_page" >Welcome to Home Page</h1>
     
      <SearchBar/>
      <Navbar2/>
      <SimpleSlider/>
      <Slick1/>
      <Slick2/>
      <Slick3/>
      <Slick4/>
      <Footer/>
    </div>
  )
}
