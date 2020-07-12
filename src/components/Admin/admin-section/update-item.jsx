import React,{useEffect, useState} from "react"
import "./update-item-styles.css"
// Note the styles file being used here is from InsertItem
export default function UpdateItem()
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

  function useHandleChange(event)
  {
    for(var i = 0; i < availItems.length; i++)
      {
        if(availItems[i].itemno == event.target.value)
        {
          document.getElementById('update-cat').value = availItems[i].category;
          document.getElementById('update-price').value = availItems[i].price;
          document.getElementById('update-name').value = availItems[i].item_name;
          break;
        }
      }
  }

  async function useHandleSubmit(event)
  {
    event.preventDefault();
    var new_name = document.getElementById('update-name').value;
    var new_cat  = document.getElementById('update-cat').value;
    var new_price =document.getElementById('update-price').value;
    var itemno = document.getElementById('update-select').value;

    var details = {
      new_name: new_name,
      new_cat: new_cat,
      new_price:new_price,
      itemno: itemno,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    };
    const res = await fetch(
      "http://localhost:5000/admin/updateitem",
      requestOptions
    );
    res
    .json()
    // .then(res => {console.log(res)})
    .then(res => 
      {  //this is a function
        if (res.affectedRows == 1)
        {window.alert("Successfully Updated!");}
        else
          window.alert("Update unsuccessful. Please try again") 
      }); 
  }

  return(
    <div className="update-item-background">
      <div className="update-item">
        <form method="post" action="http://localhost:5000/admin/updateitem" className="update-item-form">
         
         <div className="update-form-div">
          <label className="update-form-label" htmlFor="update-select">Select Item</label>
          <select onChange={useHandleChange} id="update-select" className="update-form-select"> 
          {
            availItems.map((availItem) => (
              <option  id="update-item-name" value={availItem.itemno}>{availItem.item_name}</option>
            ))
          }  
          </select>
         </div>

         <hr className="update-form-divider"/>
         <div className="update-form-info">
         <p>Enter updated information below</p>
         </div>
         
          
         <div className="update-form-div">
            <label className="update-form-label" htmlFor="update-name">New Name</label>
            <input className="update-form-input" id="update-name" name="updatename" type="text" placeholder="Select an Item"/>
          </div>

          <div className="update-form-div">
            <label className="update-form-label" htmlFor="update-cat">Category</label>
            <input className="update-form-input" id="update-cat" name="updatecat" type="text" placeholder="Select an Item"/>
          </div>
 
          <div className="update-form-div">
            <label className="update-form-label" htmlFor="update-price">Price</label>
            <input className="update-form-input" id="update-price" name="updateprice" type="text" placeholder="Select an Item"/>
          </div>
          
          <input type="submit" onClick={useHandleSubmit} className="update-item-btn" value="Update Item"/>

        </form>
      </div>
    </div>
  )
}