import React from "react"
import "./menu-styles.css"
export default function Menu()
{
  return(
    <div className="menu">
      <a className="menu-btn" href="/admin/availableitems">Available Items</a>
      <a className="menu-btn" href="/admin/orders">Orders Placed</a>
      <a className="menu-btn" href="/admin/insertitem">Insert Item</a>
      <a className="menu-btn" href="/admin/viewstats">View Stats</a>
    </div>
  )
}