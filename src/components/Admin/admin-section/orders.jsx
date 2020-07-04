import React, {useState, useEffect} from "react";
import "./orders-styles.css";
// Note - function name 'Orders' is begun with Capital letter, this is mandatory
export default function Orders() {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/view/orders/");
      res
        .json()
        .then((res) => setOrders(res))
   
    }
    fetchData();
  }, []);

  async function useHandleChange(event) {
    var itemNoToDelete = event.target.name;
    var responseFromDB;
    const res = await fetch(`http://localhost:5000/delete/orders/${itemNoToDelete};`);
    res.json().then((responseFromDB = res.affectedRows));

    if (responseFromDB === 0) alert("Record couldn't be deleted");
    else {
      alert("Item deleted successfully!");
      window.location.reload(false);
    }
  }

  return (
    <div className="view-rec">
      <table className="view-rec-table">
        <tr className="view-rec-tr">
          <th className="view-rec-th">OrderNo.</th>
          <th className="view-rec-th">Amount</th>
          <th className="view-rec-th">Quantity</th>
          <th className="view-rec-th">Date</th>
          <th className="view-rec-th">Time</th>
          <th className="view-rec-th">Delete</th>
        </tr>

        {orders.map((order) => (
          <tr className="view-rec-tr">
            <td className="view-rec-td">{order.order_no}</td>
            <td className="view-rec-td">{order.amount}</td>
            <td className="view-rec-td">{order.quantity}</td>
            <td className="view-rec-td">{order.date}</td>
            <td className="view-rec-td">{order.time}</td>
            <td className="view-rec-td">
              <button
                name={order.order_no}
                className="view-rec-trash-btn"
                onClick={useHandleChange}
              ></button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
