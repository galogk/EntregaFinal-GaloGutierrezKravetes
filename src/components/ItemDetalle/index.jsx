import {useState, useEffect, Children} from "react";
import { useParams } from "react-router-dom";
import styles from "./item.module.css";

const ProductoDetalle = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then ((res) => res.json())
            .then((data) => setProductos(data));
    }, []);

    const carrito = JSON.parse(localStorage.getItem("listaProductos"))  || []
    const agregarproducto = (id, productos) => {localStorage.setItem(id, productos)}

    const agregar = () => {
        carrito.push(productos)
        agregarproducto("listaProductos", JSON.stringify(carrito))
        document.getElementById("numerocarrito").innerHTML = carrito.length

    }
    
return (
<div className={styles.container}>     
    <div className={styles.info}>
        <h4>{productos.title}</h4>
        <p>${productos.price}</p>
        <p>{productos.category}</p>
    </div>
    <img src={productos.image} alt={productos.title}/>
    <p>{productos.description}</p>
    <button onClick={agregar}>Agregar al carrito</button>
</div>
)
}

export default ProductoDetalle