import PhotoCarousel from "./PhotoCarousel.js";
import "./DogProfile.css";
import { useParams } from "react-router-dom";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FaDog } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import SwiperComp from "../Swiper/Swiper.js";

function DogProfile({ dogData }) {
  const {id} = useParams();
  // console.log(dogData)
  // console.log("id",id)
  // console.log(dogData.length)
  return (
    

    <div className="totalDogInfo">
      <div className="offsetdiv"> </div>
      <div className="swiper">
        <SwiperComp />
      </div>

      <div className="dogInfo">
        <div className="dogProfileButtons">
          <button className="button1">Adopt Me!</button>
          <button className="button2">How To Care For Me</button>
        </div>

        { dogData && <div className="dogStats">
          <h1>{dogData[id - 1].name}</h1>
          <div className="leftAlignDogInfo">
            <p>ID #:{dogData[id - 1].id}</p>
            <p>
              {" "}
              <BsGenderAmbiguous /> Gender: {dogData[id - 1].sex}
            </p>
            <p>
              {" "}
              <FiClock /> Age: {dogData[id - 1].age}
            </p>
            <p><FaDog/><FaDog/> Size: {dogData[id - 1].size}</p>
            <p><BsFillBarChartFill/> Activity Level: {dogData[id - 1].activity_level}</p>
            <p>
              <FaMapMarkedAlt /> Location: {dogData[id - 1].location}
            </p>
          </div>
        </div>}
      </div>
  

      <div className="dogphotos"></div>

      
    </div>
    
    
  );
}

export default DogProfile;
