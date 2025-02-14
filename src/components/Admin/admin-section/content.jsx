import React from "react"
import "./content-styles.css"
import {Route} from "react-router-dom"
import AvailableItems from "./available-items"
import ViewStats from "./view-stats"
import InsertItem from "./insert-item"
import UpdateItem from "./update-item"
import WelcomeMessage from "./welcome-message"

import Orders from "./orders"

export default function Content()
{
  return(
    <div className="content">
      <Route exact path='/admin/availableitems' component={AvailableItems} />
      <Route exact path='/admin/orders' component={Orders} />
      <Route exact path='/admin/viewstats' component={ViewStats} />
      <Route exact path='/admin/insertitem' component={InsertItem} />
      <Route exact path='/admin/updateitem' component={UpdateItem} />
      <Route exact path='/admin/' component={WelcomeMessage} />
    </div>
  )
}