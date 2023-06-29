import React, { useState } from "react";
import "./Form.css";
import AppFormImage from "../../Media/AppFormImage.jpg";
import { supabase } from "../../App.js";
import { uuid } from "@supabase/gotrue-js/dist/module/lib/helpers";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MyForm() {
  const [formData, setFormData] = useState({
    id: uuid(),
    first_name: "",
    last_name: "",
    dog_id: "",
    address: "",
    postcode: "",
    your_home: null,
    country: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
   
    
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({ ...prevData, your_home: file }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    console.log("i work")
    try {
      // Store form data in the Supabase table
      const { data, error } = await supabase
        .from("Application_Input")
        .insert([formData]);
        

      if (error) {
        console.error("Error inserting data:", error);
        console.log("i work2")
      } else {
        console.log("Data inserted successfully:", data);
        // Reset form data after successful submission
        setFormData({
          id: uuid(),
          first_name: "",
          last_name: "",
          dog_id: "",
          address: "",
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
  const navigate = useNavigate();
  const toComponentB=()=>{
    navigate("/ConfirmationScreen")
    window.scrollTo({ top: 0 });
      }
  return (
    
    <form onSubmit={handleSubmit}>
      <div className="form-container-w-image">
        <div className="applicationInstrictions-w-pic">
          <img
            src={AppFormImage}
            alt="happy dashund dog and boy"
            className="appFormImage"
          />
        </div>
        <div className="form-container">
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Dog ID:
            <input
              type="text"
              name="dog_id"
              value={formData.dog_id}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Postcode:
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your home (Video file input):
            <input
              type="file"
              name="homeVideo"
              accept="video/*"
              onChange={handleFileChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit"  onClick={()=>{toComponentB()}}>
              Submit
            </button>
          {/* <Link  to="/ConfirmationScreen"> */}
            {/* <button type="submit" onClick={() => window.scrollTo({ top: 0 })}>
              Submit
            </button> */}
          {/* </Link> */}
        </div>
      </div>
    </form>
  );
}
