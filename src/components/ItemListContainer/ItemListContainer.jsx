import { useState , useEffect } from 'react';
import { getProducts } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);

  useEffect ( () => {
    getProducts()
      .then(response => setProductos(response))
      .catch(error => console.log(error))
  }, [])
  
  return (
    <>
        <h2 className='title-category m-4'> {greeting} </h2>
        <ItemList productos={productos}/>
    </>
    
  )
}

export default ItemListContainer