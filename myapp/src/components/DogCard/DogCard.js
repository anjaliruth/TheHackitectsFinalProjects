
import React from "react";
import { useState } from "react";
import "./DogCard.css";
import fridaImage from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.29.jpeg";
import georgeImage from "../../Media/George/WhatsApp Image 2023-06-03 at 11.20.07.jpeg";
import maisieImage from "../../Media/Maisie/WhatsApp Image 2023-06-03 at 11.15.30.jpeg";
import millieImage from "../../Media/Millie/Screenshot 2023-06-05 at 11.52.23.png";
import neilImage from "../../Media/Neil/Screenshot 2023-06-05 at 12.24.23.png";
import sookieImage from "../../Media/Sookie/Screenshot 2023-06-08 at 10.48.30.png";

import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

// const dogData = [
//   {
//     id: 1,
//     photo: fridaImage,
//     name: "Frida",
//     breed: "Pug",
//     location: "London",
//     sex: "Female",
//     age: 5,
//   },
//   {
//     id: 2,
//     photo: georgeImage,
//     name: "George",
//     breed: "Mixed Breed",
//     location: "Manchester",
//     sex: "Male",
//     age: 4,
//   },
//   {
//     id: 3,
//     photo: maisieImage,
//     name: "Maisie",
//     breed: "Springer Spaniel",
//     location: "Birmingham",
//     sex: "Female",
//     age: 2,
//   },
//   {
//     id: 4,
//     photo: millieImage,
//     name: "Millie",
//     breed: "Lurcher",
//     location: "London",
//     sex: "Female",
//     age: 7,
//   },
//   {
//     id: 5,
//     photo: neilImage,
//     name: "Neil",
//     breed: "Greyhound",
//     location: "Leicester",
//     sex: "Male",
//     age: 7,
//   },
//   {
//     id: 6,
//     photo: sookieImage,
//     name: "Sookie",
//     breed: "Schnauzer",
//     location: "Newcastle",
//     sex: "Female",
//     age: 6,
//   },
// ];

export default function DogCard({ dogData }) {
  // console.log("here:", dogData);
  if (!dogData) {
    return null; // or you can render a loading indicator or fallback component
  }
  return (
    <div>
      <HomePage />

      <div className="individualDogCard">
        <h1 className="dogCardTitle">
          Connecting you to dogs available for adoption today...
        </h1>
        {/* image, name, breed, location, sex, age, button */}
        <div className="dogGallery">
          {dogData.map((info, index) => (
            <div key={index} className="ind">
              <img src={info.photo} alt="dog card" className="dogGridPhoto" />

              <div className="indDogDatawButton">
                <div className="indDogData">
                  <h2 className="dogName">{info.name}</h2>
                  <p>{info.breed}</p>
                  <p>{info.location}</p>
                  <p>
                    {info.sex}, {info.age}
                  </p>
                </div>
                <div className="moreInfoButton">
                  <Link to={`/${info.id}`}>
                    <button>More Info!</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}