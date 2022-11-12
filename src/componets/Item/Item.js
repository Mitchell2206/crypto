import "./Item.css"

const Item = ({ perfum }) => {
    return (


        <div className="itemPerfume">
            <img alt={perfum.name} src={perfum.imagen} />
            <h2> {perfum.name}</h2>
            <h2> {perfum.marca}</h2>
            <h2> $ {perfum.precio}</h2>
        </div>


    )
}

export default Item

