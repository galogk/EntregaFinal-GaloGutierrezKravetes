import styles from './header.module.css'
import { NavLink } from "react-router-dom"

function header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <nav className={styles.header}>
      <h1 className={styles.segundoTitle}>Nuestros Productos</h1>
      <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/"><p>Todos los productos</p></NavLink>
      <div className={styles.categorias}>
        <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/men's clothing"><p>Ropa para hombres</p></NavLink>
        <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/women's clothing"><p>Ropa para mujeres</p></NavLink>
        <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/jewelery"><p>Joyería</p></NavLink>
        <NavLink  style={({isActive}) => (isActive ? activeStyle : undefined)} to="/electronics"><p>Electronicos</p></NavLink>
      </div>
      
    </nav>
  )
}

export default header