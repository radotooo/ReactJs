import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const basketValue = basket.map((x, i) => (
    <Product
      title={x.title}
      price={x.price}
      image={x.image}
      rating={x.rating}
      className="product"
    />
  ));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42392668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>


          <CheckoutProduct />


        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
