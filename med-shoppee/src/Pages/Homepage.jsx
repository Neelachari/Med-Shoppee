import React from 'react'
import { SideBar } from './SideBar'
import { ProductList } from './ProductList'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

export const Homepage = () => {
  const products=useSelector((store)=> store.productReducer.products)




  return (
    <DIV>
       <div className='sideBar'>
         <SideBar/>
       </div>
       <div className='homePage'>
       <h1 style={{textAlign:"left" , marginLeft:"10px", fontWeight:"600"}}>Total Products : {products.length} </h1>
        <ProductList/>
       </div>
    </DIV>
  )
}


const DIV=styled.div`
display: flex;

  .sideBar{
    width: 15%;

  }
  .homePage{
    width: 85%;
  }
`