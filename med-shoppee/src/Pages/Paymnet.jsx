import { Heading, Text, Box, Flex, Stack, Button } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function PaymentPage() {
    const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [loading, setLoading] = useState(false);
 
  
    const handleSubmit = () => {
      if (!cardholderName|| !cardNumber || !expirationDate|| !cvv) {
        toast("Please fill in all fields");
        alert("Please fill in all fields")
        return;
      }
  
      setLoading(true);
  
      // simulate payment process
      setTimeout(() => {
        setLoading(false);
        toast.success("Payment successful!");
        alert("Payment successful!")
        window.location.href="/"
      }, 3000);
    };


  return (
    <Flex direction="column" alignItems="center" justifyContent="center" h="100vh">
      <Box maxW="lg" px={8} py={12} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6}>Payment Details</Heading>
        <Stack spacing={4}>
          <Box>
            <Text mb={2}>Cardholder Name</Text>
            <input   type="text" placeholder="Enter your name"  value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
          </Box>
          <Box>
            <Text mb={2}>Card Number</Text>
            <input type="text"  placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </Box>
          <Flex justify="space-between">
            <Box mr={4} flex={1}>
              <Text mb={2}>Expiration Date</Text>
              <input type="text"  placeholder="MM/YY" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}/>
              
            </Box>
            <Box ml={4} flex={1}>
              <Text mb={2}>CVV</Text>
              <input type="text" maxLength={3} placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
            </Box>
          </Flex>
          <Button colorScheme="blue" size="lg" onClick={handleSubmit} isLoading={loading} >
            Pay Now
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default PaymentPage;

