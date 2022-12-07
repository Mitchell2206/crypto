import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContext/CartProvider';
import { collection, addDoc, getFirestore, doc, updateDoc, } from 'firebase/firestore';
import "../Cart/Cart.css"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const Cart = ({ }) => {

  const { cart, eliminarUno } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  const [formValues, setFormValues] = useState({
    nombre: '',
    telefono: '',
    email: '',
  });

  const getTotalPrice = () => {
    setTotal(
      cart.reduce((acc, product) => acc + product.precio * product.quantity, 0)
    );
  };

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, 'orden');
    const newOrder = {
      buyer: {
        nombre: formValues.nombre,
        telefono: formValues.telefono,
        email: formValues.email,
      },
      items: cart,
      total: total,
    };
    addDoc(query, newOrder)
      .then((response) => {
        Swal.fire(`Orden creada con el id ${response.id}`)
        return response;
      })
      .then((res) => {
        cart.forEach((product) => {
          const query = doc(db, 'items', product.id);
          updateDoc(query, {
            stock: product.stock - product.quantity,

          });
        });
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTotalPrice(console.log(total));
  }, [cart]);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  if (cart.length === 0) {
    return (
        <>
            <p className="SinElementos">No hay elementos en el carrito.</p>
            <Link to='/' className="Hacer-compra">Hacer compras</Link>
        </>
    );
}



  return (


    <div className='contenedor-foms-producs'>
      {cart.map((product) => (
        <div className='cart' key={product.id}>
          <img className='img' alt={product.nombre} src={product.imagen} />
          <h2>{product.categoryId}</h2>
          <h2>{product.descripción}</h2>
          <h2> Precio $ {product.precio}</h2>
          <h2>Unidades {product.quantity}</h2>
          <button onClick={() => eliminarUno(product.id)} className="btnEliminar">Eliminar</button>
        </div>
      ))}
      <div className='orden'>
        <h1>Total: {total} </h1>
        
        
        <button className='nuevaOrden' onClick={createOrder}>Crear orden</button>
        <div className='inputs'>
          <h2>Formulario</h2>
          <input name="nombre" type="text" placeholder="nombre" value={formValues.nombre} onChange={handleInputChange}
          />
          <input name="telefono" type="text" placeholder="telefono" value={formValues.telefono} onChange={handleInputChange}
          />
          <input name="email" type="text" placeholder="email" value={formValues.email} onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Cart
