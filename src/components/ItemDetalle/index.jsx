import {useContext, useEffect, useState} from "react";
import styles from "./item.module.css";
import CartWidget from "../CartWidget"
import { CartContext } from "../../contexts/ShoppingCartContext";
const ProductoDetalle = ({productos}) => {
    const [cuenta, setCuenta] = useState(0)
    const [stock, setStock] = useState(0)
    const [cart] = useContext(CartContext)
    const restar = () => {
        if (cuenta == 0) {} else {setCuenta(cuenta - 1)}
    }
    const sumar = () => {
        if (cuenta >= productos.stock){}else { {setCuenta(cuenta + 1)}} 
    }
  
if (productos === undefined) {
    return <>Cargando...</>
} else {
    let stockProducto = productos.stock
    const addToCart = () => {
        if (stockProducto == 0){} 
        else if (cuenta > stockProducto){
            setCuenta(stockProducto)
            cart[productos.id].quantity = cart[productos.id].quantity + cuenta
            setStock(productos.stock)
            productos.stock = productos.stock - cuenta
            cart[productos.id].price = cart[productos.id].price = productos.price
            setCuenta(0)
        }
        else {
        cart[productos.id].quantity = cart[productos.id].quantity + cuenta
        setStock(productos.stock)
        productos.stock = productos.stock - cuenta
        cart[productos.id].price = cart[productos.id].price = productos.price
        setCuenta(0)
        }
    } 
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
        <h1>Productos en Stock: {stockProducto}</h1>
    </div>
    <div className={styles.addToCart}>
        <button onClick={restar}>-</button>
        <h2> 
            <CartWidget cuenta={cuenta}/>
        </h2>
        <button onClick={sumar}>+</button>
    </div>
    <button onClick={() => addToCart()}>Agregar al carrito</button>
</div>

)
}
}

export default ProductoDetalle