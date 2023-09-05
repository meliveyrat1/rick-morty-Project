import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const {characters} = props
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
           onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      })
     }
   </div>;
}
