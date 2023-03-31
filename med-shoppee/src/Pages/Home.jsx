import React from 'react'
import SimpleSlider from './SlickCarsol'
import SearchBar from "./Searchbar"



export default function Home() {
  return (
    <div>
      <h1 className = "home_page" >Welcome to Home Page</h1>
      <SearchBar/>
      <SimpleSlider/>
      
    </div>
  )
}
