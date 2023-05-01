import {useState} from "react";
import styles from "./item.module.css";
import CartWidget from "../CartWidget"

const ProductoDetalle = ({productos}) => {
    const [cuenta, setCuenta] = useState(0)
    const restar = () => {
        if (cuenta == 0) {} else {
            setCuenta(cuenta - 1)
        }
    }
    const sumar = () => {
        if (cuenta != productos.stock) {
            setCuenta(cuenta + 1)
        }       
    }
if (productos === undefined) {
    return <>Cargando...</>
} else {
return ( 
    
<div className={styles.container}> 
    <div className={styles.info}>
        <h4 className={styles.title}>{productos.title}</h4>
        <div className={styles.extraInfo}>
            <p>${productos.price}</p>
            <p>{productos.category}</p>
        </div>
    </div>
    <div className={styles.img}>
        <img src={productos.image} alt={productos.title}/>
        <p>{productos.description}</p>
        <h1>Productos en Stock: {productos.stock}</h1>
    </div>
    <div className={styles.addToCart}>
        <button onClick={restar}>-</button>
        <h2> 
            <CartWidget cuenta={cuenta}/>
        </h2>
        <button onClick={sumar}>+</button>
    </div>
    <button>Agregar al carrito</button>
</div>

)
}
}

export default ProductoDetalle