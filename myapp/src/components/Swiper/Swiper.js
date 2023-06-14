// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Frida1 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28 (1).jpeg";
import Frida2 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28.jpeg";
import Frida3 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.29.jpeg";
import Frida4 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.30.jpeg";
import Frida5 from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.36.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComp() {
    return (
      <div className="swiper-container"> {/* Add a container element */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <div className="carousel">
            <SwiperSlide>
              <img src={Frida1} alt="dog1" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Frida2} alt="dog2" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Frida3} alt="dog3" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Frida4} alt="dog4" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Frida5} alt="dog5" className="carousel-image" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    );
  };
  