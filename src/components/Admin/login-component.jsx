import React from "react";
import "./login-component-styles.css";
export default function LoginComponent(props) {
  // var adminCount = 0;
  async function useHandleLogIn(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var details = {
      username: username,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    };
    const res = await fetch(
      "http://localhost:5000/admin/login",
      requestOptions
    );
    res
    .json()
    .then(res => {  //this is a function
      if (res.adminCount == 1){props.setLogin(true);
        window.alert("Successfully Logged In!");}
      else
        window.alert("Incorrect Password. Please try again") 
    }); 
    
    //Note - Never take res and use res later on, do whatever you want to do here only.
    /* Eg. 
      .then(res => console.log(res))
      adminCount = res.counting; ---> this won't work
      */
      
   
  }

  return (
    <div className="login-component">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form>
          <div className="user-box">
            <input id="login-username" type="text" name="username" required />
            <label htmlFor="">Username</label>
          </div>
          <div className="user-box">
            <input
              id="login-password"
              type="password"
              name="password"
              required
            />
            <label htmlFor="">Password</label>
          </div>
          <input
            type="submit"
            onClick={useHandleLogIn}
            id="login-btn"
            className="login-btn"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
