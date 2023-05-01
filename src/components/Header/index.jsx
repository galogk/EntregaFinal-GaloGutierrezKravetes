import styles from './header.module.css'
import { NavLink } from "react-router-dom"

function header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <nav className={styles.header}>
    <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/todo"><p>Todos los productos</p></NavLink>
    <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/men's clothing"><p>Ropa para hombres</p></NavLink>
    <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/women's clothing"><p>Ropa para mujeres</p></NavLink>
    <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/jewelery"><p>Joyería</p></NavLink>
    <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/productos/electronics"><p>Electronicos</p></NavLink>
    </nav>
  )
}

export default header