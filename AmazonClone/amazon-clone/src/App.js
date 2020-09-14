import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Orders from "./Orders";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Login from "./Login";

import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQbDJDTudZ2fu5xoUwfzMQC1XURuaiso6ssCqBxNOa8IdJtQBRcdOsXO0xcDUeXRLtylujYe43WdRQBDFbXkqEI006QfAQGuN"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //* BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Router path="/orders">
            <Orders />
          </Router>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
