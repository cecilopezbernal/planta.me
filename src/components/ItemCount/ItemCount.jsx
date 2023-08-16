import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState (inicial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    } 

    return (
        <>
            <div className="contador">
                <button onClick={restar}> - </button>
                <p> {contador} </p>
                <button onClick={sumar}> + </button>
            </div>
            <button className="btn-agregar" onClick={()=> funcionAgregar(contador)}> Agregar al carrito </button>
        </>
    )
}

export default ItemCount