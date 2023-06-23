import React from "react";
import "./DogCard.css";
import { Link } from "react-router-dom";

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
      <div className="individualDogCard">
       
        {/* image, name, breed, location, sex, age, button */}
        <div className="dogGallery">
          {dogData.map((info, index) => (
            <div key={info.id} className="ind">
              <img
                src={info.dogPics[0]?.photoLink}
                alt="dog card"
                className="dogGridPhoto"
              />

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
                    <button className= "buttonstyling">More Info!</button>
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
