import styles from "./item.module.css";
import { Link } from "react-router-dom";

const item = ({producto}) => {
  return (
      <Link to={`${producto.id}`} className={styles.container}>
        <div className={styles.info}>
          <h4>{producto.title}</h4>
          <p>${producto.price}</p>
          <p>{producto.category}</p>
        </div>
          <img src={producto.image} alt={producto.title}/>
      </Link>
  )
}

export default item