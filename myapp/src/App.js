
import logo from './logo.svg';
import './App.css';
import DogCard from './components/DogCard/DogCard.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">

    <DogCard/>
    <AboutUs/>
      <NavBar />
    </div>
  );
}
export default App;
