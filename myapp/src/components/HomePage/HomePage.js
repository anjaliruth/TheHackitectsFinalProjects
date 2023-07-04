import React from "react";
import "./HomePage.css";
// import DogCard from "../DogCard/DogCard.js";
import downarrow from "../../Media/downarrow.com.png";
import Filter from "./Filter";

export default function HomePage({ dogData }) {
  // Filter the dog data based on the selected filters

  return (
    <div>

      <div className="section1">
      <div className="dummyDiv"></div>
        <div className="tryHere">
          <div className="catchphrase">
            <h2 className="homePageTitle">
              Paws For Affection,<br aria-hidden="true"></br> Your Companion in
              Adopting a Fur-ever friend.
            </h2>
          </div>
          <div className="scrollForDogs-with-arrow">
            <h3 className="scrollTag">Scroll down for dogs!</h3>

            <a href="#dogGridTitle">
              <img
                src={downarrow}
                id="scrollArrow"
                alt="scroll down arrow"
              ></img>
            </a>
          </div>

        </div>
      </div>
      <Filter dogData={dogData} />
    </div>
  );
}
