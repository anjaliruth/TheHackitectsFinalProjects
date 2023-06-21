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
import SubmitForAdoption from "./components/SubmitForAdoption/SubmitForAdoption";

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
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage dogData={dogData || []} />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="submitAdoption" element={<SubmitForAdoption/>} />
        <Route path="info-pack" element={<InfoPack />} />
        <Route
          path="/:id"
          element={dogData && <DogProfile dogData={dogData} />}
        />

        {/* <Route path="/dogProfile" element={<DogProfile dogData={dogData} />} /> */}

        <Route path="application-form" element={<ApplicationForm />} />
        {/* Add more Route components for other paths */}
        <Route path="dogGrid" element={dogData &&<DogCard dogData={dogData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
