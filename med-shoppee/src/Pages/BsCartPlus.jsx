import React, { useState,useContext,useEffect } from 'react';
import AuthContextProvider, { AuthContext } from '../Context/AuthContextProvider'
import { Box, Button, Center, Divider, Flex, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Link, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveItem } from '../redux/products/action';

const BsCartPlus = ({removeFromCart,handlecart }) => {
  const {data,setdata}=useContext(AuthContext)
  const [qnt,setQnt]=useState(1)
  const dispatch=useDispatch()


  const CartItem=useSelector((store)=> store.productReducer.Cart)
  
  console.log(qnt)

var CartTotal=0
CartItem.map((e)=>{
    CartTotal+=Math.ceil(e.price)
  })

  const handleRemove = (id) => {
    console.log(id)
    dispatch(RemoveItem(id))
    
  };
  
 
  // useEffect(()=>{
  //   handleRemove()
  // },[])


  return (
    <Box maxW="800px" mx="auto" my="4" marginTop={50} >
    <Heading mb="4">Your Cart</Heading>
    <Divider mb="4" />
    {CartItem.length==0?
     <Heading>No Items in The Cart</Heading>:""}
    <SimpleGrid columns={[1, 2]} spacing="4"  width={"850px"} >
      {CartItem.map((item)=>
        <Flex key={item.id} p="4" shadow="md" borderWidth="1px" borderRadius="md">
          <Image src={item.image} alt="" boxSize="120px" objectFit="contain" />
          <Box flex="1" ml="4">
            <Text fontSize="sm" fontWeight="semibold" mb="2">{item.name}</Text>
            <Text fontSize="lg" mb="2">₹{item.price}</Text>
            <Text fontSize="lg" mb="2">{item.category}</Text>
            
            
           
          </Box>
          <Spacer />
          <Box textAlign="center" display={"flex"}   marginLeft={"25px"} height={"35px"} width={"300px"} >
            
            <Button size="sm" isDisabled={qnt==1} onClick={(e)=>setQnt(qnt-1)} >-</Button>
           <span>{qnt}</span>
            <Button size="sm" onClick={(e)=>setQnt(qnt+1)} >+</Button>
          </Box>
          <Spacer />
          <Box textAlign="right"  marginRight={"80px"}>
            <Text fontSize="lg" mb="2"></Text>
            <br />
            <br />
            <br />
            <Button size="sm" colorScheme="red"   onClick={()=> handleRemove(item.id)} >Remove</Button>
          </Box>
        </Flex>
 )}
    
    </SimpleGrid>
    <Box mt="8">
      <Flex justify="space-between">
        <Text fontSize="lg" fontWeight="semibold">Subtotal:</Text>
        <Text fontSize="lg" fontWeight="semibold">{(CartTotal)*qnt}</Text>
      </Flex>
      <Flex justify="space-between" mt="2">
        <Text fontSize="lg" fontWeight="semibold">Shipping:</Text>
        <Text fontSize="lg" fontWeight="semibold">{CartItem.length==0?"0":"₹.99"}</Text>
      </Flex>
      <Divider my="4" />
      <Flex justify="space-between">
        <Text fontSize="lg" fontWeight="semibold">Total:</Text>
        <Text fontSize="lg" fontWeight="semibold">₹.{CartItem.length==0?"0":99+(CartTotal)*qnt}</Text>
      </Flex>
      <Center mt="8">
       { 
       (CartItem.length>0)?
       <Link to="/Paymentpage">
       <Button size="lg" colorScheme="green" >Proceed to Pay</Button>
       </Link>
       :
      ""
       }
      </Center>
    </Box>
  </Box>
      
  );
};

export default BsCartPlus;