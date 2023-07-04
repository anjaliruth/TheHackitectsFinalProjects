import React from "react";
import "./ShelterCS.css";
import dogdogs from "../../Media/dogdogs.png";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export default function ShelterConfirmationScreen() {
  return (
    <div className="ShelterConfirmationScreen">
      <div className="backButtonDiv">
        <Link to="/Filter" className="backButton">
          <TiArrowBack />
          Back to the dogs
        </Link>
      </div>
     
      <h1 className="SuccessHeader">Success!</h1>
      <div className="ConfirmationPageContent">
        <img
          src={dogdogs}
          alt={"dog With a bowl"}
          className="dogWithBowlImage"
        />
        <p className="ConfirmationText">
          Thank you for sending us your dogs!. They will be uploded shortly.
          <br></br>
          <br></br>
          If you have any questions in the meantime, you can contact us test@test.com
        </p>
      </div>
    </div>
  );
}

