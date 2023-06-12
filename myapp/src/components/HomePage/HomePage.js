import React from 'react'
import homePage from "../../Media/PFAHomePage.jpg"
import "./HomePage.css"
export default function HomePage() {
  return (
    
    <div className="homePage">
      <h2 className="homePageTitle">Paws For Affection, Your Companion in Adoptiong a Fur-ever friend.</h2>
    <img src={homePage} alt=" girl holding dog on leash" className="homepagePic"/>
    </div>
  )
}
