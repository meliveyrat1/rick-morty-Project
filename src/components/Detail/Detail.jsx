import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import style from './Detail.module.css';

function Detail() {
 const {id} = useParams();
 const [character, setCharacter] = useState({});

 useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


  return (
    <div >
        <div className={style.contenedor}>
         <div className={style.contImg}>

         <h1>{character?.name}</h1>
            <img src={character?.image} alt="" className={style.img}/>
         </div>
         <div  className={style.contInfo}>
      <h4>Status</h4>
      <p>{character?.status}</p>
      <h4>Specie</h4>
      <p>{character?.species}</p>
      <h4>Gender</h4>
      <p>{character?.gender}</p>
      <h4>Origin</h4>
      <p>{character?.origin?.name}</p>
      <Link to="/home">
      <button className={style.btn}>Back</button>
      </Link>
         </div>
        </div>
    </div>
  );
}

export default Detail;