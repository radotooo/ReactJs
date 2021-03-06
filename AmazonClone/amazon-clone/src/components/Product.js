import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "../styles/product.css";

import { useStateValue } from "../store/StateProvider";

function Product({ id, title, image, price, rating, buttonValue }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title__truncate">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/*  create rating stars */}
          {Array(rating)
            .fill()
            .map((x, i) => (
              <p key={i}>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
