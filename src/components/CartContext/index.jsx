import styles from "./item.module.css"
import { NavLink } from "react-router-dom"

function index() {
/*
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
  */
  return (
      <div>
        <NavLink to="/pagar"><button>Ir a pagar</button></NavLink>
        <button>Remover Producto</button>
        <p>Total a pagar: $</p>
      </div>
  )
}

export default index