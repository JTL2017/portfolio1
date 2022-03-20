import React from "react"
import MenuItem from "../MenuItem"
export default class Menu extends React.Component {
    render() {
       
      let theItems =   this.props.menuItems.map((item,index) => <MenuItem key = {index} {...item}></MenuItem>)
        return (
            <div><h1>{this.props.menuName} Menu</h1>
            {
                theItems
            }
            </div>
        )
       
    }
}