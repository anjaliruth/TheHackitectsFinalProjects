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

const supabase = createClient(
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
      dogPics ( id, photoLink )
    `);
      setDogData(data);
      console.log(data);
    }

    getDogData();
  }, []);

  // useEffect(()=>
  // async function getDogData(){
  //   const response = await fetch("https://app.supabase.com/project/ufjunsgwcenjcnrrubci/settings/api")
  //   console.log("response",response)
  //   console.log("response",response)
  //   console.log("hello")
  // }, [])

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage dogData={dogData} />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="info-pack" element={<InfoPack />} />
        <Route
          path="/:id"
          element={dogData && <DogProfile dogData={dogData} />}
        />

        {/* <Route path="/dogProfile" element={<DogProfile dogData={dogData} />} /> */}

        <Route path="application-form" element={<ApplicationForm />} />
        {/* Add more Route components for other paths */}
      </Routes>
    </div>
  );
}

export default App;
