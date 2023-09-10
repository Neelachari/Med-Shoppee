import { useContext, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, useToast} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider';
// import { useToast } from '@chakra-ui/react'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

const {isAuth,setIsAuth}=useContext(AuthContext)
  
const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://deployeement-server.onrender.com/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res)=>res.json())

      .then((data)=>{
        data.filter((e)=>{
          if(formData.email===""&&formData.password===""){
            // toast.error("❌ Please Enter The Credentials")
            // toast({
            //   title: "❌ Login failed",
            //   status: "👀 Please Enter The Credentials",
            //   duration: 2000,
            //   isClosable: true,
            // })
            toast({
              position:"top",
              isClosable: true,
              duration: 2000,
              status: "❌ Login failed",
              render:()=>(
                  <Box color="white" bg="red.500" p="20px" >👀 Please enter the Email and password</Box>
              )
            })
           
          }
          else if(e.email!=formData.email&&e.password!=formData.password){
            // toast.error("❌ Please Check the Email or password")
            // toast({
            //   title: "❌ Login failed",
            //   status: "👀 Please Check the Email or password",
            //   duration: 2000,
            //   isClosable: true,
            // })
               toast({
              position:"top",
              isClosable: true,
              duration: 2000,
              status: "warning",
              render:()=>(
                  <Box color="white" bg="red.500" p="20px" >👀 Please Check the Email or password</Box>
              )
            })

          }
          else if( e.email===formData.email&&e.password===formData.password){
            //window.location.href = '/';
            
            // toast('✅ Login Successful')
            // toast({
            //   title: "😍 Login Successful",
            //   status: "Welcome to mid-shopee",
            //   duration: 2000,
            //   isClosable: true,
            // });
            toast({
              position:"top",
              isClosable: true,
              duration: 2000,
              status: "success",
              render:()=>(
                  <Box color="white" bg="blue.500" p="20px" >✅ Login Successful</Box>
              )
            })
            setIsAuth(true)
             
          }

        })
      })
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


if(isAuth){
  // if(isAuth==true){
  //   toast({
  //     title: "😍 Login Successful",
  //     status: "Welcome to mid-shopee",
  //     duration: 2000,
  //     isClosable: true,
  //   });
  // }
  return <Navigate to="/" />
  
}


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
          Login to your account
        </Text>
        
        <form onSubmit={handleSubmit}>
        
          <FormControl id="email" mb="4">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter Email ID" name="email" value={formData.email} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="password" mb="8">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleInputChange} />
          </FormControl>
         
          <Button  colorScheme="orange" mb="4" w="100%" type="submit">Login </Button>
          
        </form>
        <Text fontSize="sm" textAlign="center">
          Don't have an account yet? <a href="/signup">Sign up</a>.
        </Text>
      </Box>
    </Box>
  );
};

export default Login

