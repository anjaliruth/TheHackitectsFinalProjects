import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DogCard from "./components/DogCard/DogCard";
import AboutUs from "./components/AboutUs/AboutUs";
import InfoPack from "./components/InfoPack/InfoPack";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<DogCard />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="info-pack" element={<InfoPack />} />
        {/* Add more Route components for other paths */}
      </Routes>
    </div>
  );
}

export default App;
