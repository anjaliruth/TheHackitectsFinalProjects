

import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DogCard from "./components/DogCard/DogCard";
import logo from "./logo.svg";
import "./App.css";
import DogCard from "./components/DogCard/DogCard.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import InfoPack from "./components/InfoPack/InfoPack";

function App() {
  return (
    <div className="App">
      <InfoPack />




import DogProfile from "./components/DogProfile/DogProfile";
import AboutUs from "./components/AboutUs/AboutUs";
import InfoPack from "./components/InfoPack/InfoPack";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import fridaImage from "./Media/Frida/WhatsApp Image 2023-06-03 at 12.50.29.jpeg";
import georgeImage from "./Media/George/WhatsApp Image 2023-06-03 at 11.20.07.jpeg";
import maisieImage from "./Media/Maisie/WhatsApp Image 2023-06-03 at 11.15.30.jpeg";
import millieImage from "./Media/Millie/Screenshot 2023-06-05 at 11.52.23.png";
import neilImage from "./Media/Neil/Screenshot 2023-06-05 at 12.24.23.png";
import sookieImage from "./Media/Sookie/Screenshot 2023-06-08 at 10.48.30.png";


import logo from './logo.svg';
import './App.css';
import DogCard from './components/DogCard/DogCard.js'
import AboutUs from './components/AboutUs/AboutUs.js'

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage.js";


const dogData = [
  {
    id: 1,
    photo: fridaImage,
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
        <Route path="/" element={<HomePage dogData={dogData}/>} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="info-pack" element={<InfoPack />} />
        <Route path="/:dogProfile" element={<DogProfile dogData={dogData}/>} />
        {/* Add more Route components for other paths */}
      </Routes>

    <div className="App"
      <NavBar />
      <AboutUs />
    <DogCard/>
      <DogProfile />

    </div>
  );
}

export default App;
