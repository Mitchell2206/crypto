
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ perfum }) => {
    return (

        <Link className="itemPerfume" to={`item/${perfum.id}`}  >
            <img alt={perfum.name} src={perfum.imagen} />
            <h2> {perfum.name}</h2>
            <h2> {perfum.marca}</h2>
            <h2> $ {perfum.precio}</h2>
        </Link>

    )
}

export default Item

