// import { Heading, Text, Box, Flex, Stack, Button, useToast, CircularProgress } from "@chakra-ui/react";
// // import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from "react";
// import { Navigate } from "react-router-dom";

// function PaymentPage() {
//     const [cardholderName, setCardholderName] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [expirationDate, setExpirationDate] = useState("");
//     const [cvv, setCvv] = useState("");
//     const [loading, setLoading] = useState(false);

//     const toast=useToast()
  
//     const handleSubmit = () => {
//       if (!cardholderName&& !cardNumber && !expirationDate&& !cvv) {
//        // toast("Please fill in all fields");
//         toast({
//           title: `👀 Please fill in all fields to continue...`,
//           position: "top",
//           status:"warning",
//           isClosable: true,
//         })
//         return;
//       }
//       else if(!cardholderName|| !cardNumber || !expirationDate|| !cvv){
//         toast({
//           title: `👀 Please fill the required field to continue...`,
//           position: "top",
//           status:"warning",
//           isClosable: true,
//         })
//         return;
//       }
//       else {
        
//         setTimeout(() => {
          
//           setLoading(true);
        
//           <CircularProgress isIndeterminate color='orange.300' />
          
//            //alert("Payment successful!")
          
//         }, 3000);
//         setLoading(false);
//       }
  
      
      
//       // simulate payment process
      
//     };

    
//   if(loading){
//     //toast.success("Payment successful!");
//     toast({
//       title: `✅ Payment successful...`,
//       position: "top",
//       status:"success",
//       isClosable: true,
//     })
//     return  <Navigate to="/" />
//   }
   


//   return (
//     <Flex direction="column" alignItems="center" justifyContent="center" h="100vh">
//       <Box maxW="lg" px={8} py={12} borderWidth={1} borderRadius={8} boxShadow="lg">
//         <Heading mb={6}>Payment Details</Heading>
//         <Stack spacing={4}>
//           <Box>
//             <Text mb={2}>Cardholder Name</Text>
//             <input   type="text" placeholder="Enter your name"  value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
//           </Box>
//           <Box>
//             <Text mb={2}>Card Number</Text>
//             <input type="text" maxLength={13} placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
//           </Box>
//           <Flex justify="space-between">
//             <Box mr={4} flex={1}>
//               <Text mb={2}>Expiration Date</Text>
//               <input type="text"  placeholder="MM/YY" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}/>
              
//             </Box>
//             <Box ml={4} flex={1}>
//               <Text mb={2}>CVV</Text>
//               <input type="text" maxLength={3} placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
//             </Box>
//           </Flex>
//           <Button colorScheme="blue" size="lg" onClick={handleSubmit} isLoading={loading} >Pay Now</Button>
//           {/* <ToastContainer/> */}
//         </Stack>
//       </Box>
//     </Flex>
//   );
// }

// export default PaymentPage;

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Input,
  Image,
  Spinner,
  Text
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import phonePeImage from './PhonePe.png';
import paytmImage from './Paytm.png';
import { useSelector } from 'react-redux';


function PaymentPage({img, Price, Price1, Brand, city}) {
  const Data=useSelector((store)=> store.productReducer.Cart)
  
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState('creditCard');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [ccvNumber, setCCVNumber] = useState('');
  const [paytmNumber, setPaytmNumber] = useState('');
  const [phonePeNumber, setPhonePeNumber] = useState('');
  const navigate = useNavigate();
  
  const toast = useToast()
  
  
  const handlePaymentOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handlePayNowClick = () => {
    if (selectedOption === 'creditCard') {
      // Validate credit card inputs
      if (!cardName || !cardNumber || !expireDate || !ccvNumber) {
        toast({
          title: 'Please fill out all required fields for Credit Card.',
          position: 'top',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    } else if (selectedOption === 'phonePe') {
      // Validate PhonePe inputs
      if (!phonePeNumber) {
        toast({
          title: 'Please fill out all required fields for PhonePe.',
          position: 'top',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    } else if (selectedOption === 'paytm') {
      // Validate Paytm inputs
      if (!paytmNumber) {
        toast({
          title: 'Please fill out all required fields for Paytm.',
          position: 'top',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    }

    // Simulate payment processing
    setTimeout(() => {
      navigate('/Success');
      onClose();
    }, 2000);
  };

  console.log(Data)
  let TotalPrice=0
  for(let el of Data){
    TotalPrice+=el.price
  }
  
  

  return (
    <>
      <br />
      <br />
      <br />
      <Box maxWidth="500px" mx="auto" p={4} border="3px solid orange" zIndex={5}>
        <Text fontSize="18px" fontWeight="bold" color="green">
          Amount: ₹.{TotalPrice +99}
        </Text>
        <FormControl mb={4} isRequired>
          <FormLabel>Select Payment Method</FormLabel>
          <RadioGroup onChange={handlePaymentOptionChange} value={selectedOption}>
            <Stack direction="row">
              <Radio value="creditCard">Credit Card</Radio>
              <Radio value="phonePe">PhonePe</Radio>
              <Radio value="paytm">Paytm</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {selectedOption === 'creditCard' && (
          <>
            <FormControl mb={4} isRequired>
              <FormLabel>Name on Card</FormLabel>
              <Input
                type="text"
                placeholder="Enter name on card"
                value={cardName}
                isRequired
                onChange={(e) => setCardName(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel>Card Number</FormLabel>
              <Input
                type="text"
                maxLength={16}
                placeholder="Enter card number"
                value={cardNumber}
                isRequired
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                type="month"
                placeholder="Select expiration date"
                value={expireDate}
                isRequired
                onChange={(e) => setExpireDate(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel>CCV Number</FormLabel>
              <Input
                type="password"
                maxLength={3}
                placeholder="Enter CCV number"
                value={ccvNumber}
                isRequired
                onChange={(e) => setCCVNumber(e.target.value)}
              />
            </FormControl>
          </>
        )}

        {selectedOption === 'phonePe' && (
          <Box>
            <Image src={phonePeImage} alt="PhonePe" maxH="100px" mx="auto" my={4} />
            <FormControl mb={4} isRequired>
              <FormLabel>Enter PhonePe UPI</FormLabel>
              <Input
                type="text"
                placeholder="Enter your PhonePe UPI"
                value={phonePeNumber}
                isRequired
                onChange={(e) => setPhonePeNumber(e.target.value)}
              />
            </FormControl>
          </Box>
        )}

        {selectedOption === 'paytm' && (
          <Box>
            <Image src={paytmImage} alt="Paytm" maxH="100px" mx="auto" my={4} />
            <FormControl mb={4} isRequired>
              <FormLabel>Enter Paytm UPI</FormLabel>
              <Input
                type="text"
                placeholder="Enter your Paytm UPI"
                value={paytmNumber}
                isRequired
                onChange={(e) => setPaytmNumber(e.target.value)}
              />
            </FormControl>
          </Box>
        )}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>You have selected: {selectedOption}</p>
              <Text fontSize="18px" fontWeight="bold" color="green">
                Amount: ₹{TotalPrice +99} 
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="orange" onClick={handlePayNowClick}>
                Pay Now
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button colorScheme="orange" mt={4} w="100%" onClick={onOpen}>
          Pay Now
        </Button>
      </Box>
    </>
  );
}

export default PaymentPage;
