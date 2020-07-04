import React, { useState, useEffect } from "react";
import AvailItems from "./available-items";
import CurrentBilling from "./current-billing"
import "./POS-styles.css";

export default function POS()
{
  const [items,setItems] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/view/availitems/");
      res
        .json()
        .then(res => setItems(res))
 
    }
    fetchData();
  },[]);

  const [cartItems, setCartItems] = useState([]); 

  return(
    <div className="POS-container">
      <AvailItems items={items} setCartItems={setCartItems} cartItems={cartItems}/>
      <CurrentBilling cartItems={cartItems}/>
    </div>
  );
}
