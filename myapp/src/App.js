import "./App.css";

import NavBar from "./components/NavBar/NavBar";

import DogGrid from "./components/DogGrid/DogGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<DogGrid />} />
        {/* <AboutUs />
        <ApplicationForm />
        <InfoPack /> */}
      </Routes>
    </Router>
  );
}
export default App;
