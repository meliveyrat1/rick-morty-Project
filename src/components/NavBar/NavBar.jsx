import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'


export default function NavBar(props){

    return(
        <div className={style.contenedor}>
           <nav className={style.btn}>
            <Link to="/about">
                <button className={style.button1}>About Me</button>
            </Link>
            <Link to="/home">
                <button className={style.button2}>Home</button>
            </Link>
            </nav>
             <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif' alt="" className={style.img}></img> 
        <SearchBar onSearch={props.onSearch} />
       {/* al comienzo se rompía, me decia que onSearch no es una función, es porque no le pasé aqui la prop onSearch */}
            </div>
    
   
   
        )
}