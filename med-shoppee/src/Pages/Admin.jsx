import {useReducer, useEffect, useState} from 'react'
import {Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner, Heading, Checkbox, CheckboxGroup,Spacer,Input} from "@chakra-ui/react"
import axios from "axios";
import admin from "./Admin.css"

const initialState={
  id:"",
  image:"",
  name:"",
  price:"",
  data:[],
  description:"",
  category:"",
  
  }


  
  const reducer=(state,action)=>{
    switch(action.type){
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
      case "id":{
        return {
          ...state,
          id:action.payload
        }
      }
      case "image":{
        return {
          ...state,
          image:action.payload
        }
      }
      case "name":{
        return {
          ...state,
          name:action.payload
        }
      }
      case "price":{
        return {
          ...state,
          price:action.payload
        }
      }
      case "description":{
        return {
          ...state,
          description:action.payload
        }
      }
      case "category":{
        return {
          ...state,
          category:action.payload
        }
      }
      default : {
        return initialState
      }
    }
  
  }
  

export const Admin = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [data,setData]=useState([])
//const data=[]
const [pageNumber, setPageNumber] = useState(1);
const [dataLimit, setDataLimit] = useState(9);
      
    useEffect(()=>{
      dispatch({ type: "FETCH_DATA_REQUEST" });
   axios
        .get(`https://deployeement-server.onrender.com/Products?_page=${pageNumber}&_limit=${dataLimit}`)
        .then((res) => {
          dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: "FETCH_DATA_FAILURE", payload: err.message });
        });
        
    },[pageNumber, dataLimit])
  
    //console.log(pageNumber,dataLimit)
  
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post(`https://deployeement-server.onrender.com/Products`,state)
      dispatch({type:"RESET"})
    };
  

    const HandleDelete=(id)=>{
      axios.delete(`https://deployeement-server.onrender.com/Products/${id}`)
      .then((res)=>dispatch({type:"FETCH_DATA_SUCCESS",payload:res.data}))
      console.log(id)
    }

    
  return (
    <>
    <Heading>Welcome To Admin Page</Heading>
    
         <div className="flex" width="100%">
         {
        state.isLoading ? (
          <Spinner />
        ) : <SimpleGrid className="main_container" columns={{ base: 1, sm: 2, md: 3 }} spacing={10} padding={5}  >
          {state.data.map((e)=>(
        <Box className="Box2" key={e.id} border='1px' borderColor='gray.200' >
          <Center>
            <Img src={e.image} width="20%" />
          </Center>

          <VStack spacing={1} p={10} >
            <Text className="name" fontSize={"15px"} fontWeight="bold">Name: {e.name}</Text>
            <Text className="price">Price: {e.price}</Text>
            <Text className="description">{e.description}</Text>
            <Text className="category">{e.category}</Text>
            <Box>
            <Button className="Edit" colorScheme='green' >Edit</Button>
            {"   "}
            {" "}
            {" "}
            <Button className="delete" colorScheme='red' onClick={()=>HandleDelete(e.id)}>Delete</Button>
            </Box>
            
          </VStack>
          
        </Box>
        
))}
<Button colorScheme='orange' onClick={(e) => setPageNumber(pageNumber -1)} disabled={pageNumber<1}>Pev</Button>
<Text fontSize="15px" border="3px solid gray" padding="1%" color="green" >PAGE  {pageNumber}</Text>
<Button colorScheme='orange' onClick={(e) => setPageNumber(pageNumber +1)} disabled={pageNumber==3}>Next</Button>
      </SimpleGrid>
      
}
         
      <Box className="Box1" padding={5}>
        <h3>Add New Product</h3>
      <Input className="name" placeholder="id" onChange={(e)=>dispatch({type:"id",payload:e.target.value})}/>
      <Input className="iamge" placeholder="Image" type="text" onChange={(e)=>dispatch({type:"image",payload:e.target.value})}/>
      <Input className="Name" placeholder="Name" type="text" onChange={(e)=>dispatch({type:"name",payload:e.target.value})}/>
          <Input className="price" placeholder="price" type="number" onChange={(e)=>dispatch({type:"price",payload:e.target.value})} />
          <Input className="description" placeholder="Description"  onChange={(e)=>dispatch({type:"description",payload:e.target.value})} />
          <Input className="category" placeholder="category"  onChange={(e)=>dispatch({type:"category",payload:e.target.value})} />
          <Button colorScheme={"orange"} className="submitBtn" onClick={handleSubmit} >
            Add Item
          </Button>
      
      </Box>
      
    
    </div>
    </>
  )
}
