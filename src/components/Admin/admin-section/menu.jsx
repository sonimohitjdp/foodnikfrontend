import React from "react"
import {Link} from "react-router-dom"
import "./menu-styles.css"
export default function Menu()
{
  return(
    <div className="menu">
      <Link className="menu-btn" to="/admin/availableitems">Available Items</Link>
      <Link className="menu-btn" to="/admin/orders">Orders Placed</Link>
      <Link className="menu-btn" to="/admin/insertitem">Insert Item</Link>
      <Link className="menu-btn" to="/admin/updateitem">Update Item</Link>
      <Link className="menu-btn" to="/admin/viewstats">View Stats</Link>
    </div>
  )
}