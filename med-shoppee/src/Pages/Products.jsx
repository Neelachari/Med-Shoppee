import {useReducer, useEffect, useState} from 'react'
import {Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner, Heading, Checkbox, CheckboxGroup,Spacer} from "@chakra-ui/react"
import axios from "axios";
import produ from "./Produ.css"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state,action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }

};


export default function AllProducts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [data,setData]=useState([])
  // console.log(data)
const [pageNumber, setPageNumber] = useState(1);
const [dataLimit, setDataLimit] = useState(9);
    
  useEffect(()=>{
    dispatch({ type: "FETCH_DATA_REQUEST" });
    var pageData=axios
      .get(`http://localhost:8080/Products?_page=${pageNumber}&_limit=${dataLimit}`)
      .then((res) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.message });
      });
      console.log(pageData)
  },[pageNumber, dataLimit])

  //console.log(pageNumber,dataLimit)


  const handleClick = (id) => {

    
  };




  return (
    <div class="flex" width="100%">
      <Box width="50%" padding={5}>
      <h5>FILTERS</h5>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>

     <br></br>

      <h5>FILTERS</h5>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
      <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>

      {" "}
      {" "}

      <h5>SORT</h5>
      <Select placeholder='Select option'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      </Box>
      {
        state.isLoading ? (
          <CircularProgress isIndeterminate color='orange' />
        ) : <SimpleGrid className="main_container" columns={{ base: 1, sm: 2, md: 3 }} spacing={10} padding={5}  >
          {state.data.map((e)=>(
        <Box className="catsDetails" key={e.id} border='1px' borderColor='gray.200' >
          <Center>
            <Img src={e.image} width="20%" />
          </Center>

          <VStack spacing={1} p={2} >
            <Text className="name" fontSize={"15px"} fontWeight="bold">Name: {e.name}</Text>
            <Text className="price">Price: {e.price}</Text>
            <Text className="description">{e.description}</Text>
            <Box>
            <Button className="delete" colorScheme='orange' onClick={handleClick}>Checkout</Button>
            {"   "}
            {" "}
            {" "}
            <Button className="delete" colorScheme='green'>Add To Cart</Button>
            </Box>
            
          </VStack>
          
        </Box>
        
))}
<Button colorScheme='orange' onClick={(e) => setPageNumber(pageNumber -1)} disabled={pageNumber<=1}>Pev</Button>
<Text fontSize="15px" border="3px solid gray" padding="1%" color="green" >PAGE  {pageNumber}</Text>
<Button colorScheme='orange' onClick={(e) => setPageNumber(pageNumber +1)} disabled={pageNumber==3}>Next</Button>
      </SimpleGrid>
      
}
    </div>
  )
}