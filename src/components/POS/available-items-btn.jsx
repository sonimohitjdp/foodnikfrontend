import React from "react";
import "./available-items-btn-styles.css";

export default function AvailableItemsButton(props) {

  function handleChange(event)
  {
    console.log("--------CARTITEMS-------------")
    console.log(props.cartItems)
    console.log("--------ENDOFCIT-------------")
    var referenceArray = props.items;
    var itemID = event.target.name;

    var tempObj = referenceArray[referenceArray.findIndex(x => x.itemno === itemID)]
    
    var obj = {
      id: tempObj.itemno,
      name: tempObj.item_name,
      price: tempObj.price
    };
  
    var temp = props.cartItems;
    temp.push(obj);

    props.setCartItems(temp);

  }

  return (
    <div className="avail-items-btn">
      <button 
        onClick={handleChange} 
        className="avail-item-btn" 
        name={props.id}
      >
        {props.name}
        <br/>
        <p className="avail-item-price">{props.price} ₹</p>
      </button>
    </div>
    );
}
