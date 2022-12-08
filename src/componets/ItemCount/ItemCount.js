import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ initial, onAdd, stock }) => {
    const [count, setCount] = useState(parseInt(initial));


    const restarItems = () => {
        if (count > initial) {
            setCount(count - 1)
        }

    }

    const agregarItems = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }


    return (
        <div className='botones'>
            <h2 className="contador">{count}</h2>
            <button className="agregar" onClick={restarItems}>Eliminar</button>
            <button className="eliminar" onClick={agregarItems}>Agregar</button>

            <button className="añadir" disabled={stock <= 0} onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount
