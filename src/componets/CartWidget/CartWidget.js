
import logo from '../Img/cart.png'
import { Link } from 'react-router-dom'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="car">
      <Link to={'/cart'}>
        <img className="icon__car" src={logo} alt="icono car" />
      </Link>
    </div>
  )
}

export default CartWidget
