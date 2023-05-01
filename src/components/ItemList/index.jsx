import styles from "./itemlist.module.css";
import Item from "../Item";

const itemlist = ({productos}) => {
    return (
        <div>
            <div className={styles.productos}>
            {productos.map((producto) => {
            return <Item producto={producto}/>
            })}
            </div>
        </div>
      );
}

export default itemlist