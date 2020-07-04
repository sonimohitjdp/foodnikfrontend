//This component generates all the cards for its parent
import React from 'react';
import AvailableItemsButton from "./available-items-btn"
import "./available-items-styles.css";

export default function AvailItems(props)
{
  return(
    <div className="available-items">
      {props.items.map((item)=>(
        <AvailableItemsButton 
          name={item.item_name}
          price={item.price}
          id={item.itemno}
          items={props.items} /* All items from database */
          cartItems={props.cartItems} /* CartItems array */
          setCartItems={props.setCartItems} 
        />))}
    </div>
  )
}

