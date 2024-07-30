
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


const App = () => {

  const [listPok,setListPok] = useState([]);

    const cargar = () => {
      const URL = "https://pokeapi.co/api/v2/pokemon/?limit=807/";
      
      axios.get(URL)
        .then((resp) => {
          setListPok(resp.data.results);
        })
        .catch((error) => {
          console.log("Ocurrio un error");
        });

    }

  return(
    <>
    <div className='container'>
      <button onClick={cargar}>Fetch Pokemon</button>
      <ul>
        {listPok.map((pokemon,index) => (
        <li key ={index}> 
          {pokemon.name}
        </li>
        ))}
      </ul>
    </div>
    </>
  )
}


export default App;
