// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComp({ dogData }) {
  console.log(dogData);

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
        {dogData.map((dog) => (
          <SwiperSlide key={dog.id}>
            <div className="carousel">
              <p>{dog.name}</p>
              <img src={dog.photo} alt={`Dog ${dog.id}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
