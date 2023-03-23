import styles from './header.module.css'
import { NavLink } from "react-router-dom"

function header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <nav className={styles.header}>
    <NavLink reloadDocument style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/ "><p>Todos los productos</p></NavLink>
    <NavLink reloadDocument style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/men"><p>Ropa para hombres</p></NavLink>
    <NavLink reloadDocument style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/women"><p>Ropa para mujeres</p></NavLink>
    <NavLink reloadDocument style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/jewelry"><p>Joyería</p></NavLink>
    <NavLink reloadDocument style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/electronics"><p>Electronicos</p></NavLink>
    </nav>
  )
}

export default header