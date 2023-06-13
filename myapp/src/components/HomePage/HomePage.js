import React from 'react'
import DogCard from '../DogCard/DogCard.js'
export default function HomePage({dogData}) {
  return (
    <div>
    <DogCard dogData={dogData}/>
    </div>
  )
}
