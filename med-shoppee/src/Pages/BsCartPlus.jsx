import React, { useState,useContext,useEffect } from 'react';
import AuthContextProvider, { AuthContext } from '../Context/AuthContextProvider'
import { Box, Button, Center, Divider, Flex, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Link, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BsCartPlus = ({removeFromCart,handlecart }) => {
  const {data,setdata}=useContext(AuthContext)
  const [qnt,setQnt]=useState(1)
//console.log(data)

var CartTotal=0
  data.map((e)=>{
    CartTotal+=Math.ceil(e.price)
  })

  const handleRemove = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setdata(filteredData);
  };
  
 
  useEffect(()=>{
    handleRemove()
  },[])


  return (
    <Box maxW="800px" mx="auto" my="4" marginTop={50}>
    <Heading mb="4">Your Cart</Heading>
    <Divider mb="4" />
    {data.length==0?
     <Heading>No Items in The Cart</Heading>:""}
    <SimpleGrid columns={[1, 2]} spacing="4">
      {data.map((item)=>
        <Flex key={item.id} p="4" shadow="md" borderWidth="1px" borderRadius="md">
          <Image src={item.image} alt="" boxSize="120px" objectFit="contain" />
          <Box flex="1" ml="4">
            <Text fontSize="xl" fontWeight="semibold" mb="2">{item.title}</Text>
            <Text fontSize="lg" mb="2">${item.price}</Text>
            
            <Text>description</Text>
          </Box>
          <Spacer />
          <Box textAlign="center" >
            <Text fontSize="lg" mb="2">quantity</Text>
            <Button size="sm" isDisabled={qnt==1} onClick={(e)=>setQnt(qnt-1)} >-</Button>
            <Button size="sm" isDisabled={true} >{qnt}</Button>
            <Button size="sm" onClick={(e)=>setQnt(qnt+1)} >+</Button>
          </Box>
          <Spacer />
          <Box textAlign="right">
            <Text fontSize="lg" mb="2">200</Text>
            <Button size="sm" colorScheme="red"   onClick={()=>handleRemove(item.id)} >Remove</Button>
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
        <Text fontSize="lg" fontWeight="semibold">{data.length==0?"0":"$99"}</Text>
      </Flex>
      <Divider my="4" />
      <Flex justify="space-between">
        <Text fontSize="lg" fontWeight="semibold">Total:</Text>
        <Text fontSize="lg" fontWeight="semibold">{data.length==0?"0":99+(CartTotal)*qnt}</Text>
      </Flex>
      <Center mt="8">
       { 
       (data.length>0)?
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