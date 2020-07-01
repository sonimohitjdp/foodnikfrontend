import React, { useState } from "react";
import AvailItems from "./available-items";
import CurrentBilling from "./current-billing"
import "./POS-styles.css";

export default function POS()
{
  const [test, setTest] = useState(123);
  return(
    <div className="POS-container">
      <AvailItems />
      <CurrentBilling />
    </div>
  );
}
