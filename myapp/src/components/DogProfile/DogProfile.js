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
                <TiArrowBack aria-hidden="true" />
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
                  <IoPaw aria-hidden="true" /> <strong> Breed: </strong>{" "}
                  {dog.breed}
                </p>
                <p>
                  {" "}
                  <FaTransgender aria-hidden="true" /> <strong> Gender:</strong>{" "}
                  {dog.sex}
                </p>

                <p>
                  {" "}
                  <strong>
                    <ImClock aria-hidden="true" /> Age:
                  </strong>{" "}
                  {dog.age}
                </p>
                <p>
                  <FaDog aria-hidden="true" className="smalldog" />
                  <FaDog aria-hidden="true" className="bigdog" />{" "}
                  <strong>Size:</strong> {dog.size}
                </p>
                <p>
                  <BsFillBarChartFill aria-hidden="true" />{" "}
                  <strong>Activity Level: </strong>
                  {dog.activity_level}
                </p>
                <p>
                  <FaMapMarkedAlt aria-hidden="true" />
                  <strong> Location:</strong> {dog.location}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="dogProfileDescription">
          <h1> Support & health</h1>
          <h2> Am I Toilet Trained?</h2>
          <p>{dog.toilet_trained}</p>
          <h2> Can I be left alone?</h2>
          <p>{dog.left_alone}</p>
          <h2> Do I have any medical conditions? </h2>
          <p>{dog.medical_conditions}</p>
        </div>

        <div className="dogProfileDescription2">

          <h1> Who I can live with</h1>
     

          <h2> Can I live with children?</h2>
          <p>{dog.live_with_children}</p>
          <h2> Can I live with cats?</h2>
          <p>{dog.live_with_cats}</p>
          <h2> Can I live with other dogs?</h2>
          <p>{dog.live_with_dogs}</p>
        </div>

        <div className="dogProfileDescription3">
          <h1> Additional info</h1>
          <p className="additionalInfo">{dog.additional_info}</p>
          <br></br>
          </div>
      </div>
    </>
  );
}

export default DogProfile;
