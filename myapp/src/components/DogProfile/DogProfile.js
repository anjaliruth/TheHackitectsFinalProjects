import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Frida1 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28 (1).jpeg";
import Frida2 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28.jpeg";
import Frida3 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.29.jpeg";
import Frida4 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.30.jpeg";
import Frida5 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.36.jpeg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img style={{ width: 800, height: 400 }} src={Frida1} />
          <p className="Frida1" alt=""></p>
        </div>
        <div>
          <img style={{ width: 400, height: 400 }} src={Frida2} />
          <p className="Frida2" alt=""></p>
        </div>
        <div>
          <img style={{ width: 400, height: 400 }} src={Frida3} />
          <p className="Frida3"></p>
        </div>
        <div>
          <img style={{ width: 400, height: 400 }} src={Frida4} />
          <p className="Frida4"></p>
        </div>
        <div>
          <img style={{ width: 400, height: 400 }} src={Frida5} />
          <p className="Frida5"></p>
        </div>
      </Carousel>
    );
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default DemoCarousel;
