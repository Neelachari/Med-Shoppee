import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Badge } from '@chakra-ui/react'

export const ProductCard = ({id,name,image,rating,price,category,description}) => {
  return (
    <DIV key={id}>
        
        <img width="50px" src={image} alt={name} />
        <h4><span>Name:</span>{name}</h4>
        {/* <h5>Brand:{brand}</h5> */}
        <h5><Badge variant='solid' colorScheme='green' w="15">
        {rating} <span>★</span> 
  </Badge></h5>
        <h5><span>Price:₹.</span>{price}/-</h5>
        <h6><span>Category</span>:{category}</h6>
        {/* <h6>Description:{description}</h6> */}
        <button id="edit">
          <Link to={`/Singlepage/${id}`}>Checkout</Link>
        </button>
    </DIV>
  )
}

const DIV=styled.div`
/* border: 1px solid gray; */
padding: 5px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
 img{
  border-radius: 10px;
  height: 200px;
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
    background-color: #f09f27;
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
 span{
  font-weight: 600;
 }
`