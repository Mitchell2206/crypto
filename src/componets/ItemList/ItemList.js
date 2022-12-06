import Item from '../Item/Item';
import "./ItemList.css"

const ItemList = ({ products }) => {
  return  products.map((product) => <Item className="ItemList" product={product} key={product.id} />) 
 
};

export default ItemList;
