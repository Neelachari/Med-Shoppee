import "./App.css";
import Footer from "./Pages/Footer";
import { AllRoutes } from "./Routes/AllRoutes";
import  Navbar  from "./Routes/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { store } from "./redux/store";
import {Provider} from "react-redux"



export default function App() {
  return (
    
    <ChakraProvider>
      <Provider store={store} >
    <div className="App">
      
      <Navbar/>
      <Divider width="95%" margin="auto" borderColor="red.200" />
      <AllRoutes/>
      <Footer/>
    </div>
    </Provider>
    </ChakraProvider>
  );
}