import React from "react"
import "./menu-styles.css"
export default function Menu()
{
  return(
    <div className="menu">
      <button className="menu-btn">View Records</button>
      <button className="menu-btn">Insert Item</button>
      <button className="menu-btn">Delete Item</button>
      <button className="menu-btn">View Stats</button>
    </div>
  )
}