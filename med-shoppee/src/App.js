import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Routes/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'


export default function App() {
  return (
    
    <ChakraProvider>
    <div className="App">
      
      <Navbar/>
      <Divider width="95%" margin="auto" borderColor="red.200" />
      <AllRoutes/>
      
    </div>
    </ChakraProvider>
  );
}