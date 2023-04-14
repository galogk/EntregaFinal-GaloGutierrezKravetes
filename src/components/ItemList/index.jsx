import styles from "./itemlist.module.css";
import Item from "../Item";
import Header from "../Header";
import {useEffect, useState} from "react";

const itemlist = ({category}) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        if (category !== "todo"){
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then ((res) => res.json())
            .then((data) => setProductos(data));
        } else {
            fetch(`https://fakestoreapi.com/products`)
            .then ((res) => res.json())
            .then((data) => setProductos(data));  
        }
    }, []);
    return (
        <div>
            <Header />
            <div className={styles.productos}>
            {productos.map((producto) => {
            return <Item producto={producto}/>
            })}
            </div>
        </div>
      );
}

export default itemlist