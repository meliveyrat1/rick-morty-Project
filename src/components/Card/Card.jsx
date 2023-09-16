import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";

 function Card({id,name, image, onClose, addFavorite, removeFavorite}) {

const [isFav, setIsFav] = useState(false);

const handleFavorite = () =>{
   if(isFav){
      setIsFav(false);
      removeFavorite(id)
   }else{
      setIsFav(true);
      addFavorite({id,name, image})
   }
}

   return (
      <div className={style.contenedor}>

         <button className={style.btn} onClick={onClose}>X</button>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <Link to={`/detail/${id}`}>
         <h2 className={style.name}>{name}</h2>
         </Link>
         <img  className={style.img}src={image} alt='' /> 
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
  return {
   addFavorite: (character)=>{dispatch(addFavorite(character))},
   removeFavorite: (id)=>{dispatch(removeFavorite(id))} //aqui debo pasarle el id que me manda por props para despachar
  }
}

export default connect(
   null,
   mapDispatchToProps
)(Card)