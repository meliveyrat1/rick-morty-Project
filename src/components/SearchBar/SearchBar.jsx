import style from './SearchBar.module.css'
import rymLogo from './rymLogo.png'


export default function SearchBar(props) {
   
   return (
      <div className={style.contenedor}>
         <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif' className={style.img}></img>
         <div className={style.search}>
          <input className={style.searchBar} type='search' />
         <button className={style.btn} onClick={()=>props.onSearch(2)}>Agregar</button> 
         </div>
      </div>
   );
}
