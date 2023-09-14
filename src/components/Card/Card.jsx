import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id,name, image, status, gender, onClose}) {
   return (
      <div className={style.contenedor}>
         <button className={style.btn} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={style.name}>{name}</h2>
         </Link>
         <img  className={style.img}src={image} alt='' /> 
         
         
      </div>
   );
}
