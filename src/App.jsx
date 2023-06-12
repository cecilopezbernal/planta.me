import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Todos los productos"}/>
    </>
  )
}

export default App