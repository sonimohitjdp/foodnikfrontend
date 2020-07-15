import React from "react"
import "./welcome-message-styles.css"
export default function WelcomeMessage()
{
  return(
    <div className="welcome-message-back">
      <div className="welcome-message-front">
        <h1>Welcome</h1>
        <p>Use left panel to proceed</p>
      </div>
    </div>
  )
}