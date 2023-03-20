import {useState, useEffect} from "react";
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
    
return (
<div className={styles.container}>     
    <div className={styles.info}>
        <h4>{productos.title}</h4>
        <p>${productos.price}</p>
        <p>{productos.category}</p>
    </div>
    <img src={productos.image} alt={productos.title}/>
    <p>{productos.description}</p>
</div>
)
}

export default ProductoDetalle