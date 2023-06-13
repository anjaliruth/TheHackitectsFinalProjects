import PhotoCarousel from "./PhotoCarousel.js";
import "./DogProfile.css";
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { FaDog } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
// AHAHAAHAHAAHAHAHAHAAHA



function DogProfile({dogData}) {
  return (
    <div>
      <PhotoCarousel />
      <div className="bannerTagLine">
        <p>Placeholder text</p>
        <p>Placeholder text</p>
      </div>

      <div className="buttons">
      <button className="button1">Adopt Me!</button>
      <button className="button2">How To Care For Me</button>
      </div>
    {  dogData.map((info, index) => (
      <div className="dogProfile">
        <p>{info.id}</p>
        <h1>Dog Name: {info.name}</h1>
        <p> <BsGenderAmbiguous/> Gender: {info.sex}</p>
        <p> <FiClock/> Age: {info.age}</p>
        {/* <p><FaDog/><FaDog/> Size: {info.}</p> */}
        {/* <p><BsFillBarChartFill/> Activity Level: "props"</p> */}
        <p><FaMapMarkedAlt/> Location: {info.location}</p>
        </div>))}
        

    </div>
  );
}

export default DogProfile;
