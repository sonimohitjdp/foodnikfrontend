//This component generates all the cards for its parent
import React from 'react';
import {useState, useEffect} from "react";
import MakeCard from "./available-items-btn"
import "./available-items-styles.css";

export default function AvailItems(props)
{
  const [items,setItems] = useState([]);
  const [error,setErrors] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/availitems/");
      res
         .json()
        .then(res => setItems(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  },[]);

  return(
    <div className="available-items">
      {items.map((item)=>(
      <MakeCard 
        name={item.item_name}
        price={item.price}
        id={item.itemno}
      />
      )) 
      }
    </div>
  )
}

