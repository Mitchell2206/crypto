import {useState} from 'react'

const ItemCount = () => {

const [contador, setContador] = useState(0);

    const Agregar = ()=>{
      setContador(contador + 1)
      
    }

    const sacar = ()=>{
      setContador( contador - 1)
      
    }

  return (
    <div>
      <p>
        {contador}
      </p>
      <div>
      <button className='btn btn-primary' onClick={sacar}>Quitar</button>
        <button className='btn btn-primary' onClick={Agregar}>Agregar</button>
      </div>
    </div>
  )
};

export default ItemCount
