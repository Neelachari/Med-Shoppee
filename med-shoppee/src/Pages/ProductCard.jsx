import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const ProductCard = ({id,name,image,brand,price,category,description}) => {
  return (
    <DIV key={id}>
        
        <img width="50px" src={image} alt={name} />
        <h4>{name}</h4>
        {/* <h5>Brand:{brand}</h5> */}
        <h5>Price:₹.{price}/-</h5>
        <h6>Category:{category}</h6>
        {/* <h6>Description:{description}</h6> */}
        <button id="edit">
          <Link to={`/EditProductPage/${id}`}>Checkout</Link>
        </button>
    </DIV>
  )
}

const DIV=styled.div`
border: 1px solid gray;
padding: 5px;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
 img{
  width: 50%;
  justify-content: center;
  margin: auto;
 }
 button{
    background-color : #c98913;
   
    width: 100px;
    color: white;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 button:hover{
    background-color: #e27587;
    color: black;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 /* #del{
  background-color: red;
 } */
 /* #edit{
  background-color : #404140;
   
  
 }  */
 h3{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 h4{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 h6{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 h5{
    font-weight: 100px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
`