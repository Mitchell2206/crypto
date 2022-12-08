
import logo from '../Img/cart.png'
import { Link } from 'react-router-dom'
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext} from "../CartContext/CartProvider";


const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="car">
      <Link className='car2' to={'/cart'}>
        <img className="icon__car" src={logo} alt="icono car" />
        <h2>  {cart.length} </h2>
      </Link>
      
    </div>
  )
}

export default CartWidget
