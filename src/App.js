import './App.css';
import { Routes, Route,useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AboutMe from './components/About/About';
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';


function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'meliveyrat@gmail.com';
   const PASSWORD = 'asdasd7';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
  
   function onClose(id){
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <>
      {
         location.pathname !== '/'
         ? 
         <NavBar onSearch={onSearch}/>
         : null
      }
      {/* lo que hace esto es mostrar el cliente en que ruta está
      y si no está en '/' me va a redirigir al comp home donde se rnderiza el nav y
      todos loscomponentes */}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/" element={<Form login={login}/>}/>
      </Routes>
      </>

   );
}

export default App;
