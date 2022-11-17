import ItemDetail from "../../Itemdetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Data } from "../../Data/Data";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

  const [perfumeList, setPerfumeList] = useState()
  const {id} = useParams();

  const getPerfam = () => {
   const PerfumFilter =  Data.filter((perfume) =>{
     return perfume.id == id;
   })
   
   setPerfumeList(...PerfumFilter)
  }

  useEffect(() => {
    getPerfam();
  }, [id])

  return (
    <div>
      {perfumeList &&
       <ItemDetail perfumeList={perfumeList}/>}
    </div>
  )
}

export default ItemDetailContainer
