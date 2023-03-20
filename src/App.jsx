import './App.css';
import { useEffect, useState} from "react";
import axios from "axios";
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import ItemDetalle from "./components/ItemDetalle";
import { Routes, Route } from "react-router-dom";


function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
  axios
  .get("https://fakestoreapi.com/products")
  .then ((res) => setProductos(res.data))
  .catch((err) => console.log(err));
  }, []);

  return (
      <div>
        <h1>TreKIT</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<p>Bienvenido a nuestro sitio web sobre nuestra empresa: TreKIT!</p>}/>
          <Route path="/nosotros" element={<p>Texto Placeholder para agregar mas tarde: Informacion sobre nuestra empresa</p>} />
          <Route path="/contacto" element={<p>Informacion de Contacto falsa</p>} />
          <Route path="/productos" element={<ItemList productos={productos}/>} />
          <Route path="/productos/:id" element={<ItemDetalle productos={productos}/>} />
          <Route path="/carrito" element={<p>Texto Placeholder para agregar mas tarde: Productos agregados junto con numeros que representan la cantidad total de elementos que agregaste</p>} />
          <Route path="*" element={<p>404 - Pagina no encontrada.</p>} />
        </Routes>
      </div>
  )
}

export default App
