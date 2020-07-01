import React, { useState, useEffect } from "react";
import "./login-component-styles.css";
export default function LoginComponent() {
  
  return (
    <div className="login-component">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="username"
              required
            />
            <label htmlFor="">Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
            />
            <label htmlFor="">Password</label>
          </div>
          <input type="submit" className="login-btn" value="Login" />
        </form>
      </div>
    </div>
  );
}
