import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';


function App() {

   const [characters, setCharacters] = useState([]);

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
      <div className='App'>
        {/*  <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <NavBar onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />

      
      </div>
   );
}

export default App;
