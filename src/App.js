import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componets/page/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componets/page/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./componets/navbar/Navbar"
import Icon from "./componets/CartWidget/Icon";


function App() {
  return (

    <BrowserRouter>
    <Navbar />
     <Routes>
      
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/genero/:generoName" element={<ItemListContainer/>}/>
      <Route path="/genero/:generoName/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/Img" element={<Icon/>}/>
     </Routes>

  </BrowserRouter>
  );
}

export default App;
