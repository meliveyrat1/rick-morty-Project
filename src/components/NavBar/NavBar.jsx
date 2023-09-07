import SearchBar from "../SearchBar/SearchBar";

 


export default function NavBar(props){

    return(
        <SearchBar onSearch={props.onSearch}/>
        /* al comienzo se rompía, me decia que onSearch no es una función, es porque no le pasé aqui la prop onSearch */
    )
}