import React, {useState,useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import {Link} from "react-router-dom"
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
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
        <Box bg="gray.50" minH="100vh" py="12" px={{ base: '4', lg: '8' }}>
        <Box maxW="md" mx="auto" textAlign="center">
          <Heading size="xl" fontWeight="extrabold">
            Sign in to your account
          </Heading>
        </Box>
        <Box maxW="md" mx="auto" mt="8" bg="white" shadow="base" rounded="md" overflow="hidden">
          <Box p="6">
            <Stack spacing="6">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" autoComplete="email" required />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" autoComplete="current-password" required />
              </FormControl>
              <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                Sign in
              </Button>
            </Stack>
           <p>Do't Have Account<Link key={"/SignUp"} to={"/SignUp"} >Check</Link></p>
          </Box>
          
        </Box>
        
      </Box>
    )
}