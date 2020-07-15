import React, { useState, useEffect } from "react";
import Bill from "./bill-component"
import "./POS-styles.css";

export default function POS()
{
  const [items,setItems] = useState([]);  //To store available items from database
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/view/availitems/");
      res
        .json()
        .then(res => setItems(res))
    }
    fetchData();
  },[]);
  
  console.log("--------------------")
  console.log(cartItems)
  console.log("--------------------")

  function useHandleChange(event)
  {
    var itemID = event.target.name;
    var idInsideCart = (cartItems).findIndex(x => x.itemno == itemID)
    if(idInsideCart != -1)  //item already present in cart
    { //update item quantity in this case

      //finding existing quantity & updating it
      //temp is the object that we are manipulating
      var temp = cartItems[idInsideCart]
      var quan = temp.quantity
      temp.quantity=quan+1

      setCartItems(prevValue => 
      [//we cannot manipulate original cartItems, but we can pick selected items
        ...(cartItems.filter(item => item.itemno!=itemID)),
        // ...(cartItems.splice(idInsideCart,1)),
        temp
      ]);  
    }
    else  //item is not present in cart, its a new item
    {
      var obj = (items)[(items).findIndex(x => x.itemno == itemID)]
      obj.quantity=1;
      setCartItems(prevValue => 
      [
        ...cartItems,
        obj
      ]);
    }
  }

  function useHandleQuantity(event)
  {
    var option = event.target.value;  //Increment or decrement
    var changeId = event.target.name; //kiska button hai
    console.log(option)
    console.log(cartItems)
    // setCartItems()
    // (cartItems).findIndex(x => x.itemno == changeId)
  }

  return(
    <div className="POS-container">
      <div className="available-items">
      {items.map((item)=>(
        <div className="avail-items-btn">
          <button 
            onClick={useHandleChange} 
            className="avail-item-btn" 
            name={item.itemno}>
            {item.item_name}
            <br/>
            <p name={item.itemno} className="avail-item-price">{item.price} ₹</p>
          </button>
        </div>
      ))}
    </div>


    <div className="current-billing">
      <div class="cart-items">
        <table classname="cart-items-table">
          <tr className="cart-items-tr">
            <th className="cart-items-th">Item</th>
            <th className="cart-items-th">Quantity</th>
            <th className="cart-items-th">Per Price</th>
            <th className="cart-items-th">Total</th>
          </tr>

          {cartItems.map((item) => (
            <tr className="cart-items-tr">
              <td className="cart-items-td">{item.item_name}</td>
              <td className="cart-items-td">
                <button 
                  onClick={useHandleQuantity} 
                  name={item.itemno} 
                  className="cart-items-qleft"
                  value="-">
                    -
                </button>
                <span className="cart-items-q" name={item.quantity}>{item.quantity}</span>
                <button
                  onClick={useHandleQuantity}
                  name={item.itemno}
                  className="cart-items-qright"
                  value="+">+</button>
              </td>
              <td className="cart-items-td">{item.price}</td>
              <td className="cart-items-td">300</td>
            </tr>
          ))}

        </table>
      </div>

      {/* <Bill cartItems={cartItems}/> */}
    </div>
  </div>
  );
}
