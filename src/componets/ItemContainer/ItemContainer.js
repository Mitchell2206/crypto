
import "./itemcontainer.css"

function ItemContainer(props) {
  return (
    <div className='bienvenida-container'>
      <h2 className='bienvenida'>{props.name}</h2>
    </div>
  )
}

export default ItemContainer
