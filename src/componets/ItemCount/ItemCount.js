import { useState } from "react";

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
            <button onClick={restarItems}>Eliminar</button>
            <button onClick={agregarItems}>Agregar</button>
            <button disabled={stock <= 0} onClick={() => count(count, onAdd(count))}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount
