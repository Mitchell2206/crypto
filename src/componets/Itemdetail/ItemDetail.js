import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ perfumeList }) => {

  return (
    <div className="itemDetail">

      <img alt={perfumeList.name} src={perfumeList.imagen} />
      <h2> $ {perfumeList.precio}</h2>
      <h2> {perfumeList.marca}</h2>
        <h2><ItemCount/></h2>
    </div>

  )

}

export default ItemDetail
