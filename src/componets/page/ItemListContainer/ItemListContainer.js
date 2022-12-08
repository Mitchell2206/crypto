import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import "./ItemListContainer.css"



const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { generoName } = useParams();



  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, 'items');

    const queryshop = generoName

      ? query(queryBase, where("genero", "==", generoName))
      : queryBase;

    getDocs(queryshop)
      .then((resp) => {
        const data = resp.docs.map((item) => {

          return { id: item.id, ...item.data() }
        });
        setItems(data)

      })
      .catch((error) => {
        console.log(error)
      });

  };


  useEffect(() => {
    getProducts();

  }, [generoName]);


  return <div className="CardProduct"> {<ItemList products={items} />} </div>

};

export default ItemListContainer
