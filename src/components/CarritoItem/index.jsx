import { useContext, useEffect, useState } from "react";
import CartWidget from "../CartWidget"
import styles from "./item.module.css";
import { CartContext } from "../../contexts/ShoppingCartContext";

const item = ({producto}) => {

  const [cuenta, setCuenta] = useState(0)
  const [ordenes, setOrdenes] = useState(0)
  const [cart] = useContext(CartContext)
  const restar = () => {
    if (cuenta == 0) {} else {setCuenta(cuenta - 1)}
    }
const sumar = () => {
  if (cuenta >= cart[producto.id].quantity){}
  else{
    setCuenta(cuenta + 1)
  }}

useEffect(() => {
  setOrdenes(cart[producto.id].quantity)
}, [cart[producto.id].quantity]);

const removeFromCart = () => {
  cart[producto.id].quantity = cart[producto.id].quantity - cuenta
  setOrdenes(cart[producto.id].quantity)
  if (cart[producto.id].quantity < 0 ){
    cart[producto.id].quantity = 0
  }
  setCuenta(0)
}

if (cart[producto.id].quantity == 0){
  return <></>
} else {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.title}>{producto.title}</h4>
        <div className={styles.extraInfo}>
          <p>${producto.price}</p>
          <p>Ordenados: {ordenes}</p>
        </div>
      </div>
      <div className={styles.img}>
        <img src={producto.image} alt={producto.title}/>
      </div>
      <div className={styles.buttons}>
      <button onClick={restar}>-</button>
        <h2> 
            <CartWidget cuenta={cuenta}/>
        </h2>
        <button onClick={sumar}>+</button>
    </div>
    <button onClick={() => removeFromCart()}>Remover del carrito</button>
    </div>
)
}

}

export default item