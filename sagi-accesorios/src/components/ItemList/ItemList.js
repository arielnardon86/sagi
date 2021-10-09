import React from 'react'
import ItemCount from './ItemCount'
import "./ItemList.css"




const ItemList= ({image, name, price, stock}) => {
  
    return (
       
         <div className="ItemList"
        style={{backgroundImage: `url(${image})`}} >
        <div className="ItemList-content">
            <span className="Item-name">{name}</span>
            <span className="Item-price">{price}</span>
            </div>
            <div className="ItemList-button">
            <ItemCount stock={stock}/>
        </div>
        </div>
    
    )
}

export default ItemList
