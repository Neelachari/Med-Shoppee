import React, { useEffect, useState } from 'react'
import { SideBar } from './SideBar'
import { ProductList } from './ProductList'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from './Loading'
import { getProducts } from '../redux/products/action'
import { useSearchParams } from 'react-router-dom'

export const Homepage = () => {
  const [searchParms,setSearchParms]=useSearchParams()
  const products=useSelector((store)=> store.productReducer.products)
  const [page,setPage]=useState(1)
  const isLoading=useSelector((store)=> store.productReducer.isLoading)
  const disptch=useDispatch()
 
 
  

console.log(products)



let obj={
  params: {
    category:searchParms.getAll('category'),
    gender:searchParms.getAll('gender'),
    _sort:searchParms.get("order") && "price",
    _order:searchParms.get("order"),

    _page:page
   

  }

}




useEffect(()=>{
  
  // setSearchParms(params)
  disptch(getProducts(obj))
  
  },[page])


  return (
    <DIV>
       <div className='sideBar'>
         <SideBar/>
       </div>
       <div className='homePage'>
       {/* <h1 style={{textAlign:"left" , marginLeft:"10px", fontWeight:"600"}}>Total Products : {products.length} </h1> */}
       {isLoading? <Loading/>:"" }
       {products? <ProductList/> :<Loading/>}
        <div id="page">
        <button disabled={page==1} onClick={()=> setPage(page -1) }>Prev</button>
        <h4>{page}</h4>
        <button disabled={page==4} onClick={()=> setPage(page + 1)} >Next</button>
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