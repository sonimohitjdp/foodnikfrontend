import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoginComponent from "./login-component"
import AdminSection from "./admin-section/admin-section"

export default function Admin()
{
  const [isLoggedIn,setLogin] = useState(true);
  function handleLogIn()
  {
    setLogin(true);
    console.log(isLoggedIn);
  }

  return(
    <div class="admin">
      {isLoggedIn ? <AdminSection /> : <LoginComponent />}
    </div>
    )
}