import {useReducer, useEffect, useState,useContext} from 'react'
import {Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner, Heading, Checkbox, CheckboxGroup,Spacer} from "@chakra-ui/react"
import axios from "axios";
import produ from "./Produ.css"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import AuthContextProvider, { AuthContext } from '../Context/AuthContextProvider'

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
const [sort,setsort]=useState("")
const [filter,setfilter]=useState("")
const [cart,setcartdata]=useState([])
const {data,setdata}=useContext(AuthContext)

const getDat=(sort,pageNumber,filter,handlecart)=>{
  if(sort==""||filter==""){
    dispatch({ type: "FETCH_DATA_REQUEST" });
  var pageData=axios
    .get(`https://outrageous-puce-hippopotamus.cyclic.app/Products?_page=${pageNumber}&_limit=${dataLimit}`)
    .then((res) => {
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: err.message });
    });
    console.log(pageData)

  }
  else if(sort=="asc"||"desc"){
    dispatch({ type: "FETCH_DATA_REQUEST" });
    var pageData=axios
      .get(`https://outrageous-puce-hippopotamus.cyclic.app/Products?_sort=price&_order=${sort}`)
      .then((res) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.message });
      });

  }
  else if(filter){
    dispatch({ type: "FETCH_DATA_REQUEST" });
    var pageData=axios
      .get(`https://outrageous-puce-hippopotamus.cyclic.app/Products?&category=${filter}`)
      .then((res) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.message });
      });


  }
  
  
}    
  useEffect(()=>{
    getDat(sort,pageNumber,filter)
  },[pageNumber, dataLimit, sort,filter])

  //console.log(pageNumber,dataLimit)

  const handlecart=(id)=>{
     axios.get(`https://outrageous-puce-hippopotamus.cyclic.app/Products/${id}`)
     .then((res)=>setdata([...data,res.data]))
      
  }
  console.log(data)



  return (
    <div class="flex" width="100%">
      <Box width="50%" padding={5}>
      <h5>PRODUCT TAGS</h5>
      <Checkbox size='md' colorScheme='orange' value="Tablets" onChange={(e)=>{setfilter(e.target.value);setsort("")}}>Tablets</Checkbox>
      <Checkbox size='md' colorScheme='orange' value="Inhalers" onChange={(e)=>{setfilter(e.target.value);setsort("")}}>Inhalers</Checkbox>
      <Checkbox size='md' colorScheme='orange' value="Eye Care" onChange={(e)=>{setfilter(e.target.value);setsort("")}}>Eye Care</Checkbox>
      <Checkbox size='md' colorScheme='orange' value="Syrups" onChange={(e)=>{setfilter(e.target.value);setsort("")}}>Syrups</Checkbox>
      <Checkbox size='md' colorScheme='orange' value="Medical Devices" onChange={(e)=>{setfilter(e.target.value);setsort("")}}>Medical Devices</Checkbox>

     <br></br>

      <h5>DISCOUNT</h5>
      <Checkbox size='md' colorScheme='orange'>Less Then 10%</Checkbox>
      <Checkbox size='md' colorScheme='orange'>Above 20%</Checkbox>
      <Checkbox size='md' colorScheme='orange'>Above 30%</Checkbox>
      <Checkbox size='md' colorScheme='orange'>Above 40%</Checkbox>

      {" "}
      {" "}

      <h5>SORT BY PRICE</h5>
      <Select placeholder='Select option' onChange={(e)=>setsort(e.target.value)}>
        <option value='' >Rating</option>
        <option value='asc'>Low To High</option>
        <option value='desc'>High To Low</option>
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
            <Text className="price">Price: ₹.{e.price}</Text>
            <Text className="description">{e.description}</Text>
            <Text className="description">{e.category}</Text>
            <Box>
            {"   "}
            {" "}
            {" "}
            
            <Button className="delete" colorScheme='green' onClick={()=>handlecart(e.id)}>Add To Cart</Button>
           
            
            </Box>
            
          </VStack>
          
        </Box>
        
))}
<Button colorScheme='orange' onClick={(e) => setPageNumber(pageNumber -1)} isDisabled={pageNumber<=1}>Pev</Button>
<Text fontSize="15px" border="3px solid gray" padding="1%" color="green" >PAGE  {pageNumber}</Text>
<Button colorScheme='orange' onClick={(e) => setPageNumber(pageNumber +1)} isDisabled={pageNumber==4}>Next</Button>
      </SimpleGrid>
      
}
    </div>
  )
}