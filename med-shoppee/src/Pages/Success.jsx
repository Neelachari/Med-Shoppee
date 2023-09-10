import { useState, useEffect } from 'react';
import { Box, Text, useToast, Button, Spinner, Center, Image  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Pay_suc from "../Pages/Payment_Successful.gif"

const Success = () => {
  const [spin, setSpin]=useState(false)
  const  Navigate= useNavigate()
  const toast = useToast()
  setTimeout(()=>{
    setSpin(true)
    
    
  },2000)

  setTimeout(()=>{
    // setSpin(false)
    toast({
      title: ` Payment successful`,
      status: 'success',
      position: "top",
      duration: 1000,
      isClosable: true,
    })
    Navigate("/")
  },4000)
 
  
  return (
    <>
    <Center height={'100vh'} zIndex={5}>
    <Box >
     <Center><Text fontSize="40px" color='skyblue'>Payment Successful...</Text></Center> 
     <Center>{spin?<Image src={Pay_suc} width={"60%"} margin={"auto"} />:<Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='skyblue.200'
    color='blue.500'
    size='xl'
  />}</Center>
   <Center><Text fontSize="40px" color='skyblue' >Thank you plan your Trip agin with us...</Text></Center> 
    </Box>
    </Center>
    
    </>
   
  );
};

export default Success;
