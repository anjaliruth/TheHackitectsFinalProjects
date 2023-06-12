import logo from "./logo.svg";
import "./App.css";
import DogCard from "./components/DogCard/DogCard.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DogCard />
      <AboutUs />
    </div>
  );
}
export default App;
