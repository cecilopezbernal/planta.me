import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const funcion = idCategory ? getProductsByCategory : getProducts;
    funcion(idCategory)
      .then(response => setProductos(response))
  }, [idCategory])

  return (
    <>
      {/* <h2 className='title-category m-4'> {greeting} </h2> */}
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer