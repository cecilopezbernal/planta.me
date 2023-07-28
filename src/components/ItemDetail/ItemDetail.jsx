import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, text, precio, img, stock }) => {
  
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='detalle-producto'>
        <h2 className='nombre-producto'>{nombre}</h2>
        <h3>{precio} €</h3>
        <h3>ID: {id}</h3>
        <p>{text}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, temporibus, ad mollitia reprehenderit dicta dolor rem porro ipsum voluptatibus a officia rerum ab at, doloribus doloremque. Reiciendis tempore maiores veniam.</p>
        <img src={img} alt={nombre} />

        {
          agregarCantidad > 0 ? (<Link to='/cart'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail