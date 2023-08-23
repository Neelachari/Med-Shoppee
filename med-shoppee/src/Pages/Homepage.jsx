import React, { useState } from 'react'
import { SideBar } from './SideBar'
import { ProductList } from './ProductList'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

export const Homepage = () => {
  const products=useSelector((store)=> store.productReducer.products)
  const [page,setPage]=useState(1)




  return (
    <DIV>
       <div className='sideBar'>
         <SideBar/>
       </div>
       <div className='homePage'>
       <h1 style={{textAlign:"left" , marginLeft:"10px", fontWeight:"600"}}>Total Products : {products.length} </h1>
        <ProductList/>
        <div id="page">
        <button disabled={page==1} onClick={()=> setPage(page -1) }>Prev</button>
        <h4>{page}</h4>
        <button  onClick={()=> setPage(page + 1)} >Next</button>
      </div>
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
  #page{
    display: flex;
    margin: auto;
    gap: 20px;
    margin-left: 35%;
   

  }
  #page button{
    background-color: #e0793e;
    color: white;
    width: 100px;
   font-size:large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
   
  }
  #page button:hover{
    background-color: #d4760a;
    color: black;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
`