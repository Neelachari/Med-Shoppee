import React, { useState,useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  useToast,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();
  // const {data,setdata}=useContext(AuthContext)
  const products=useSelector((store)=> store.productReducer.products)

 console.log(products)
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search logic and update results here

    toast({
      title: "Search Resullts",
      status: "success",
      duration: 4000,
      isClosable: true,
      width: '800px',
      maxWidth: '100%',
      position: 'top',
      render:()=>(
        <Box color="black" bg="white" borderRadius={"15px"}  p="20px"  > <p>{products.name}</p> </Box>
    )
    
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic and update results here
    toast({
      title: "Search submitted.",
      status: "success",
      duration: 2000,
      isClosable: true,
      width: '800px',
      maxWidth: '100%',
      position: 'top',
      render:()=>(
        <Box color="black" bg="white" borderRadius={"15px"}  p="20px"  > <p>Search result not found.</p> </Box>
    )
    });
  };

  return (
   <>
    <Flex >
    <Box as="form" onSubmit={handleSubmit} width="80%" margin="auto" marginTop={0} >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          margin="2%"
          children={<SearchIcon color="orange.300"   /> }
        />
        <Input
          type="text"
          placeholder="Search for Medicines and Health Products"
          value={searchTerm}
          bg={'gray.100'}
          onChange={handleSearch}
          margin="2%"
         
        />
        <IconButton
          aria-label="Search"
          width="15%"
          icon={<SearchIcon />}
          colorScheme="orange"
          margin="2%"
          type="submit"
          
        />
      </InputGroup>
    </Box>
    <Box>
      {products?<Box height={'8vh'}>
           <h1>{products.name}</h1>
      </Box>:""}
    </Box>
    </Flex>
   </>
  );
};

export default SearchBar;