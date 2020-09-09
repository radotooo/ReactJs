import React from 'react'
import './checkoutProduct.css'
import StarIcon from "@material-ui/icons/Star";


function CheckoutProduct({ id, image, title, price, rating }) {

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((x, i) => (
                            <p key={i}>
                                <StarIcon />
                            </p>
                        ))}
                </div>


            </div>
            <button >Add to Basket</button>
        </div>
    )
}

export default CheckoutProduct
