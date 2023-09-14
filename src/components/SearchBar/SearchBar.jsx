import { useState } from 'react';
import style from './SearchBar.module.css'



export default function SearchBar({onSearch}) {

   const [id, setId]=useState("");

   function handleChange (event){
      //para guardar un evento que me llega cuando el usuario escriba algo 
      //seteo el evento setId, to se guarda en el etado id.
      setId(event.target.value)
   }
   
   return (
      <div >
     
         <div className={style.search}>
          <input className={style.searchBar} type='search' onChange={handleChange} value={id} />
          {/* cuando dice  que debo asignarle a éste el estado local como su value, es que debo poner el estado que esoy usando en este compon, es decir id(es el estado local qwue creé al comienzo)*/}
         <button className={style.btn} onClick={()=>{onSearch(id); setId('')}}>Add</button>
         {/* para pasar argumentos a una funcion, en este caso id, debo hacerlo con un callback, xq si no si agrego directamnete a
         onSeacr se va a ejecutar la funcion y yo no quiero eso 
         el setId(´´) es para que se borre después lo que se esbribe en el input*/} 
         </div>
      </div>
   );
}
