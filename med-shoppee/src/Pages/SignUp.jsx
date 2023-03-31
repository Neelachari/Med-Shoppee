import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import "../SignupPage.css"
import React from 'react'

export const SignUp = () => {
  return (
    <Box  padding="3%" 
    // bgGradient="linear(to-r, purple.500, pink.500)"
    h="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box border="1px solid gray"  
      bg="white"
      w={{ base: "80%", md: "60%", lg: "50%" }}
      p="8"
      boxShadow="md"
      borderRadius="md"
    >
      <Text fontSize="3xl" fontWeight="bold" mb="8" textAlign="center">Create an account</Text>
      <FormControl id="name" mb="4">
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder='Enter your Name' />
      </FormControl>
      <FormControl id="email" mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder='Enter Email ID' />
      </FormControl>
      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder='Enter Password' />
      </FormControl>
      <FormControl id="confirmPassword" mb="8">
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" placeholder='Re-Enter the Password' />
      </FormControl>
      <Button colorScheme="orange" mb="4" w="100%">Sign Up</Button>
      <Text fontSize="sm" textAlign="center">By signing up, you agree to our Terms and Privacy Policy.</Text>
      <Button colorScheme="gray" onClick={() => window.history.back()}>Back</Button>
    </Box>
  </Box>
  )
}
