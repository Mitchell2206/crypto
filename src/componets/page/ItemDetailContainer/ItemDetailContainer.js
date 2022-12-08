import ItemDetail from "../../Itemdetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

  const [perfumeList, setPerfumeList] = useState()
  const { id } = useParams();
  

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, 'items', id);
    getDoc(queryDoc)
        .then(res => setPerfumeList({ id: res.id, ...res.data() }))
        .catch((error) => console.log(error));
}, [id]);




  return (
    <div>
    
       {perfumeList && <ItemDetail perfumeList={perfumeList} />}
    </div>
  )
}

export default ItemDetailContainer