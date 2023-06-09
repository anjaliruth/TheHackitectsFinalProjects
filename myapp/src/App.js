import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.js";
import InfoPack from "./components/InfoPack/InfoPack";
import DogProfile from "./components/DogProfile/DogProfile";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import DogCard from "./components/DogCard/DogCard";
import Login from "./components/SubmitForAdoption/Login";
import Footer from "./components/Footer/Footer1";
import ConfirmationScreen from "./components/ConfirmationScreen/ConfirmationScreen";
import ShelterConfirmationScreen from "./components/ShelterCS/ShelterCS";
import Filter from "./components/HomePage/Filter";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

function App() {
  const [, setSession] = useState(null);
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    async function getDogData() {
      const { data } = await supabase.from("dogData").select(`
      *, 
      dogPics (*)
    `);
      setDogData(data);
      console.log(data);
    }

    getDogData();
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage dogData={dogData || []} />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="submitAdoption" element={<Login />} />
        <Route path="info-pack" element={<InfoPack />} />
        <Route
          path="/:id"
          element={dogData && <DogProfile dogData={dogData} />}
        />

        {/* <Route path="/dogProfile" element={<DogProfile dogData={dogData} />} /> */}

        <Route path="application-form" element={<ApplicationForm />} />
        {/* Add more Route components for other paths */}
        <Route
          path="dogGrid"
          element={dogData && <DogCard dogData={dogData} />}
        />

        <Route path="ConfirmationScreen" element={<ConfirmationScreen />} />
        <Route path="ShelterConfirmationScreen" element={<ShelterConfirmationScreen />} />


        <Route
          path="Filter"
          element={dogData && <Filter dogData={dogData} />}
        />
      </Routes>
      <Footer className="mainFooter" />
    </div>
  );
}

export default App;
