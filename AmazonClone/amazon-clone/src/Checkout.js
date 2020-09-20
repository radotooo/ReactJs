import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const basketContent = (basket) => {
    if (basket.length > 0) {
      return basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))
    } else {
      return <div className="checkout__emptyBasketImg"><img src="https://dthindia.in/empty-cart.png" alt="cart" /></div>
    }
  }


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42392668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3>Hello {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basketContent(basket)}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
