// import PhotoCarousel from "./PhotoCarousel.js";
import "./DogProfile.css";
import { Link, useParams } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import SwiperComp from "../Swiper/Swiper.js";
import { TiArrowBack } from "react-icons/ti";
import { IoPaw } from "react-icons/io5";
import { ImClock } from "react-icons/im";
import { FaTransgender } from "react-icons/fa";

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
    <>
   
      <div className="paddingdiv">
        <div className="totalDogInfo">
          <div className="swiperandbuttons">
          <div className="dummyDiv"></div>
            <div className="backbutondiv">
              <Link to="/Filter" className="backButton">
                <TiArrowBack />
                Back to the dogs
              </Link>
            </div>
            <div className="swiper">
              <SwiperComp dogData={dog} />
            </div>

            <div className="dogProfileButtons">
              <Link to="/application-form">
                <button className="button1">Adopt Me!</button>
              </Link>
              <Link to="/info-pack">
                <button className="button2">Adoption Tips</button>
              </Link>
            </div>
          </div>

          {dogData && (
            <div className="dogStats">
              <h1 id="dogname">
                <strong>{dog.name}</strong>
              </h1>
              <div className="leftAlignDogInfo">
                <p>
                  {" "}
                  <strong>ID #:</strong>
                  {dog.id}
                </p>
                <p>
                  <IoPaw /> <strong> Breed: </strong> {dog.breed}
                </p>
                <p>
                  {" "}
                  <FaTransgender /> <strong> Gender:</strong> {dog.sex}
                </p>

                <p>
                  {" "}
                  <strong>
                    <ImClock /> Age:
                  </strong>{" "}
                  {dog.age}
                </p>
                <p>
                  <FaDog className="smalldog" />
                  <FaDog className="bigdog" /> <strong>Size:</strong> {dog.size}
                </p>
                <p>
                  <BsFillBarChartFill /> <strong>Activity Level: </strong>
                  {dog.activity_level}
                </p>
                <p>
                  <FaMapMarkedAlt />
                  <strong> Location:</strong> {dog.location}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="dogProfileDescription">
          <h1> Support & health</h1>
          <p> Am I Toliet Trained?</p>
          <h2>{dog.toilet_trained}</h2>
          <p> Can I be left alone?</p>
          <h2>{dog.left_alone}</h2>
          <p> Do I have any medical conditions? </p>
          <h2>{dog.medical_conditions}</h2>
          <p></p>
        </div>

        <div className="dogProfileDescription2">
          <h1> Who can I live with? </h1>
          
          <h2> Can I live with children?</h2>
          <p>{dog.live_with_children}</p>
          <h2> Can I live with cats?</h2>
          <p>{dog.live_with_cats}</p>
          <h2> Can I live with other dogs?</h2>
          <p>{dog.live_with_dogs}</p>
          <h2> Can I live with other small animals?</h2>
          <p></p>
          <h2> Additional info</h2>
          <p className="additionalInfo">{dog.additional_info}</p>
        </div>

        <div className="dogProfileDescription3">
          <h1> About {dog.name}</h1>
          <h2> What kind of family am I looking for?</h2>
          <p></p>
          <h2> What type of environment would suit me?</h2>
          <p></p>
          <p> About</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default DogProfile;
