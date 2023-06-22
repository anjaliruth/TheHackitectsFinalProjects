import React from "react";
import { useState } from "react";
import DogCard from "../DogCard/DogCard.js";
import "./Filter.css";

export default function Filter ({ dogData }) {

    const [ageFilter, setAgeFilter] = useState("All Ages");
    const [activityLevelFilter, setActivityLevelFilter] = useState(
      "All Activity Levels"
    );
    const [sizeFilter, setSizeFilter] = useState("All Sizes");
    const [sexFilter, setSexFilter] = useState("All Sexes");
    const [locationFilter, setLocationFilter] = useState("All Locations");

    const getAgeRange = (age) => {
        if (age >= 0 && age <= 1) {
          return "Puppy";
        } else if (age >= 2 && age <= 5) {
          return "Young";
        } else if (age >= 6 && age <= 9) {
          return "Mid";
        } else if (age >= 10) {
          return "Senior";
        }
        return "Unknown";
        };
        
        const filteredDogData = dogData.filter((dog) => {
            const dogAgeRange = getAgeRange(dog.age);
            return (
              (ageFilter === "All Ages" || dogAgeRange === ageFilter) &&
              (activityLevelFilter === "All Activity Levels" ||
                dog.activity_level === activityLevelFilter) &&
              (sizeFilter === "All Sizes" || dog.size === sizeFilter) &&
              (sexFilter === "All Sexes" || dog.sex === sexFilter) &&
              (locationFilter === "All Locations" || dog.location === locationFilter)
            );
          });

          


    return (
        <div>
        <div className="dummydiv"></div>
        {/* Dropdown filters */}
        <select name="Age" onChange={(e) => setAgeFilter(e.target.value)}>
          <option value="All Ages">All Ages</option>
          <option value="Puppy">Puppy (0-1 yrs)</option>
          <option value="Young">Young (2-5 yrs)</option>
          <option value="Mid">Mid (6-9 yrs)</option>
          <option value="Senior">Senior (10+)</option>
        </select>

        <select
          name="Activity Level"
          onChange={(e) => setActivityLevelFilter(e.target.value)}
        >
          <option value="All Activity Levels">All Activity Levels</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>

        <select name="Size" onChange={(e) => setSizeFilter(e.target.value)}>
          <option value="All Sizes">All Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <select name="Sex" onChange={(e) => setSexFilter(e.target.value)}>
          <option value="All Sexes">All Sexes</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          name="Location"
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="All Locations">All Locations</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Birmingham">Birmingham</option>
          <option value="Leicester">Leicester</option>
        </select>
      {filteredDogData.length > 0 ? (
        <DogCard dogData={filteredDogData} />
      ) : (
        <h1>No dogs matching the filters.</h1>
      )}
    </div>
  );
}
