import styles from  "./navbar.module.css"
import CartWidget from "../CartWidget/index.jsx"
import { NavLink } from "react-router-dom"

const productos = JSON.parse(localStorage.getItem("listaProductos"))  || []

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  }
  return <nav className={styles.navbar}>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/"><p>Inicio</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/nosotros"><p>Sobre Nosotros</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/contacto"><p>Contactanos</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos"><p>Productos</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/carrito"><CartWidget/></NavLink>
    <div id="numerocarrito">{productos.length}</div>
    </nav>
}

export default Navbar