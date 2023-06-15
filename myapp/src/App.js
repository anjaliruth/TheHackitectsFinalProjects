import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.js";
import InfoPack from "./components/InfoPack/InfoPack";
import DogProfile from "./components/DogProfile/DogProfile";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import fridaImage from "./Media/Frida/WhatsApp Image 2023-06-03 at 12.50.29.jpeg";
import Frida1 from "./Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28 (1).jpeg";
import Frida2 from "./Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28.jpeg";
import Frida4 from "./Media/Frida/WhatsApp Image 2023-06-03 at 12.50.30.jpeg";
import Frida5 from "./Media/Frida/WhatsApp Image 2023-06-03 at 12.50.36.jpeg";
import georgeImage from "./Media/George/WhatsApp Image 2023-06-03 at 11.20.07.jpeg";
import George1 from "./Media/George/WhatsApp Image 2023-06-03 at 11.12.17.jpeg";
import George2 from "./Media/George/WhatsApp Image 2023-06-03 at 11.12.27.jpeg";
import George3 from "./Media/George/WhatsApp Image 2023-06-03 at 11.20.07 (1).jpeg";
import George4 from "./Media/George/WhatsApp Image 2023-06-03 at 11.20.07 (2).jpeg"; 
import George5 from "./Media/George/WhatsApp Image 2023-06-03 at 11.20.07 (3).jpeg"; 
import maisieImage from "./Media/Maisie/WhatsApp Image 2023-06-03 at 11.15.30.jpeg";
import Maisie1 from "./Media/Maisie/WhatsApp Image 2023-06-03 at 11.20.06.jpeg";
import Maisie2 from "./Media/Maisie/WhatsApp Image 2023-06-03 at 11.20.07 (4).jpeg";
import Maisie3 from "./Media/Maisie/WhatsApp Image 2023-06-03 at 11.20.07.jpeg";  
import millieImage from "./Media/Millie/Screenshot 2023-06-05 at 11.52.23.png";
import Millie1 from "./Media/Millie/Screenshot 2023-06-05 at 11.50.36.png";
import Millie2 from "./Media/Millie/Screenshot 2023-06-05 at 11.51.06.png";
import Millie3 from "./Media/Millie/Screenshot 2023-06-05 at 11.52.58.png";
import Millie4 from "./Media/Millie/Screenshot 2023-06-05 at 12.10.24.png";
import Millie5 from "./Media/Millie/Screenshot 2023-06-05 at 12.11.28.png";
import Millie6 from "./Media/Millie/Screenshot 2023-06-06 at 12.16.46.png";
import neilImage from "./Media/Neil/Screenshot 2023-06-05 at 12.24.23.png";
import Neil1 from "./Media/Neil/Screenshot 2023-06-05 at 12.25.22.png";
import Neil2 from "./Media/Neil/Screenshot 2023-06-05 at 12.25.36.png";
import Neil3 from "./Media/Neil/Screenshot 2023-06-05 at 12.25.52.png";
import Neil4 from "./Media/Neil/Screenshot 2023-06-05 at 12.26.05.png";
import Neil5 from "./Media/Neil/Screenshot 2023-06-05 at 12.26.46.png";
import sookieImage from "./Media/Sookie/Screenshot 2023-06-08 at 10.48.30.png";
import Sookie1 from "./Media/Sookie/Screenshot 2023-06-08 at 10.47.58.png";
import Sookie2 from "./Media/Sookie/Screenshot 2023-06-08 at 10.48.42.png";
import Sookie3 from "./Media/Sookie/WhatsApp Image 2023-06-05 at 17.30.35.jpeg";
import Sookie4 from "./Media/Sookie/WhatsApp Image 2023-06-05 at 17.31.10.jpeg";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";

const dogData = [
  {
    id: 1,
    photo: [fridaImage, Frida1, Frida2, Frida4, Frida5],
    name: "Frida",
    breed: "Pug",
    location: "London",
    sex: "Female",
    age: 5,
  },
  {
    id: 2,
    photo: [georgeImage, George1, George2, George3, George4, George5],
    name: "George",
    breed: "Mixed Breed",
    location: "Manchester",
    sex: "Male",
    age: 4,
  },
  {
    id: 3,
    photo: [maisieImage, Maisie1, Maisie2, Maisie3],
    name: "Maisie",
    breed: "Springer Spaniel",
    location: "Birmingham",
    sex: "Female",
    age: 2,
  },
  {
    id: 4,
    photo: [millieImage, Millie1, Millie2, Millie3, Millie4, Millie5, Millie6],
    name: "Millie",
    breed: "Lurcher",
    location: "London",
    sex: "Female",
    age: 7,
  },
  {
    id: 5,
    photo: [neilImage, Neil1, Neil2, Neil3, Neil4, Neil5],
    name: "Neil",
    breed: "Greyhound",
    location: "Leicester",
    sex: "Male",
    age: 7,
  },
  {
    id: 6,
    photo: [sookieImage, Sookie1, Sookie2, Sookie3, Sookie4],
    name: "Sookie",
    breed: "Schnauzer",
    location: "Newcastle",
    sex: "Female",
    age: 6,
  },
];

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage dogData={dogData} />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="info-pack" element={<InfoPack />} />
        <Route path="/:id" element={<DogProfile dogData={dogData} />} />
        {/* <Route path="/:dogProfile" element={<DogProfile dogData={dogData} />} /> */}
        <Route path="application-form" element={<ApplicationForm />} />
        {/* Add more Route components for other paths */}
      </Routes>
    </div>
  );
}

export default App;
