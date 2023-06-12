import React from "react";
import "./InfoPack.css";
import maisieImage1 from "../../Media/Maisie/WhatsApp Image 2023-06-03 at 11.20.07 (4).jpeg";
import millieImage1 from "../../Media/Millie/Screenshot 2023-06-05 at 11.52.23.png";
import neilImage1 from "../../Media/Neil/Screenshot 2023-06-05 at 12.25.36.png";

export default function InfoPack() {
  return (
    <>
      <div className="infoContainer">
        <section className="dogsrus">
          <div id="pageTitle">
            <h1 id="mainHeader">
              Our top tips on what to expect and how to care for your adopted
              dog
            </h1>
          </div>
          <h2 className="infoHeader">Do Your Research First</h2>
          <div id="paraImgContainer1">
            <div className="infoPackContent">
              <p id="para1">
                You’ll want to adopt a dog that is a good fit for your life.
                <br></br>
                <br></br>
                Think about whether you have space for a larger dog, if you have
                the time and ability to give a more energetic dog the exercise
                it needs.
                <br></br>
                <br></br>
                If you have children (or plan to) - consider which breeds are
                most child-friendly. Dogs can live from 10-20 years - this is a
                long-term commitment.
              </p>
            </div>
            <img id="masieImg" src={maisieImage1} alt="dog" />
          </div>
        </section>

        <section className="dogsrus">
          <h2 className="infoHeader">
            When You First Bring Home Your New Dog…
          </h2>
          <div id="paraImgContainer2">
            <div className="infoPackContent">
              <ul id="infoLi">
                <li>
                  Don’t pressure them - you need to start building trust and a
                  bond
                </li>
                <li>
                  Give them a safe space - such as a room or crate, where they
                  can retreat to if they need
                </li>
                <li>
                  Let them settle at their own pace - some will take longer than
                  others
                </li>
                <li>
                  Start as you mean to go on - if mealtimes are always the same
                  or you’ll be walking at the same time each day, or if there
                  are any areas of the house the dog won’t be able to access
                </li>
              </ul>
            </div>
            <div id="millieContainer">
              <img id="millieImg" src={millieImage1} alt="dog" />
            </div>
            {/* <div id="home">
              <h3 className="rotateText">HOME</h3>
            </div> */}
          </div>
        </section>

        <section className="dogsrus">
          <h2 className="infoHeader">Understand the Cost</h2>
          <div id="paraImgContainer3">
            <div className="infoPackContent">
              <p id="para3">
                It typically costs an average of £1,500 per year, but this can
                vary from dog to dog - depending on factors such as how much
                food they eat, whether they need regular grooming - even how
                regularly they destroy their toys!
              </p>
            </div>
            <img id="neilImg" src={neilImage1} alt="dog" />
          </div>
        </section>
      </div>
    </>
  );
}
