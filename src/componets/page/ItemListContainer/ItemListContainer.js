
import { useState, useEffect } from "react"
import { Data } from "../../Data/Data";
import ItemList from "../../ItemList/ItemList";
import "./ItemListContainer.css"



function ItemListContainer() {

  const [listperfume, setListPerfume] = useState([]);

  const getPerfum = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(Data);
    }, 2000);
  });


  useEffect(() =>{
    getPerfum.then((respuesta) =>{
      setListPerfume(respuesta);
    });
    setTimeout(() => {

    }, 2000);
    
  },[listperfume]);

  return (
    
    <ItemList listperfume={listperfume}/>

  );

}

export default ItemListContainer

