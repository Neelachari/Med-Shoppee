import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import "../SignupPage.css"

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // show success message or redirect to login page
        
      } else {
        // show error message
        // alert("please chcek the Error")
      }
    } catch (error) {
      console.error(error);
      // show error message
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      
      ...prevFormData,
      [name]: value,
      
    }));
    
  };

  return (
    <Box
      padding="3%"
      // bgGradient="linear(to-r, purple.500, pink.500)"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        border="1px solid gray"
        bg="white"
        w={{ base: "80%", md: "60%", lg: "50%" }}
        p="8"
        boxShadow="md"
        borderRadius="md"
      >
        <Text fontSize="3xl" fontWeight="bold" mb="8" textAlign="center">
          Create an account
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb="4">
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter your Name" name="name" value={formData.name} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="email" mb="4">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter Email ID" name="email" value={formData.email} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="password" mb="4">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="confirmPassword" mb="8">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Re-Enter the Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
          </FormControl>
          <Button colorScheme="orange" mb="4" w="100%" type="submit">
            Sign Up
          </Button>
        </form>
        <Text fontSize="sm" textAlign="center">
          By signing up, you agree to our Terms and Privacy Policy.
        </Text>
        <Button colorScheme="gray" onClick={() => window.history.back()}>
          Back
        </Button>
      </Box>
    </Box>
  );
};