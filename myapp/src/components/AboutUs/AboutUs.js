import React from "react";
import sookieImage from "../../Media/Sookie/Screenshot 2023-06-08 at 10.48.42.png";
import fridaImage from "../../Media/Frida/WhatsApp Image 2023-06-03 at 12.50.28.jpeg";
import georgeImage from "../../Media/George/WhatsApp Image 2023-06-03 at 11.12.17.jpeg";
import "./AboutUs.css";

//adding comments here to test git
export default function AboutUs() {
  return (
    <div>
      <div className="dummyDiv"></div>
      <h1 className="aboutUsHeading">About Us</h1>

      <div className="section">
        <h2 className="aboutUsSubheading">Who We Are</h2>
        <div className="aboutUsParas">
          <p id="aboutp1" className="aboutUsPara">
            At Paws For Affection, our mission is to connect shelters and
            potential adopters through our compassionate marketplace,
            facilitating the adoption process for dogs in need. With our
            innovative web app, we provide a database of available dogs, making
            it easier for adopters to find their perfect companion.
          </p>

          <img
            className="aboutuspic"
            id="sookiePic"
            src={sookieImage}
            alt="A gray and white Schnauzer laying on a bed"
          />
        </div>
      </div>

      <div className="section">
        <h2 className="aboutUsSubheading">What We Do</h2>
        <div className="aboutUsParas">
          <img
            className="aboutuspic"
            id="fridaPic"
            src={fridaImage}
            alt="A pug in a christmas sweater in the snow"
          />
          <p id="aboutp2" className="aboutUsPara">
            We are dedicated to ensuring that every adoption is a success. Our
            rigorous vetting process allows us to identify qualified adopters
            who can provide a safe and nurturing environment for their new pet.
            Once approved, we refer them to their chosen shelter, reducing the
            burden on shelters and increasing the likelihood of successful
            matches.<br></br>
            <br></br>
            Our user-friendly platform minimises unnecessary visits to shelters,
            saving time and resources for both adopters and shelters. By
            streamlining the adoption process, we create a more efficient and
            enjoyable experience for everyone involved.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="aboutUsSubheading">Why We Do It</h2>
        <div className="aboutUsParas">
          <p className="aboutUsPara">
            At Paws For Affection, we are committed to improving the lives of
            shelter dogs and promoting responsible pet ownership. Through
            technology and compassion, we aim to make a positive and lasting
            impact in the world of pet adoption. Join us in building a community
            that fosters lifelong bonds between dogs and their adoptive
            families.
          </p>
          <img
            className="aboutuspic"
            id="georgePic"
            src={georgeImage}
            alt="A black and brown mixed breed dog laying in the grass"
          />
        </div>
      </div>
    </div>
  );
}
