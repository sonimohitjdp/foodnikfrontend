import React from "react";

// cartArray
export default function CartItems(props) {
  return (
    
      <div class="cart-items">
      <table classname="cart-items-table">
        <tr className="cart-items-tr">
          <th className="cart-items-th">Item</th>
          <th className="cart-items-th">Quantity</th>
          <th className="cart-items-th">Per Price</th>
          <th className="cart-items-th">Total</th>
        </tr>

        {props.cartItems.map((item) => (
          <tr className="cart-items-tr">
            <td className="cart-items-td">{item.name}</td>
            <td className="cart-items-td">
              <button className="cart-items-qleft">-</button>1<button className="cart-items-qright">+</button>
            </td>
            <td className="cart-items-td">{item.price}</td>
            <td className="cart-items-td">300</td>
          </tr>
        ))}

      </table>
    </div>
  );
}
