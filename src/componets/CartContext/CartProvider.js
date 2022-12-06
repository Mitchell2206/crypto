import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const addToCart = (product, quantity) => {

    console.log(product, quantity)
   /* if (isInCart(product.id)) {
      alert('El producto ya se encuentra en el carrito');
    } else {
      setCart([...cart, { ...product, quantity }]);
    }*/
  };

  const clear = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider
