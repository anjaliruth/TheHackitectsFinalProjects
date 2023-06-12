import React from 'react';
import maisieImage1 from "../../Media/Maisie/WhatsApp Image 2023-06-03 at 11.20.07 (4).jpeg";
import millieImage1 from "../../Media/Millie/Screenshot 2023-06-05 at 11.52.23.png";
import neilImage1 from "../../Media/Neil/Screenshot 2023-06-05 at 12.25.36.png";



export default function InfoPack() {
  return (
    <>

    <h1>Our top tips on what to expect and how to care for your adopted dog</h1>
   

    <section classname="dogResearch">
    <h2>Do Your Research First</h2>
    <div className="infoPackPara">
    <p>You’ll want to adopt a dog that is a good fit for your life. Think about whether you have space for a larger dog, if you have the time and ability to give a more energetic dog the exercise it needs, and if you have children (or plan to) - which breeds are most child-friendly. Dogs can live from 10-20 years - this is a long-term commitment.</p>
    </div>
    <img src={maisieImage1} alt="dog" />
    </section>

    <section classname="dogHome">
    <h2>When You First Bring Home Your New Dog…</h2>
    <div className="infoPackPara">
    <ul><li>Don’t pressure them - you need to start building  trust and a bond</li>
    <li>Give them a safe space - such as a room or crate, where they can retreat to if they need</li>
    <li>Let them settle at their own pace - some will take longer than others</li>
    <li>Start as you mean to go on - if mealtimes are always the same or you’ll be walking at the same time each day, or if there are any areas of the house the dog won’t be able to access</li></ul>
    </div>
    <img src={maisieImage1} alt="dog" />
    </section>

    <section classname="dogResearch">
    <h2>Do Your Research First</h2>
    <div className="infoPackPara">
    <p>You’ll want to adopt a dog that is a good fit for your life. Think about whether you have space for a larger dog, if you have the time and ability to give a more energetic dog the exercise it needs, and if you have children (or plan to) - which breeds are most child-friendly. Dogs can live from 10-20 years - this is a long-term commitment.</p>
    </div>
    <img src={maisieImage1} alt="dog" />
    </section>
</>
  )
}
