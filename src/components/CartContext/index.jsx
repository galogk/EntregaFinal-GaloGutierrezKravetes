import styles from "./item.module.css"
import { NavLink } from "react-router-dom"

function index() {
    const productos = JSON.parse(localStorage.getItem("listaProductos"))  || []
    const guardarproducto = (id, valor) => { localStorage.setItem(id, valor) }
    const total = productos.reduce((n, {price})=> n + price, 0)
    const remover = () =>{
      const remove = prompt(`Que quieres remover de tu carrito? Por favor especifique con numeros en orden de los productos.`)
      if (remove != 0 && remove != null) {
        console.log(productos)
        productos.splice((remove-1), 1)
        console.log(productos)
        guardarproducto("listaProductos", JSON.stringify(productos))
        location.reload()
      } else {
        guardarproducto("listaProductos", JSON.stringify(productos))
      }
    }

    const Carrito = productos.map((element) => {
          return (
            <div className={styles.container}>
              <img src={element.image}/>
              <ul type="disc">
                  <p>{element.title}</p>
                  <p>${element.price}</p>
              </ul>
            </div>
          )
      }
  )
  return (
      <div>
        <NavLink to="/pagar"><button>Ir a pagar</button></NavLink>
        <button onClick={remover}>Remover Producto</button>
        <p>Total a pagar: ${total}</p>
          {Carrito}
      </div>
  )
}

export default index