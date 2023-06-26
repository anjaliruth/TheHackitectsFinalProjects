import React from "react";
import "./ConfirmationScreen.css";
import dogwithBowl from "../../Media/ConfirmationPageIcon.png";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
export default function ConfirmationScreen() {
  return (
    <div className="ConfirmationScreen">
      <div className="backButtonDiv">
        <Link to="/Filter" className="backButton">
          <TiArrowBack />
          Back to the dogs
        </Link>
      </div>
      {/* <div className="backButtonDiv">
        <Link to="/Filter" className="backButton">
          <TiArrowBack />
          Back to the dogs
        </Link>
      </div> */}
      <h1 className="SuccessHeader">Success!</h1>
      <div className="ConfirmationPageContent">
        <img
          src={dogwithBowl}
          alt={"dog With a bowl"}
          className="dogWithBowlImage"
        />
        <p className="ConfirmationText">
          Thank you for your Application. Your response has been submitted and
          we'll be in touch within the next week.
          <br></br>
          <br></br>
          If you have any questions in the meantime, you can contact us @
        </p>
      </div>
    </div>
  );
}
