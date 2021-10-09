import React,{useState} from 'react'
import "./ItemCount.css"




const ItemCount = ({stock, initial=1}) => {
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
        <div className="count">
        <button type="button" class="btn btn-primary" onClick={aumentarCantidad}>+</button>
        <p>{contador}</p>
        <button type="button" class="btn btn-primary" onClick={reducirCantidad}>-</button>
        </div>
        <div className="add">
        <button type="button" class="btn btn-success">Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount
