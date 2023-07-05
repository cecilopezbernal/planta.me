import './ItemDetail.css';

const ItemDetail = ({ id, nombre, text, precio, img }) => {
  return (
    <div className='detalle-producto'>
        <h2 className='nombre-producto'>{nombre}</h2>
        <h3>{precio} €</h3>
        <h3>ID: {id}</h3>
        <p>{text}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, temporibus, ad mollitia reprehenderit dicta dolor rem porro ipsum voluptatibus a officia rerum ab at, doloribus doloremque. Reiciendis tempore maiores veniam.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail