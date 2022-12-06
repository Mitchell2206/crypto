
const ItemCount = ({ setCount }) => {


    const agregarItems = () => {
        setCount((count) => count + 1);
    }

    const restarItems = () => {
        setCount((count) => count - 1);
    }


    return (
        <div className='botones'>
            <button onClick={restarItems}>Eliminar</button>
            <button onClick={agregarItems}>Agregar</button>
        </div>
    );
}

export default ItemCount
