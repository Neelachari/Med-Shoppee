import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Routes/Navbar";
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    
    <ChakraProvider>
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
    </ChakraProvider>
  );
}