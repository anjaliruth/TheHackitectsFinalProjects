import React from "react";
const dogData = [
  {
    id: 1,
    name: "Frida",
    breed: "Pug",
    location: "London",
    sex: "Female",
    age: 5,
  },
  {
    id: 2,
    name: "George",
    breed: "Mixed",
    location: "Manchester",
    sex: "Male",
    age: 4,
  },
  {
    id: 3,
    name: "Maisie",
    breed: "Springer Spaniel",
    location: "Birmingham",
    sex: "Female",
    age: 2,
  },
  {
    id: 4,
    name: "Millie",
    breed: "Lurcher",
    location: "London",
    sex: "Female",
    age: 7,
  },
  {
    id: 5,
    name: "Neil",
    breed: "Greyhound",
    location: "Leicester",
    sex: "Male",
    age: 7,
  },
  {
    id: 6,
    name: "Sookie",
    breed: "Schnauzer",
    location: "Newcastle",
    sex: "Female",
    age: 6,
  },
];


export default function DogCard() {
  return <div className="individualDogCard">
{/* image, name, breed, location, sex, age, button */}
{dogData.map((info, index)=>
<div key={index}>
  <h2>{info.name}</h2>
  <p>{info.breed}</p>
  <p>{info.sex}</p>
  <p>{info.age}</p>
  <button>More Info</button>
</div>
)}
  </div>;
}
