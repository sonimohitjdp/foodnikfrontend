import React,{useEffect, useState} from "react"
import "./insert-item-styles.css"
export default function InsertItem()
{
  const [maxItemNo, setMaxItemNo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/maxitemno/availitems/");
      res
        .json()
        .then((res) => setMaxItemNo(res[0]))
    }
    fetchData();
  }, []);

  // Assign item no automatically, q_sold has to be made zero
  // name, category, price
  return(
    <div className="insert-item-background">
      <div className="insert-item">
        <form method="post" action="http://localhost:5000/admin/insertitem" className="insert-item-form">
          
          <label className="new-item-id-text" htmlFor="itemno">Assigned ID to the new item will be: </label>
          <input className="new-item-id"     id="itemno"    name="itemno"  type="text"  value={maxItemNo.lastitem+1}/>

          <label className="item-form-label" htmlFor="item-name">Name</label>
          <input className="item-form-input" id="item-name" name="itemname" type="text" placeholder="Enter item name here.."/>

          <label className="item-form-label" htmlFor="item-category">Category</label>
          <input className="item-form-input" id="item-category" name="itemcategory" type="text" placeholder="Enter item category here.."/>
          
          <label className="item-form-label" htmlFor="item-price">Price</label>
          <input className="item-form-input" id="item-price" name="itemprice" type="text" placeholder="Enter item price here.."/>
          
          <input type="submit" className="insert-item-btn" value="Add item"/>
        </form>
      </div>

      {/* http://localhost:5000/admin/insertitem?itemno=150&itemname=Vada Pav&itemcategory=SNACKS&itemprice=10 */}
      
    </div>
  )
}