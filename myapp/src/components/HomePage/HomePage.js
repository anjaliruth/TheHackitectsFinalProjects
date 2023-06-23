import React from "react";
import "./HomePage.css";
// import DogCard from "../DogCard/DogCard.js";
import downarrow from "../../Media/downarrow.com.png";
import Filter from "./Filter";

export default function HomePage({ dogData }) {
  // Filter the dog data based on the selected filters

  return (
    <div>
      <section className="section1">
        <div className="homePage">
          <h2 className="homePageTitle">
            Paws For Affection,<br></br> Your Companion in Adopting a Fur-ever
            friend.
          </h2>
        </div>
        <div className="scrollForDogs">
          <h3>Scroll down for dogs!</h3>

          <img
            src={downarrow}
            onClick={() => {
              window.scrollTo(0, 1000);
            }}
            id="scrollArrow"
            alt="scroll down arrow"
          ></img>
        </div>
      </section>
      <Filter dogData={dogData} />
    </div>
  );
}
