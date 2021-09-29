import React from 'react'
import "./ItemList.css"
const ItemList= ({image, name, price}) => {
    return (
        <div className="ItemList-container"
        style={{backgroundImage: `url(${image})`}}
        >
            <div className="ItemList-content">
                <span className="Item-name">{name}</span>
                <span className="Item-price">{price}</span>
            </div>
    
        </div>
    )
}

export default ItemList
