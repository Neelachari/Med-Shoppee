import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
const [isAuth,setIsAuth]=useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res)=>res.json())

      .then((data)=>{
        data.filter((e)=>{
          if(formData.email===""&&formData.password===""){
            toast.error("❌ Please Enter The Credentials")
           
          }
          else if(formData.email!=e.email&&formData.password!=e.password){
            toast.error("❌ Please Check the Email or password")

          }
          else if( e.email===formData.email&&e.password===formData.password){
            //window.location.href = '/';
            toast.success('✅ Login Successful')
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
  return <Navigate to="/" />
  setIsAuth(true)
  
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
        <ToastContainer fontSize="10px"/>
          <FormControl id="email" mb="4">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter Email ID" name="email" value={formData.email} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="password" mb="8">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleInputChange} />
          </FormControl>
          <Button colorScheme="orange" mb="4" w="100%" type="submit">
            Login
          </Button>
        </form>
        <Text fontSize="sm" textAlign="center">
          Don't have an account yet? <a href="/signup">Sign up</a>.
        </Text>
      </Box>
    </Box>
  );
};

export default Login

