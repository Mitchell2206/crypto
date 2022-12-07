import { createContext, useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const addToCart = (product, quantity) => {

    if (isInCart(product.id)) {
      Swal.fire('El producto ya se encuentra en el carrito')
      
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

 /* const totalProduts = () => cart.reduce((acc, total) => acc + total.quantity, 0);*/

  const eliminarUno = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, eliminarUno }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider
