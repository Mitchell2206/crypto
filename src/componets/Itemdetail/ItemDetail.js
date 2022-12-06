import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartProvider";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({ perfumeList }) => {
  const [count, setCount] = useState([]);
  const { cart, addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(perfumeList, quantity)
  }

  console.log(perfumeList);

  return (
    <div>

      <h1>Esto es la cantidad de productos en tu carrito {cart.length}</h1>
      <img alt={perfumeList.categoryId} src={perfumeList.imagen} />

      <h2>{perfumeList.categoryId}</h2>
      <h2>{perfumeList.descripción}</h2>
      <h2>{perfumeList.genero}</h2>
      <h2>{perfumeList.precio}</h2>
      <h2>{count}</h2>
      <ItemCount initial={1} onAdd={onAdd} stock={5} />
    </div>

  )

}















export default ItemDetail
