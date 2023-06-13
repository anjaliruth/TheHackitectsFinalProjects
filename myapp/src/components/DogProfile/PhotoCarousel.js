import { Carousel } from "react-carousel-minimal";
import React from "react";

import Frida1 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28 (1).jpeg";
import Frida2 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28.jpeg";
import Frida3 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.29.jpeg";
import Frida4 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.30.jpeg";
import Frida5 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.36.jpeg";

function PhotoCarousel() {
  const data = [
    {
      image: Frida1,
    },
    {
      image: Frida2,
    },
    {
      image: Frida3,
    },
    {
      image: Frida4,
    },
    {
      image: Frida5,
    },
  ];

  // const captionStyle = {
  //   fontSize: "2em",
  //   fontWeight: "bold",
  // };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            width="80%"
            height="500px"
            // captionStyle={captionStyle}

            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false} // We set the auto scroll to false, we want to slow down the scroll if possible as a stretch goal
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailalignment="center"

    
            thumbnailWidth="60px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              justifyContent: "right",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoCarousel;
