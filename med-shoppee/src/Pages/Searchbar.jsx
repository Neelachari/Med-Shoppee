import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search logic and update results here
    toast({
      title: "Search performed.",
      status: "success",
      duration: 2000,
      isClosable: true,
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
    });
  };

  return (
    < >
    <Box as="form" onSubmit={handleSubmit} width="60%" margin="auto" marginTop={10}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          margin="2%"
          children={<SearchIcon color="orange.300"   />}
        />
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          margin="2%"
        />
        <IconButton
          aria-label="Search"
          width="10%"
          icon={<SearchIcon />}
          colorScheme="orange"
          margin="2%"
          type="submit"
          
        />
      </InputGroup>
      
    </Box>
    <Box>
        
    </Box>
    </>
  );
};

export default SearchBar;