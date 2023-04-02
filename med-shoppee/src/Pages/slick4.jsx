import React, { Component } from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import Slick1 from "./Slick1.css"

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
      <div className="Container" >
        <h2>Ayurveda top brands</h2>
        <Slider {...settings}>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/onneibznnitqsn5twumi.png" alt="1"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/dekl61bd9thu21vmypkm.png" alt="2"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/idgjl700nkz6w8lzvjwc.png" alt="3"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/yv774ayhbypuxi28dhs0.png" alt="4"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xemgonnppssxvagkjxzd.png" alt="5"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/guiy84rk41kgofd5atft.png" alt="6"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/shxhntpjye31tu8frfjs.png" alt="7"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/kvwlak2daqdzaflvgx2u.png" alt="8"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ktzih4wnm4xfynusrep6.png" alt="9"/>
          </Box>
        </Slider>
      </div>
    );
  }
}