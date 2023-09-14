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
        <h2>Popular Combo Deals</h2>
        <Slider {...settings}>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg" alt="1"/>
            <h4>Tata 1mg Diabetes </h4>
            <h4>This combo pack contains 3 items</h4>
            <p >Rs.582.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg" alt="2"/>
            <h4>Lancet (25 Each) </h4>
            <h4>Accu-Chek Combo Pack of 2 Pack Softclix</h4>
            <p >Rs.1157.00</p>
          </Box>
          <Box>
            <img  width="80%"  src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/537fd698-25dd-43d5-b5f7-02a997bcd33a.jpeg" alt="3"/>
            <h4>Dr. Morepen Omega 3 </h4>
            <h4>Tata 1mg Multivitamin Supreme Capsule</h4>
            <p >Rs.944.00</p>
          </Box>
          <Box>
            <img 
             width="80%" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg" alt="4"/>
             <h4>Immunity Care Combo of 1mg</h4>
            <h4>Panch Tulsi 30ml Drops and Patanjali</h4>
            <p>Rs.235.00</p>
          </Box>
          <Box>
            <img  width="80%"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg" alt="5"/><h4>Acne Care Combo of Cetaphil </h4>
            <h5>Skin Cleanser 125ml and Klm Klin</h5>
            <p >Rs.824.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg" alt="6"/><h4>Accu-Chek Active Combo</h4>
            <h5>Glucometer with 10 Test Strip Free</h5>
            <p >Rs.1802.00</p>
          </Box>
          <Box>
            <img width="120%" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lvtn5rrf1guolsh7lrfx.jpg" alt="7"/><h4>OneTouch Select Plus Simple</h4>
            <h5>Glucometer Value Pack + 1 Pack of 50 Test Strip</h5>
            <p >Rs.2265.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg" alt="8"/>
            <h4> Tea Bag and Dabur Honey </h4>
            <h5>Anti-oxidants Combo of Organic India Lemon Ginger</h5>
            <p>Rs.637.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ylfuylfxrh0cvzrxopf3.jpg" alt="9"/>
            <h4>Supradyn Daily Multivitamin</h4>
            <h5>15 Tablet & Saridon 10 Tablet</h5>
            <p >Rs.97.00</p>
          </Box>
        </Slider>
      </div>
    );
  }
}