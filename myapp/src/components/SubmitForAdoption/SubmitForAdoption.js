import React, { useState } from "react";
import { supabase } from "../../App";
import "./SubmitForAdoption.css";
import { v4 as uuidv4 } from "uuid";

export default function SubmitForAdoption({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    location: "",
    sex: "",
    activity_level: "",
    size: "",
    age: "",
  });
  //
  async function uploadImage(e) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("dogDataPics")
      .upload(user + "/" + uuidv4(), file);

    if (data) {
      // Perform any necessary actions after successful upload
    } else {
      console.log(error);
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Store form data in the Supabase table
      const { data, error } = await supabase.from("dogData").insert([formData]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
        // Reset form data after successful submission
        setFormData({
          name: "",
          breed: "",
          location: "",
          sex: "",
          activity_level: "",
          size: "",
          age: "",
        });
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div className="">
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
              Size:
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Age:
              <input
                type="text"
                name="age"
                value={formData.age}
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
                onChange={(e) => uploadImage(e)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
