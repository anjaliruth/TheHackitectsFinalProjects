import React, { useState, useEffect } from "react";
import { supabase } from "../../App";
import "./SubmitForAdoption.css";
import { uuid } from "@supabase/gotrue-js/dist/module/lib/helpers";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function SubmitForAdoption() {
  const [userId, setUserId] = useState("");
  const [media, setMedia] = useState([]);
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    breed: "",
    location: "",
    sex: "",
    activity_level: "",
    dogPics: "",
  });

  const getUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user !== null) {
        setUserId(user.id);
      } else {
        setUserId("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  async function uploadImage(e) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("dogDataPics")
      .upload(userId + "/" + uuid(), file);
    if (data) {
    } else {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
          activity_level: "",
          dogPics: "",
        });
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div className="">
      {userId !== "" ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      ) : (
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
                  onChange={(e) => uploadImage(e)}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
