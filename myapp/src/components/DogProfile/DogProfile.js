import PhotoCarousel from "./PhotoCarousel.js";
import "./DogProfile.css";
import { Link, useParams } from "react-router-dom";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FaDog } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import SwiperComp from "../Swiper/Swiper.js";

// this page breaks because the dogData is not being
// passed in from the App.js and is null when refreshed

function DogProfile({ dogData }) {
  const { id } = useParams();
  // fin the dog object with this id
  const dog = dogData.find((dog) => dog.id === parseInt(id));
  console.log(dog);

  if (!dogData) {
    return null;
  }

  return (
    <div className="totalDogInfo">
      <div className="offsetdiv"> </div>
      <div className="swiper">
        <SwiperComp dogData={dog} />
      </div>

      <div className="dogInfo">
        <div className="dogProfileButtons">
          <Link to="/application-form">
            <button className="button1">Adopt Me!</button>
          </Link>
          <Link to="/info-pack">
            <button className="button2">How To Care For Me</button>
          </Link>
        </div>

        {dogData && (
          <div className="dogStats">
            <h1>{dog.name}</h1>
            <div className="leftAlignDogInfo">
              <p>ID #:{dog.id}</p>
              <p>
                {" "}
                <BsGenderAmbiguous /> Gender: {dog.sex}
              </p>

              <p>
                {" "}
                <FiClock /> Age: {dog.age}
              </p>
              <p>
                <FaDog />
                <FaDog /> Size: {dog.size}
              </p>
              <p>
                <BsFillBarChartFill /> Activity Level: {dog.activity_level}
              </p>
              <p>
                <FaMapMarkedAlt /> Location: {dog.location}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DogProfile;
