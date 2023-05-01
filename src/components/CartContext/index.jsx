import styles from "./item.module.css"
import { NavLink, useParams } from "react-router-dom"
import { CartContext } from "../../contexts/ShoppingCartContext"
import { useContext, useEffect, useState } from "react"
import CarritoItem from "../CarritoItem"
import { collection, getDocs } from "firebase/firestore"
import db from "../../db/firebase"

function index() {
  const [productos, setProductos] = useState([]);
  const [cartNumber, setCartNumber] = useState([])
  const productosRef = collection(db, "items")
  let { update } = useParams()
  const [cart] = useContext(CartContext)

    const getItems = async () => {
      const productosCollection = await getDocs(productosRef)
      const productos = productosCollection.docs.map((doc) => ({...doc.data(), documentId: doc.id}))
      setProductos(productos)
  }

  let cantidadTotal = cart.map(item => {return item.quantity})
  .reduce((total, itemPrice) => total + itemPrice, 0)
  useEffect(() => {
    setCartNumber(cart.reduce((n, {quantity})=> n + quantity, 0))
  }, []);

  useEffect(() => {getItems()},[update]);
  
if (cartNumber == 0){
 return <>No tienes nada en tu carrito de compras. Ordena algo!</>
}else {

  return (
      <div>
        <NavLink to="/pagar"><button>Checkout</button></NavLink>
        <div>
            <div className={styles.productos}>
            {productos.map((producto) => {
            return <CarritoItem producto={producto}/>
            })}
            </div>
        </div>
      </div>
  )
}
}
export default index