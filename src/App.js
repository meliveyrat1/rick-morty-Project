import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      
      </div>
   );
}

export default App;
