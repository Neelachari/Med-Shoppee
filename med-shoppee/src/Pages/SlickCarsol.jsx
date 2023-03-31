import React, { Component } from "react";
import Slider from "react-slick";
import Color from "./color.css"

 
export default class SimpleSlider extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.slider.slickNext();
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      
      <div>
        <Slider {...settings} ref={(slider) => (this.slider = slider)}>
          <div>
            <img width="100%" src="https://onemg.gumlet.io/46b33653-b14c-4708-b379-1dfb903bacab_1674801336.jpg?w=899&h=200&format=auto" alt="1"/>
          </div>
          <div>
          <img width="100%" src="https://onemg.gumlet.io/95a1dc10-5e23-495d-88cc-f398622c1715_1678907436.png?w=899&h=200&format=auto" alt="2"/>
          </div>
          <div>
          <img width="100%" src="https://onemg.gumlet.io/2b6cc808-948a-47cf-8176-c52237f217a4_1679385424.png?w=899&h=200&format=auto" alt="3"/>
          </div>
          <div>
          <img width="100%" src="https://onemg.gumlet.io/6f270cf5-44bb-4c9d-86f8-b1ecd2ba2bb9_1679557477.png?w=899&h=200&format=auto" alt="4"/>
          </div>
          <div>
          <img width="100%" src="https://onemg.gumlet.io/38cc426b-ade4-48b3-8b59-a73339915244_1679393359.png?w=899&h=200&format=auto" alt="5"/>
          </div>
          <div>
          <img width="100%" src="https://onemg.gumlet.io/9b011fe6-ddf6-46a7-a3e4-f965e7afb8eb_1679997283.png?w=899&h=200&format=auto" alt="1"/>
          </div>
        </Slider>
        <h2>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h2>
      <a href="https://www.1mg.com/subscription-plan/subscriptions?utm_source=cpsales&utm_medium=allcampaigns&utm_campaign=homepage_bottom_scroller&referer=mini_care_plan_home_page"><img  id="poster"src="https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png" alt="poster"/></a>
      
      </div>
      
     
    );
  }
}