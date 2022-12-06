
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {

    return (    

        <Link className="itemPerfume" to={`item/${product.id}`}  >
            <img alt={product.categoryId} src={product.imagen} />
            <h2> {product.nombre}</h2>
            <h2> {product.descripción}</h2>
            <h2> $ {product.precio}</h2>
        </Link>

    )
    
}

export default Item

