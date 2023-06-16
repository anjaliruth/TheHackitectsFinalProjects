import React from 'react'
import "./HomePage.css"
import DogCard from '../DogCard/DogCard.js'
export default function HomePage({dogData}) {
  return (
    <div>
    <DogCard dogData={dogData}/>

    <>
<section className="section1">
<div className="homePage">
  <h2 className="homePageTitle">Paws For Affection, Your Companion in Adopting a Fur-ever friend.</h2>
</div>
</section>
</>
    </div>


  )
}


