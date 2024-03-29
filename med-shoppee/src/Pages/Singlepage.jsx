import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import slick1 from "./slick1"
import { styled } from 'styled-components'
import { Badge, useToast } from '@chakra-ui/react'
import Slick6 from "./Slick6"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/products/action'
import { BsDatabaseAdd } from 'react-icons/bs'
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory'
import { AuthContext } from '../Context/AuthContextProvider'

export const Singlepage = () => {
    const {id}=useParams()
    const [data,setdata]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {isAuth,setIsAuth}=useContext(AuthContext)
    const toast = useToast();

    const Data=useSelector((store)=>store.productReducer.Cart)
  

    useEffect(()=>{
       axios.get(`https://deployeement-server.onrender.com/products/${id}`)

       
       .then((res)=> setdata(res.data))
    },[])


    const handleAddtoCart = () => {
      if (isAuth == true) {
        console.log(isAuth);
        let flag = false;
        Data.forEach((el) => {
          if (el.id === data.id) {
            flag = true;
          }
        });
        if (flag) {
          toast({
            title: `🛒 Product Already in the Cart`,
            position: "top",
            status: "warning",
            isClosable: true,
          });
        } else {
          toast({
            title: `✅ Product Added to Cart`,
            position: "top",
            status: "success",
            isClosable: true,
          });
          dispatch(addToCart(data));
          navigate("/BsCartPlus");
        }
    
       
      } else {
        toast({
          title: `🚫 User not authenticated. Please log in.`,
          position: "top",
          status: "error",
          isClosable: true,
        });
        navigate("/Login");
        // Redirect to the login page or handle authentication accordingly
        // Example: navigate("/login");
      }
    };

  return (
    <DIV>
       <div id="container">
         <div id="img">
           <img  src={data.image} alt="" />
         </div>
         <div id="details">
        <h4>{data.name}</h4>
        {/* <h5>Brand:{brand}</h5> */}
        <h5><span>Price:₹.</span>{data.price}/-</h5>
       <Badge variant='solid' colorScheme='green' w="80px" h="30px" fontSize="22px">
        {data.rating} <span>★</span> 
  </Badge>
        <h6><span>Category</span>:{data.category}</h6>
        <p><span>Description</span>:{data.description}</p>
        <button id="button" onClick={handleAddtoCart}>
         ADD TO CART
        </button>
         </div>
       </div>

       <div id="pardetail">
        <p><h1>Information about {data.name}</h1> <br/>
       {data.name} Capsule contains essential vitamins and minerals that help in maintaining healthy hair, skin, and nails. The capsules help to strengthen the hair roots and reduce hair fall. They also aid in nourishing the skin and strengthening the nails<br/>

<br/>
<h1>Key Ingredients:</h1>
<br/>
Collagen, Biotin, Zinc, Iron, Manganese, Vitamin B1, Vitamin B2, Vitamin B3, Folic Acid, Vitamin B5, Vitamin B6, Vitamin B12, Choline, Inositol, Yeast (Dried yeast powder), Lecithin, Cupric Sulphate, DL-Methionine, and L-Cysteine

<br/>
<br />
<h1>Key Benefits:</h1>
<li>Supports the healthy growth of hair and helps in reducing hair fall</li>
<li>Helps in making the hair strong and lustrous</li>
<li>Provides essential vitamins, minerals, and amino acids required for healthy hair and skin</li>
<li>May reduce the appearance of wrinkles and has anti-ageing properties</li>
<li>Rejuvenates the skin cells and makes the skin glowing and radiant</li>
<li>Helps in strengthening brittle nails</li>




<br/>
<h1>Good to Know:</h1><br />
With Biotin supplements, it is recommended to drink ample amounts of water since biotin is a water-soluble vitamin
<br />
<br/>
<h1>Effects of Deficiency:</h1>
<li>Hair fall</li>
<li>Dull skin </li>
<li>Brittle nails </li>

<br />
<h1>Product Form: {data.name}</h1>
<br />
<h1>Directions for Use:</h1>
1 capsule per day or as directed by the physician
<br/>
<br/>
<h1>Safety Information:</h1>
<li>Read the label carefully before use</li>
<li>Keep away from the children</li>
<li>Do not exceed the recommended dosage</li>
<li>Keep the container tightly closed</li>
<li>Do not use it if the seal is broken</li>
<li>Store in a dry and dark place</li>
<li>Store at a temperature not exceeding 25℃</li>

<br/>
<h1>Quick Tips:</h1>
Include vegetables and fruits in the diet and drink lots of water for added benefits
</p>
       </div>
       <div>
       <Slick6/>
       </div>
    </DIV>
  )
}

const DIV=styled.div`
    #container{
    display: flex;
    margin: auto;
    padding: 5%;
   
    }
    #img{
        width: 35%;
    }
    #img img{
    width: 100%;
    border: 1px solid gray;

    }
    #details{
    width: 60%;
    padding: 5px;
    /* border: 1px solid gray; */
    }
    #details h4{
        font-size:26px
    }
    #details h5{
        font-size:26px
    }
    #details h6{
        font-size:26px
    }
    #details p{
        font-size: 22px;
    }
    #pardetail{
        width: 90%;
        margin: auto;
        text-align: left;
    }
    #pardetail h1{
        font-weight:700;
        
    }
    #pardetail Badge{
        font-weight:700
    }
    #button{
    margin-top: 5%;
    background-color : #c98913;
    height: 15%;
    width: 50%;
    color: white;
    border-radius: 15px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 #button:hover{
    background-color: #f09f27;
    color: black;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 span{
    font-weight: 600;
    
 }
 @media (max-width: 768px) {
  #container{
    display: flex;
    margin: auto;
    padding: 20px;
    text-align: left;
    }
    #img{
        width: 35%;
    }
    #img img{
    width: 100%;
    border: 1px solid gray;

    }
    #details{
    width: 60%;
    padding: 5px;
    /* border: 1px solid gray; */
    }
    #details h4{
        font-size:22px
    }
    #details h5{
        font-size:22px
    }
    #details h6{
        font-size:22px
    }
    #details p{
        font-size: 18px;
    }
    #pardetail{
        width: 90%;
        margin: auto;
        text-align: left;
    }
    #pardetail h1{
        font-weight:700;
        
    }
    #pardetail Badge{
        font-weight:700
    }
    #button{
    margin-top: 5%;
    background-color : #c98913;
    height: 15%;
    width: 50%;
    color: white;
    font-size: small;
    border-radius: 15px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 #button:hover{
    background-color: #f09f27;
    color: black;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 span{
    font-weight: 600;
    
 }
}
@media (max-width: 550px) {
  #container{
    display: flex;
    margin: auto;
    padding: 20px;
    text-align: left;
    }
    #img{
        width: 35%;
    }
    #img img{
    width: 100%;
    border: 1px solid gray;

    }
    #details{
    width: 60%;
    padding: 5px;
    /* border: 1px solid gray; */
    }
    #details h4{
        font-size:18px
    }
    #details h5{
        font-size:18px
    }
    #details h6{
        font-size:18px
    }
    #details p{
        font-size: 16px;
    }
    #pardetail{
        width: 90%;
        margin: auto;
        text-align: left;
    }
    #pardetail h1{
        font-weight:700;
        
    }
    #pardetail Badge{
        font-weight:700
    }
    #button{
    margin-top: 5%;
    background-color : #c98913;
    height: 15%;
    width: 50%;
    color: white;
    font-size: xx-small;
    border-radius: 15px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 #button:hover{
    background-color: #f09f27;
    color: black;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 span{
    font-weight: 600;
    
 }
}
`
