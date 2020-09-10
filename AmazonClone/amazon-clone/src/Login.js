import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>Blab Bla Bla</p>

        <button className="login__registerButton">
          Create you amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
