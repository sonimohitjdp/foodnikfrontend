import React from "react";
import AvailItems from "./available-items";
import CurrentBilling from "./current-billing"
import "./POS-styles.css";

export default function POS()
{
  return(
    <div className="POS-container">
      <AvailItems />
      <CurrentBilling />
    </div>
  );
}
