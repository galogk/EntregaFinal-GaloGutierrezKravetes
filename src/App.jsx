import './App.css';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import ItemDetalle from "./components/ItemDetalle";
import { Routes, Route } from "react-router-dom";

function App() {


  return (
      <div>
        <h1>TreKIT</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<p>Bienvenido a nuestro sitio web sobre nuestra empresa: TreKIT!</p>}/>
          <Route path="/nosotros" element={<p>Texto Placeholder para agregar mas tarde: Informacion sobre nuestra empresa</p>} />
          <Route path="/contacto" element={<p>Informacion de Contacto falsa</p>} />
          <Route path="/productos" element={<ItemList category="todo"/>} />
          <Route path="/productos/:id" element={<ItemDetalle/>} />
          <Route path="/productos/men" element={<ItemList category="men's clothing"/>} />
          <Route path="/productos/women" element={<ItemList category="women's clothing"/>} />
          <Route path="/productos/jewelry" element={<ItemList category="jewelery"/>} />
          <Route path="/productos/electronics" element={<ItemList category="electronics"/>} />
          <Route path="/productos/:categoria/:id" element={<ItemDetalle/>} />
          <Route path="/carrito" element={<p>Texto Placeholder para agregar mas tarde: Productos agregados junto con numeros que representan la cantidad total de elementos que agregaste</p>} />
          <Route path="*" element={<p>404 - Pagina no encontrada.</p>} />
        </Routes>
      </div>
  )
}

export default App
