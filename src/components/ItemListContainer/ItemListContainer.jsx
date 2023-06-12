import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
  return (
    <main>
        <h1 className='title-category m-4'> {greeting} </h1>
    </main>
  )
}

export default ItemListContainer