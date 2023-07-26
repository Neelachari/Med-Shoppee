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
        <h2>Oxygen concentrators</h2>
        <Slider {...settings}>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pyt1jlchdk5jic1acuzw.jpg" alt="1"/>
            <h4>Canta High Purity Medical Oxygen Concentrator (5ltr)</h4>
            <h5>Box of 1 unit</h5>
            <p >₹55000.00</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/eh0yj3zynb8hbgnabqap.jpg" alt="2"/>
            <h4>Canta High Purity Medical Oxygen Concentrator (8Ltr)</h4>
            <h5>Box of 1 unit</h5>
            <p >₹60732</p>
          </Box>
          <Box>
            <img  width="80%"  src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/1b3f4887a9d34f87bf92135f8db20405.jpg" alt="3"/>
            <h4>Firstmed Oxygen Concentrator</h4>
            <h5>Box of 1 unit</h5>
            <p >₹42350</p>
          </Box>
          <Box>
            <img 
             width="80%" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/co4ckeuft9gheyzmy72c.jpg" alt="4"/>
             <h4>Jumao Oxygen Concentrator (5ltr) Assorted</h4>
             <h5>Box of 1 unit</h5>
            <p>₹62000</p>
          </Box>
          <Box>
            <img  width="80%"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/teuj64gpwwzzxqns1mux.jpg" alt="5"/><h4>Outlet Medical Oxygen Concentrator (5ltr)</h4>
            <h5>Box of 1 unit</h5>
            <p >₹55000</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/crbaq7qxamlisokvwd5n.jpg" alt="6"/><h4>Canta HG5-W-NS Oxygen Concentrator</h4>
            <h5>Box of 1 unit</h5>
            <p >₹52000</p>
          </Box>
          <Box>
            <img width="120%" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/13778cb07fa34adcab2166876e4dbb46.jpg" alt="7"/><h4>Auditech Oxygen Concentrator</h4>
            <h5>Box of 1 unit</h5>
            <p >₹35999</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/dpxd2ez899ttmd3j0bi3.jpg" alt="8"/>
            <h4>Equinox EQ-OC 09 Oxygen Concentrator</h4>
            <h5>Box of 1 unit</h5>
            <p>₹39997</p>
          </Box>
          <Box>
            <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/wq7aw5wweqpfcl3brfcl.jpg" alt="9"/>
            <h4>Micitech CP503 Swing Compressor Oxygen Concentrator (5ltr)</h4>
            <h5>Box of 1 unit</h5>
            <p >₹67000</p>
          </Box>
        </Slider>
      </div>
    );
  }
}