import { useState, useEffect } from 'react';
// import { getProducts, getProductsByCategory } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/config';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();

  useEffect( () => {
    const misProductos = idCategory ? query(collection(db, "productos"), where("idCat", "==", idCategory)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCategory]) 


  return (
    <>
      <h2 className='title-category m-4'> {greeting} </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer