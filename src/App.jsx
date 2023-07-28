import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/CArt";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"Todos los productos"}/> } />
            <Route path="/categoria/:idCategory" element={ <ItemListContainer greeting={"Productos por categoría"}/> } />
            <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
            <Route path="/cart" element={<Cart/>}> </Route>
            <Route path="/checkout" element={<Checkout/>}> </Route>
            <Route path="*" element={ <h2> -- Tuvimos un problema al encontrar lo que buscas, vuelve a intentarlo 👾 -- </h2> } />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App