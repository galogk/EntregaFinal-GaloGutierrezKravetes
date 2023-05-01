import styles from  "./navbar.module.css"
import CartWidget from "../CartWidget/index.jsx"
import { NavLink } from "react-router-dom"
import { CarritoCounter } from "../../contexts/carritoCounter"
import { useContext } from "react"

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  }
  const value = useContext(CarritoCounter)
  
  return <nav className={styles.navbar}>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/"><p>Inicio</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/nosotros"><p>Sobre Nosotros</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/contacto"><p>Contactanos</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/todo"><p>Productos</p></NavLink>
    <NavLink style={({isActive}) => (isActive ? activeStyle : undefined)} to="/carrito"><CartWidget/></NavLink>
    <>{value}</>
    
    </nav>
}

export default Navbar