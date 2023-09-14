import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
   return <div className={style.contenedor}>
     {
      characters.map(({id,name,status,species,gender,origin,image}) =>{
         return <Card
           key={id}
           name={name}
           status={status}
           species={species}
           gender={gender}
           origin={origin.name}
           image={image}
           id={id}/* aqui era necesario poner el id xq se rompia todo cuando ponia el detal de cada card
           porque el padre (cards) le debe pasar al hijo el id */
           onClose={()=>onClose(id)}
         />
      })
     }
   </div>;
}
