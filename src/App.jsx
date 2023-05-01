import './App.css';
import Home from './components/Home'
import Contacto from './components/Contacto'
import SobreNosotros from './components/SobreNosotros'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetalleContainer from "./components/ItemDetalleContainer";
import CartContext from "./components/CartContext"
import Pagar from "./components/Pagar"
import styles from "./components/HomeStyles/home.module.css"
import { Routes, Route } from "react-router-dom";
import { CarritoCounter } from './contexts/carritoCounter';

function App() {
  return (
      <div>
        <h1 className={styles.title}>TreKIT</h1>
        <CarritoCounter.Provider value={3}>
          <Navbar />
        </CarritoCounter.Provider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<SobreNosotros/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/productos/" element={<ItemListContainer/>} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
          <Route path="/productos/:categoria/:id" element={<ItemDetalleContainer/>} />
          <Route path="/carrito" element={<CartContext/>} />
          <Route path="/pagar" element={<Pagar/>} />
          <Route path="*" element={<p>404 - Pagina no encontrada.</p>} />
        </Routes>
      </div>
  )
}

export default App
