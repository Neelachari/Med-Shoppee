import React, {useState,useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import {Link} from "react-router-dom"
import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { SignUp } from './SignUp';


export default function Login() {
    // const {login,isAuth}=useContext(AuthContext)
    // const [email,setemail]=useState("")
    // const [password,setpassword]=useState("")

    // const handleLogin=(e)=>{
    //     e.preventDefault()
    //     const userData={
    //         email,
    //         password
    //     }
    //     fetch("https://reqres.in/api/login",{
    //         method: "POST",
    //         body:JSON.stringify(userData),
    //         headers:{
    //             "Content-Type": "application/json"
    //         },
    //     }).then((res)=>res.json())
    //     .then((json)=>{
    //         console.log(json)
    //         login(json.token)
    //     })
    //     .catch((err)=>console.log(err))
        
    // }
    // if(isAuth){
    //     return <Navigate to="/home" />
    // } 
    return (
        // <div>
        //     <form className = "auth_form"  >
        //         <input
        //             style = {{padding:"5px", margin: "10px", width: 200}}
        //             type = "email"
        //             className = "email"
        //             placeholder = "Enter Email"
        //             value={email}
        //             onChange={(e)=> {
        //                 setemail(e.target.value)
        //                 console.log(e.target.value)
        //             }}
        //         />
        //         <br />
        //         <input
        //             style = {{padding:"5px", margin: "10px", width: 200}}
        //             type = "password"
        //             className = "password"
        //             placeholder = "Enter password"
        //             value={password}
        //             onChange={(e)=> {
        //                 setpassword(e.target.value)
        //                 console.log(e.target.value)
        //             }}
        //         />
        //         <br />
        //         <input className = "submit" type = "submit" onClick={handleLogin}/>

        //     </form>  
                          
        // </div>
        <Box
      bgGradient="linear(to-r, purple.500, pink.500)"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="white"
        w={{ base: "80%", md: "60%", lg: "50%" }}
        p="8"
        boxShadow="md"
        borderRadius="md"
      >
        <Text fontSize="3xl" fontWeight="bold" mb="8" textAlign="center">Log In</Text>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" mb="8">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="orange" mb="4" w="100%">Log In</Button>
        <Button colorScheme="gray"  onClick={() => window.history.back()}>Back</Button>
        <Text fontSize="sm" textAlign="center">Don't have an account? <a href="#"><Link key={"/SignUp"} to={"/SignUp"} >Sign up Here</Link></a></Text>
        
       
      </Box>
    </Box>
    )
}