import './App.css';
import Contacto from './components/Contacto'
import SobreNosotros from './components/SobreNosotros'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetalleContainer from "./components/ItemDetalleContainer";
import CartContext from "./components/CartContext"
import Pagar from "./components/Pagar"
import Gracias from "./components/Gracias"
import styles from "./components/HomeStyles/home.module.css"
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

function App() {
  return (
      <div>
        <h1 className={styles.title}>TreKIT</h1>
        <ShoppingCartProvider>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/:categoria" element={<ItemListContainer/>} />
            <Route path="/:categoria/:id" element={<ItemDetalleContainer/>} />
            <Route path="/nosotros" element={<SobreNosotros/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/carrito" element={<CartContext/>} />
            <Route path="/pagar" element={<Pagar/>} />
            <Route path="/gracias" element={<Gracias/>} />
            <Route path="*" element={<p>404 - Pagina no encontrada.</p>} />
          </Routes>
        </ShoppingCartProvider>

      </div>
  )
}

export default App
