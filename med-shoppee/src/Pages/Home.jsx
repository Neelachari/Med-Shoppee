import React from 'react'
import SimpleSlider from './SlickCarsol'
import SearchBar from "./Searchbar"
import Slick1 from "./slick1"
import home from "./home.css"
import Footer from './Footer'
import { Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <h1 className = "home_page" >Welcome to Home Page</h1>
      <SearchBar/>
      <SimpleSlider/>
      <Slick1/>
      <Spacer/>
      <Footer/>
    </div>
  )
}
