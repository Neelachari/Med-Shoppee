import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/products/action'
import { ProductCard } from './ProductCard'
import { styled } from 'styled-components'
import { useSearchParams } from 'react-router-dom'

export const ProductList = () => {
  const [searchParms]=useSearchParams()
  const disptch=useDispatch()
  const products=useSelector((store)=> store.productReducer.products)
  const [page,setPage]=useState(1)

  console.log(searchParms.getAll('category'))
  console.log(searchParms.getAll('gender'));

  let obj={
    params: {
      category:searchParms.getAll('category'),
      gender:searchParms.getAll('gender'),
      _sort:searchParms.get("order") && "price",
      _order:searchParms.get("order"),
     
  
    }

 }

  
 
   useEffect(()=>{
   disptch(getProducts(obj))

   },[searchParms])



  return (
    <DIV>
   
      {
        
        products.length>0 && products.map((e)=>{
  
          return <ProductCard key={e.id} {...e}/>
        }  )
      }
    
      <div id="page">
        <button disabled={page==1} onClick={()=> setPage(page -1) }>Prev</button>
        <h4>{page}</h4>
        <button  onClick={()=> setPage(page + 1)} >Next</button>
      </div>
    </DIV>
  )
}

const DIV=styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
  padding: 10px;
  
  #page{
    display: flex;
    margin: auto;
    gap: 20px;
    margin-right: -140%;

  }
  #page button{
    background-color: #e03e59;
    color: white;
    width: 100px;
   font-size:large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
   
  }
  #page button:hover{
    background-color: #e27587;
    color: black;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
  `
