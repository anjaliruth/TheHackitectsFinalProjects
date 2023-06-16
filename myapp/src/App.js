import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.js";
import InfoPack from "./components/InfoPack/InfoPack";
import SwiperComp from "./components/Swiper/Swiper";
import DogProfile from "./components/DogProfile/DogProfile";
import {useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import fridaImage from "./Media/Frida/WhatsApp Image 2023-06-03 at 12.50.29.jpeg";
import georgeImage from "./Media/George/WhatsApp Image 2023-06-03 at 11.20.07.jpeg";
import maisieImage from "./Media/Maisie/WhatsApp Image 2023-06-03 at 11.15.30.jpeg";
import millieImage from "./Media/Millie/Screenshot 2023-06-05 at 11.52.23.png";
import neilImage from "./Media/Neil/Screenshot 2023-06-05 at 12.24.23.png";
import sookieImage from "./Media/Sookie/Screenshot 2023-06-08 at 10.48.30.png";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";


const supabase = createClient("https://ufjunsgwcenjcnrrubci.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmanVuc2d3Y2VuamNucnJ1YmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4Mjg1NzcsImV4cCI6MjAwMjQwNDU3N30.TbQDVBqgY3X-tz0r8_EBd5WqsWCrZCPBu3INjOHy5kA");




function App() {

  const [session, setSession] = useState(null)
  const [dogData, setDogData] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])
    
    useEffect(()=>{

    async function getDogData(){
      const { data, error } = await supabase
      .from('dogData')
      .select('*')
      setDogData(data)
     
    

    }
    getDogData()},[])

    useEffect(()=>{

      async function getDogPics(){
        const { data, error } = await supabase
        .from('dogPics2')
        .select('photoLink')
        setDogData(data)
       
      
  
      }
      getDogPics()},[])
        
      



    
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
        <Route path="/:id" element={<DogProfile dogData={dogData} />} />
        <Route path="/dogProfile" element={<DogProfile dogData={dogData} />} />
        <Route path="application-form" element={<ApplicationForm />} />
        {/* Add more Route components for other paths */}
      </Routes>
    </div>
  );
}

export default App;

