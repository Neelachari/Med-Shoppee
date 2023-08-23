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
      
    
      
    </DIV>
  )
}

const DIV=styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  padding: 10px;
  
 
  `
