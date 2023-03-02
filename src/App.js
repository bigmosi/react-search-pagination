import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './component/PokemonList';
import Pagination from './component/Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState();


  useEffect(() => {
    setLoading(true)
    axios
      .get(currentPageUrl)
      .then(response => {
        setLoading(false)
        setNextPageUrl(response.data.next)
        setPrevPageUrl(response.data.previous)
        setPokemon(response.data.results.map(name => name.name))
      })    
  }, [currentPageUrl]);

  if (loading) return (
    <div>
      Loading...
    </div>
  );

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <div className="App">
       <PokemonList pokemon={pokemon} />
       <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
    </div>
  );
}

export default App;
