import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

import React from 'react'

export const SignUp = () => {
  return (
    <Box>
  <FormControl id="name">
    <FormLabel>Name</FormLabel>
    <Input type="text" />
  </FormControl>
  <FormControl id="email">
    <FormLabel>Email address</FormLabel>
    <Input type="email" />
  </FormControl>
  <FormControl id="password">
    <FormLabel>Password</FormLabel>
    <Input type="password" />
  </FormControl>
  <FormControl id="confirmPassword">
    <FormLabel>Confirm Password</FormLabel>
    <Input type="password" />
  </FormControl>
  <Button colorScheme="blue">Sign Up</Button>
</Box>
  )
}
