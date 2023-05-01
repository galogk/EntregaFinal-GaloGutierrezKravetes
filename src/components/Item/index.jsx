import styles from "./item.module.css";
import { Link } from "react-router-dom";

const item = ({producto}) => {
    return (
      <Link to={`${producto.id}`} className={styles.container}>
        <div className={styles.info}>
          <h4 className={styles.title}>{producto.title}</h4>
          <div className={styles.extraInfo}>
            <p>${producto.price}</p>
            <p>{producto.category}</p>
          </div>
        </div>
        <div className={styles.img}>
          <img src={producto.image} alt={producto.title}/>
        </div>
          
      </Link>
  )
}

export default item