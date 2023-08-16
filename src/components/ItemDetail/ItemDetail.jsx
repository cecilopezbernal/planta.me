import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, text, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='hoja-producto'>
      <img className="img-detail" src={img} alt={nombre} />

      <div className='detalle-producto'>
        <h2 className='nombre-producto'>{nombre}</h2>
        <h3>{precio} €</h3>
        <h3>ID: {id}</h3>
        <p>{text}.</p>

        {
          agregarCantidad > 0 ? (<Link to='/cart'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>

    </div>
  )
}

export default ItemDetail