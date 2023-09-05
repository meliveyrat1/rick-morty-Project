import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.contenedor}>
         <button className={style.btn} onClick={props.onClose}>X</button>
         <h2>{props.id}</h2>
         <h2 className={style.name}>{props.name}</h2>
         <img  className={style.img}src={props.image} alt='img' /> 
         <div className={style.text}>
         <h2 >{props.status}</h2>
         <h2 >{props.gender}</h2>
         </div>
      </div>
   );
}
