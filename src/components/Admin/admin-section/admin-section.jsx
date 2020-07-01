import React from "react"
import Menu from "./menu"
import Content from "./content"
import "./admin-section-styles.css"
export default function AdminSection()
{
  return(
    <div className="admin-section">
      <Menu />
      <Content />
    </div>
  )
}