import React, { useState, useEffect } from "react";
import "./available-items-styles.css";
export default function AvailableItems() 
{
  const [availItems, setAvailItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/view/availitems/");
      res
        .json()
        .then((res) => setAvailItems(res))
        
    }
    fetchData();
  }, []);

  async function useHandleChange(event)
  {
    var itemNoToDelete = event.target.name;
    var responseFromDB;
    const res = await fetch(`http://localhost:5000/delete/availitems/${itemNoToDelete};`) ;
    res
      .json()
      .then(responseFromDB = res.affectedRows)

    if (responseFromDB === 0)
      alert("Record couldn't be deleted");
    else
    {
      alert("Item deleted successfully!");
      window.location.reload(false);
    }
  }

  return (
    <div className="view-rec">
      <table className="view-rec-table">
        <tr className="view-rec-header-row">
          <th className="view-rec-th">ItemNo</th>
          <th className="view-rec-th">Name</th>
          <th className="view-rec-th">Category</th>
          <th className="view-rec-th">Price</th>
          <th className="view-rec-th">Q_Sold</th>
          <th className="view-rec-th">Delete</th>
        </tr>

        {availItems.map((availItem) => (
          <tr className="view-rec-tr">
            <td className="view-rec-td">{availItem.itemno}</td>
            <td className="view-rec-td">{availItem.item_name}</td>
            <td className="view-rec-td">{availItem.category}</td>
            <td className="view-rec-td">{availItem.price}</td>
            <td className="view-rec-td">{availItem.q_sold}</td>
            <td className="view-rec-td">
              <button 
                name={availItem.itemno} 
                className="view-rec-trash-btn"
                onClick={useHandleChange}
              >
                
              </button>
              </td>
            
          </tr>
        ))}
      </table>
    </div>
  );
}
