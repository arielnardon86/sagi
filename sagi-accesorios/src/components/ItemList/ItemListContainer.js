import React from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList'
import Items from "./Items.json"


function ItemListContainer () {
 
     return (
        <div className="ItemListContainer">
        {Items.map((Items)=>(
        <ItemList image={Items.image} name={Items.name} price={Items.price} 
            key={Items.id} stock={Items.stock}/>
          ))}
          
         </div>
    )
}

export default ItemListContainer
