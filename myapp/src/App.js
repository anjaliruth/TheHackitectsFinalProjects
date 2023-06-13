import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DogCard from "./components/DogCard/DogCard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<DogCard />} />
        {/* Add more Route components for other paths */}
      </Routes>
    </div>
  );
}

export default App;
