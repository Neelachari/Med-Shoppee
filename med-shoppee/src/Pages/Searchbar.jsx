import React, { useState,useContext, useEffect } from 'react';
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
  Heading,
  border,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/products/action';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();
  const {data,setdata}=useContext(AuthContext)
  const disptch=useDispatch()
  const products=useSelector((store)=> store.productReducer.products)
  const isLoading=useSelector((store)=> store.productReducer.isLoading)
  const [filter,setFilter]=useState([])
 


  useEffect(()=>{
    disptch(allProducts())
  },[])


  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search logic and update results here
    // console.log(products)
    let Filteritem=products.filter((el)=> {
      if(el.name.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())){
        return true
      }
      else{
        return false
      }
      
      
    })
    console.log(Filteritem)
    if(Filteritem.length==0|| event.target.value==""){

      setFilter([])
      
    }
    else{
      setFilter(Filteritem)
    }

   
    
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic and update results here
    // toast({
    //   title: "Search submitted.",
    //   status: "success",
    //   duration: 2000,
    //   isClosable: true,
    //   width: '800px',
    //   maxWidth: '100%',
    //   position: 'top',
    //   render:()=>(
    //     <Box color="black" bg="white" borderRadius={"15px"}  p="20px"  > <p>Search result not found.</p> </Box>
    // )
    // });
  };

  return (
   <>
    <Box style={{ position: "relative" }} >
    <Box as="form" onSubmit={handleSubmit} width="80%" margin="auto" marginTop={0}  >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          margin="2%"
          children={<SearchIcon color="orange.300"   /> }
        />
        <Input
          type="text"
          placeholder='Search for Medicines and Health Products'
          focusBorderColor='orange.300'
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
    {isLoading?<div className="scroll_container" style={{ position: "absolute", top: "65px", width: "63vw", background: "white", maxHeight: "80px", zIndex: "100", overflowY: "scroll", padding: "3px 9px 3px 14px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", left:"12%" }} ><Spinner color='red.500' /></div>:null}
     {filter.length>0? <div className="scroll_container" style={{ position: "absolute", top: "65px", width: "63vw", background: "white", maxHeight: "400px", zIndex: "100", overflowY: "scroll", padding: "3px 9px 3px 14px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", left:"12%" }} >
      {filter?.map((el)=>{
            return   <Link  style={{ textDecoration: "none" }}
            href={`/Singlepage/${el.id}`} 
          ><div style={{ display: "flex", justifyContent: "left", alignItems: "center", color: "black" }}> 
            <img width="30px" height="50px" src={el.image} alt="" />
            <p style={{ fontWeight: "bold", padding: "8px 4px 8px 4px", margin: "6px", borderRadius: "8px", fontSize:"smaller" }} key={Math.random()}>{el.name}</p>
            <p style={{ fontWeight: "200", padding: "8px 4px 8px 4px", margin: "6px", borderRadius: "8px", color:'green',  fontSize:"smaller" }} key={Math.random()} >₹.{el.price} /- </p> 
          </div></Link>
      })}
    </div> : null }
    </Box>
    <Box mb={"20px"}>

    </Box>
   </>
  );
};

export default SearchBar;





