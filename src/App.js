import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componets/page/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componets/page/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./componets/navbar/Navbar"
import Cart from "./componets/page/Cart/Cart";
import { CartProvider } from "./componets/CartContext/CartProvider"
import Footer from "./componets/Footer/Footer";



function App() {
  
  
  return (
    <CartProvider value={{cart: []}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/genero/:generoName" element={<ItemListContainer />} />
          <Route path="/genero/:generoName/item/:id" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}







export default App;
