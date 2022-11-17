
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Data } from "../../Data/Data";
import ItemList from "../../ItemList/ItemList";
import "./ItemListContainer.css"


const ItemListContainer = () => {

  const [listperfume, setListPerfume] = useState([]);
  const { generoName } = useParams();

  

  const getPerfum = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (generoName) {
        const generoFiltrado = Data.filter((generos) => {
          return generos.genero === generoName;
        });
        resolve(generoFiltrado)
        
      } else {
        resolve (Data);
      }

    }, 1000);
  });

  useEffect(() => {
    getPerfum
    .then((res)=> setListPerfume(res))
    .catch((error) => console.log(error));
  },[generoName]);

 return (
  <div>
    <ItemList listperfume={listperfume} />
  </div>
  
  );

}
export default ItemListContainer

