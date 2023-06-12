import './ItemListContainer.css';

const ItemListContainer = ({categoria}) => {
  return (
    <main>
        <h1 className='title-category m-4'> {categoria} </h1>
    </main>
  )
}

export default ItemListContainer