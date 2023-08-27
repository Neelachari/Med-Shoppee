import React, { Component } from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import Slick1 from "./Slick1.css"
import { color } from "framer-motion";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1
    };
    return (
      <div className="Container">
        <h2>Customers who bought this item also bought</h2>
        <Slider {...settings}>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg" alt="1"/>
            <h4>Tata 1mg Diabetes </h4>
            <h4>This combo pack contains 3 items</h4>
            <p >Rs.582.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg" alt="2"/>
            <h4>Tata 1mg Diabetes </h4>
            <h4>This combo pack contains 3 items</h4>
            <p >Rs.582.00</p>
          </Box>
          <Box>
            <img  width="80%"  src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/537fd698-25dd-43d5-b5f7-02a997bcd33a.jpeg" alt="3"/>
            <h4>Tata 1mg Diabetes </h4>
            <h4>This combo pack contains 3 items</h4>
            <p >Rs.582.00</p>
          </Box>
          <Box>
            <img 
             width="80%" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg" alt="4"/>
             <h4>Tata 1mg Diabetes </h4>
            <h4>This combo pack contains 3 items</h4>
            <p>Rs.582.00</p>
          </Box>
          <Box>
            <img  width="80%"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg" alt="5"/><h4>Tata 1mg Diabetes </h4>
            <h5>This combo pack contains 3 items</h5>
            <p >Rs.582.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg" alt="6"/><h4>Tata 1mg Diabetes </h4>
            <h5>This combo pack contains 3 items</h5>
            <p >Rs.582.00</p>
          </Box>
          <Box>
            <img width="120%" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lvtn5rrf1guolsh7lrfx.jpg" alt="7"/><h4>Tata 1mg Diabetes </h4>
            <h5>This combo pack contains 3 items</h5>
            <p >Rs.582.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg" alt="8"/>
            <h4>Tata 1mg Diabetes </h4>
            <h5>This combo pack contains 3 items</h5>
            <p>Rs.582.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ylfuylfxrh0cvzrxopf3.jpg" alt="9"/>
            <h4>Tata 1mg Diabetes </h4>
            <h5>This combo pack contains 3 items</h5>
            <p >Rs.582.00</p>
          </Box>
        </Slider>
      </div>
    );
  }
}