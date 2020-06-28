//This component generates all the cards for its parent
import React from 'react';
import itemsArray from "./available-items-array"
import MakeCard from "./available-items-card"
import "./available-items-styles.css"

export default function AvailItems()
{ 
  return(
    <div className="available-items">
      {itemsArray.map((item)=>(<MakeCard name={item} />)) }
    </div>
  )
}

