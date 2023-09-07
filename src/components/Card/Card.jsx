import style from "./Card.module.css"

export default function Card({name, image, status, gender, onClose}) {
   return (
      <div className={style.contenedor}>
         <button className={style.btn} onClick={onClose}>X</button>
         <h2 className={style.name}>{name}</h2>
         <img  className={style.img}src={image} alt='' /> 
         <div className={style.text}>
         <h2 >{status}</h2>
         <h2 >{gender}</h2>
         </div>
      </div>
   );
}
