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
      <div className="Container">
        <h2>Featured brands</h2>
        <Slider {...settings}>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2faad55-b08e-46b0-87c4-5aa9bc9c0801.png" alt="1"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e9be0e44-1ea6-4a1e-93e3-1f21c1d96d08.png" alt="2"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5361468d-aaa9-4f58-829a-5d69f335924d.png" alt="3"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/074ed4a2-6650-436e-b876-13fa6871a0ce.png" alt="4"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4d20c003-645b-475e-b859-6ddad1ab439d.png" alt="5"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/508a5e42-eeeb-4db4-9aaa-c068a6ef7299.png" alt="6"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1e7b19a4-a7c7-41a4-9c9f-7d9beb9f73b1.png" alt="7"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/459ab067-8cb6-446a-b0d1-8b8a718ad701.png" alt="8"/>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fbb2dcab-f58d-4cc3-a94b-e8829133dada.png" alt="9"/>
          </Box>
        </Slider>
      </div>
    );
  }
}