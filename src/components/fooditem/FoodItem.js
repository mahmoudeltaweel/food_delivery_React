import React, { useContext } from "react";
import "./fooditem.css";
import { assets } from "../../assets/assets";
import { storeContext } from "../../context/StoreContext";
export default function FoodItem(props) {

  const { cartItems, addToCart, removeFromCart } = useContext(storeContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={props.image} className="food-item-image" alt="itemimage" />
        {!cartItems[props.id] ? (
          <img
            src={assets.add_icon_white}
            className="add"
            onClick={() => addToCart(props.id)}
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove"
              onClick={() => removeFromCart(props.id)}
            />
            <p>{cartItems[props.id]}</p>
            <img
              src={assets.add_icon_green}
              alt="plus"
              onClick={() => addToCart(props.id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{props.name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-des">{props.description}</p>
        <p className="food-item-prise">${props.price}</p>
      </div>
    </div>
  );
}
