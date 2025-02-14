import React,{useState} from "react";
import "./bill-component-styles.css";
export default function Bill(props) {
  var [total, setTotal] = useState(0);
  props.cartItems.map(
    (item)=>(
      setTotal(total+item.price)
    ))
    console.log("Current total is: "+total)
  return (
    <div class="bill">
      <div className="bill-details">
        <form className="check-form" action="">
          <input type="checkbox" id="takaway" name="takaway" value="takaway" />
          <label for="takaway"> Takeaway (15 ₹)</label>
        </form>
        <table>
          <tr>
            <td>Tax</td>
            <td>7.00</td>
          </tr>
          <tr>
            <td>Total</td> 
            <td>{total}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>7.00</td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td>7.00</td>
          </tr>
        </table>
      </div>

      <div className="print-bill">
      <button className="print-bill-btn" onclick={window.print}>
        <h3>PRINT <i class="fas fa-print"></i></h3>
      </button>
      </div>
    </div>
  );
}
