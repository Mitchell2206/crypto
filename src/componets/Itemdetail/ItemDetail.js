import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({ perfumeList }) => {
  const { cart, addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {

    console.log(`agregaste ${quantity} unidades`)
    addToCart(perfumeList, quantity)
  }

  
  console.log(perfumeList);

  return (
    <div className="contenedor">

      <h1 className="cantidad-detalle"> Tiene {cart.length} articulos en su carrito</h1>
      <img alt={perfumeList.categoryId} className="img-detalle" src={perfumeList.imagen} />

      <h2>{perfumeList.categoryId}</h2>
      <h2>{perfumeList.descripción}</h2>
      <h2>{perfumeList.genero}</h2>
      <h2>{perfumeList.precio}</h2>

      <div className="btnCarrito"><Link to='/cart' className='btnCarrito'>Ver mi carrito</Link></div>
      <div className="btnComprar"><Link to='/' className='btnComprar'>Seguir comprando</Link></div>

      <ItemCount initial={1} onAdd={onAdd} stock={15} />
    </div>

  )

}















export default ItemDetail
