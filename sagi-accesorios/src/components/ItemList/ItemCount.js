import React,{useState} from 'react'
import "./ItemCount.css"


const ItemCount = ({stock=10, initial=0}) => {
    const [contador, setContador] = useState(parseInt(initial));
    
    const aumentarCantidad = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
        }
    
    const reducirCantidad = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    };
    return (
        <div className="contador">
        <button onClick={aumentarCantidad}>+</button>
        <p>{contador}</p>
        <button onClick={reducirCantidad}>-</button>
        </div>
    )
}

export default ItemCount
