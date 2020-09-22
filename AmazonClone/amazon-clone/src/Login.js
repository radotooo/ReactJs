import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        console.log(e.message);
        console.log(e);

        switch (e.code) {
          case "auth/wrong-password":
            setError("No such user or wrong password!")
            break;
          case "auth/user-not-found":
            setError("No such user or wrong password!")
            break;
          case "auth/invalid-email":
            setError("Email is required")
            break;
          case "auth/invalid-password":
            setError("Invalid password")
            break;



          default:
            break;
        }

      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => console.log(e.message));

  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            valuer={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="error_msg">{error}</p>
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to Amazon`s Conditions of Use & Sale.</p>

        <button className="login__registerButton" onClick={(e) => register(e)}>
          Create you amazon account
        </button>

      </div>
    </div>
  );
}

export default Login;
