import React, { useState } from "react";
import "../styles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";
import { getBasketTotal } from "../store/reducer";
import { Link, useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  const [errorMsg, setErrorMsg] = useState("");
  const [showButton, setShowButton] = useState(false)

  const validation = () => {
    basket.length > 0 ? history.push("/payment") : setErrorMsg("Your basket is empty")
  };

  const logInButton = () => (
    <div className="subtotal__button_errorMsg">You must <Link to="/login">login</Link> to continue..</div>
  )

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => {
        user ? validation() : setShowButton(true)
      }}>
        Proceed to Checkout
      </button>
      <p className="subtotal__errorMsg">{errorMsg}</p>
      {showButton && logInButton()}

    </div>
  );
}

export default Subtotal;
