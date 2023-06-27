import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComp({ dogData }) {
  const photos = Array.isArray(dogData.dogPics[0].swiperPhoto)
    ? dogData.dogPics[0].swiperPhoto
    : [dogData.dogPics[0].swiperPhoto];

    // console.log("dogData",dogData);
    // console.log("dogData.dogPics:",dogData.dogPics);
    // console.log("dogData.dogPics.id:",dogData.dogPics[0].id);
    // console.log("dogData.dogPics.swiperPhoto:",dogData.dogPics.swiperPhoto);
    
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="carousel">
              <img
                className="carousel-image"
                src={photo}
                alt={`Dog ${dogData.dogPics[0].SwiperPhotoAltText}`}
               

              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
