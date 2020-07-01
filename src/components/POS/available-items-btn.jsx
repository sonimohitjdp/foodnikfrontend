import React from "react";
import "./available-items-btn-styles.css";

export default function MakeCard(props) {
  return (
    <form className="avail-items-form" action="">
      {/* eg -> avail-105 */}
      <button className="avail-item-btn" name={`avail-${props.id}`} >
        <p className="avail-item-name">{props.name}</p>
        <p className="avail-item-price">{props.price} ₹</p>
      </button>
    </form>
  );
}
