

import DogProfile from "./components/DogProfile/DogProfile";
import './App.css';
import DogCard from './components/DogCard/DogCard.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
          <NavBar />
        <AboutUs/>

    <DogCard/>
      <DogProfile />

    </div>
  );
}
export default App;
