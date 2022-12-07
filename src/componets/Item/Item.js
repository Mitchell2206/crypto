
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ product }) => {

    return (

        <Link className="itemPerfume" to={`item/${product.id}`}  >
            
            <div className="descripcion">
                <img alt={product.categoryId} src={product.imagen} />
                <h2> {product.categoryId}</h2>
                <h2> {product.descripción}</h2>
                <h2> $ {product.precio}</h2>
            </div>

        </Link>

    )

}

export default Item

