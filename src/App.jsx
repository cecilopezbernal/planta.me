import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Todos los productos"}/> } />
          <Route path="/categoria/:idCategory" element={ <ItemListContainer greeting={"Productos por categoría"}/> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
          <Route path="*" element={ <h2> -- Tuvimos un problema al encontrar lo que buscas, vuelve a intentarlo 👾 -- </h2> } />

        </Routes>

      </BrowserRouter>

      {/* <ItemListContainer greeting={"Todos los productos"} />
      <ItemDetailContainer /> */}
    </>
  )
}

export default App