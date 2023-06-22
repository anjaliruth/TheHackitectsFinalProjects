import React, { useState } from "react";
import "./HomePage.css";
import DogCard from "../DogCard/DogCard.js";
import Filter from "./Filter";

export default function HomePage({ dogData }) {

  // Filter the dog data based on the selected filters
  
  return (
    <div>
      <section className="section1">
        <div className="homePage">
          <h2 className="homePageTitle">
            Paws For Affection, Your Companion in Adopting a Fur-ever friend.
          </h2>
        </div>
       
      </section>
      <Filter dogData={dogData} />
      </div>
  );
}
  