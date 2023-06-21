import React, {useState} from 'react'
import { supabase } from "../../App.js";
import "./SubmitForAdoption.css";
import {uuid} from "@supabase/gotrue-js/dist/module/lib/helpers";
// import { Auth } from '@supabase/auth-ui-react'
// import {
//     ThemeSupa,
//   } from '@supabase/auth-ui-shared'

// async function login(email, password) {
//     const { user, error } = await supabase.auth.signIn({
//       email: email,
//       password: password
//     })
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(user)
//     }
//   }


export default function SubmitForAdoption() {
    const [userId, setUserId] = useState("")
    const [media, setMedia] = useState([])
    const [formData, setFormData] = useState({
        id: uuid(),
        first_name: "",
        last_name: "",
        dog_id: "",
        //COME BACK TON THIS ITS NOT DONE
      });
    

    //   async function getUserId(){
    //     try{
    //     const {data: {user}} = await supabase.getUser()
    // if (user!== null) {
    //     setUserId(user.id)
    // }
    // else{
    //     setUserId("")
    // }
    // }
    // catch (e){
    
    // }
    const getUser = async () => {

        try {
          const { data: { user } } = await supabase.auth.getUser()
          if (user !== null) {
            setUserId(user.id);
          } else {
            setUserId('');
          }
        } catch (e) {
        }
    useEffect (()=>
    {
    getUser()
    }, [userId])
    }
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ [name]: value });
      };
    
    //   const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setFormData((prevData) => ({ ...prevData, your_home: file }));
    //   };
    
      const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
    
        try {
          // Store form data in the Supabase table
          const { data, error } = await supabase
            .from("Application_Input")
            .insert([formData]);
    
          if (error) {
            console.error("Error inserting data:", error);
          } else {
            console.log("Data inserted successfully:", data);
            // Reset form data after successful submission
            setFormData({
              id: uuid(),
              name: "",
              breed: "",
              location: "",
              sex: "",
              postcode: "",
              your_home: null,
              country: "",
              city: "",
            });
          }
        } catch (error) {
          console.error("Error inserting data:", error);
        }
      };
    
      return (
        <div className="">
         {userId == '' ? <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      /> :
        <form onSubmit={handleSubmit}>
        <div className="offsetDiv"></div>
          <div className="form-container-w-image">
         
            <h4 className="application-instruction">
              Please enter your details below
            </h4>
    
            <div className="form-container">
              <label>
            Dog name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            
              <label>
               Breed:
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
               Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
               Sex:
                <input
                  type="text"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                />
              </label>
             
              <label>
                Activity Level:
                <input
                  type="text"
                  name="activity_level"
                  value={formData.activity_level}
                  onChange={handleChange}
                  required
                />
              </label>
              
              <label>
                Dog Photo:
                <input
                  type="file"
                  name="dogPics"
                  accept="image/*"
                  value=
                  onChange={handleFileChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
        }

        </div>
      );
}
