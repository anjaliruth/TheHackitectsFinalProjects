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
  const { id } = useParams();
  return (
    <div className="totalDogInfo" >
     <div className="offsetdiv">   </div>

      <div className="dogInfo">
        <p >{dogData[id-1].id}</p>
        <h1>Dog Name: {dogData[id-1].name}</h1>
        <p> <BsGenderAmbiguous/> Gender: {dogData[id-1].sex}</p>
        <p> <FiClock/> Age: {dogData[id-1].age}</p>
    <div className="dogProfile">
      <div className="buttons">
        <button className="button1">Adopt Me!</button>
        <button className="button2">How To Care For Me</button>
      </div>
      <div className="dogProfile">
        <p>{dogData[id - 1].id}</p>
        <p>Dog Name: {dogData[id - 1].name}</p>
        <p>
          <BsGenderAmbiguous /> Gender: {dogData[id - 1].sex}
        </p>
        <p>
          <FiClock /> Age: {dogData[id - 1].age}
        </p>
        {/* <p><FaDog/><FaDog/> Size: {info.}</p> */}
        {/* <p><BsFillBarChartFill/> Activity Level: "props"</p> */}
        <p>
          <FaMapMarkedAlt /> Location: {dogData[id - 1].location}
        </p>
      </div>
      {/* ))} */}
      <SwiperComp />

      <div className="dogphotos">
      
        <div className="banner">
          <p>Placeholder text</p>
          <p>Placeholder text</p>


          <button className="button1">Adopt Me!</button>
          <button className="button2">How To Care For Me</button>
        </div>
      </div>

      {/* <div className="dogInfo">
          <p>ID</p>
          <h1>Dog Name: "props"</h1>
          <p>
            {" "}
            <BsGenderAmbiguous /> Gender: "props"
          </p>
          <p>
            {" "}
            <FiClock /> Age: "props"
          </p>
          <p>
            <FaDog />
            <FaDog /> Size: "props"
          </p>
          <p>
            <BsFillBarChartFill /> Activity Level: "props"
          </p>
          <p>
            <FaMapMarkedAlt /> Location: "props"
          </p>
        </div> */}
    </div>
    </div>
    </div>
  );
}

export default DogProfile;
