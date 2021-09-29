import React from 'react'
import "./landing.css"
import ItemList from '../ItemList/ItemList'
import Items from "../ItemList/Items.json"

const landing = () => {
    return (
        <div className="landing-container">
           {Items.map((Items)=>(
           <ItemList image={Items.image} name={Items.name} price={Items.price} key={Items.id} />
           ))} 
        </div>
    )
}

export default landing
