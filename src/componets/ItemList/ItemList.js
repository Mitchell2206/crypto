import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({ listperfume }) => {
  return (

    <div className="ItemContenedor">
      {listperfume.map((perfume) => (
        <Item key={perfume.id} perfum={perfume}/>
      ))
    
    }
    </div>
  );
  
}


export default ItemList
