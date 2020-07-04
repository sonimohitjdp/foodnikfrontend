import React from "react";
// import {useState} from "react";
import LoginComponent from "./login-component"
import AdminSection from "./admin-section/admin-section"

export default function Admin()
{
  // const [isLoggedIn,setLogin] = useState(true);
  // function handleLogIn()
  // {
  //   setLogin(true);
  //   console.log(isLoggedIn);
  // }
  var isLoggedIn=true;

  return(
    <div class="admin">
      {isLoggedIn ? <AdminSection /> : <LoginComponent />}
    </div>
    )
}