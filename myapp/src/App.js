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
import maisieImage from "./Media/Maisie/WhatsApp Image 2023-06-03 at 11.15.30.jpeg";
import millieImage from "./Media/Millie/Screenshot 2023-06-05 at 11.52.23.png";
import neilImage from "./Media/Neil/Screenshot 2023-06-05 at 12.24.23.png";
import sookieImage from "./Media/Sookie/Screenshot 2023-06-08 at 10.48.30.png";
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
    photo: georgeImage,
    name: "George",
    breed: "Mixed Breed",
    location: "Manchester",
    sex: "Male",
    age: 4,
  },
  {
    id: 3,
    photo: maisieImage,
    name: "Maisie",
    breed: "Springer Spaniel",
    location: "Birmingham",
    sex: "Female",
    age: 2,
  },
  {
    id: 4,
    photo: millieImage,
    name: "Millie",
    breed: "Lurcher",
    location: "London",
    sex: "Female",
    age: 7,
  },
  {
    id: 5,
    photo: neilImage,
    name: "Neil",
    breed: "Greyhound",
    location: "Leicester",
    sex: "Male",
    age: 7,
  },
  {
    id: 6,
    photo: sookieImage,
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
