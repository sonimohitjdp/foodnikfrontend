import React from "react";
import CartItems from "./cart-items"
import Bill from "./bill-component"
import "./current-billing-styles.css"

export default function CurrentBilling(props)
{
  return(
    <div className="current-billing">
      <CartItems />
      <Bill />
    </div>
  )
}