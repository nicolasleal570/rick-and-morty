import Axios from 'axios';
import { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList/CharactersList';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get('https://rickandmortyapi.com/api/character');
      const charactersData = res.data.results;
      setCharacters(charactersData);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {!isLoading ? (
        <CharactersList characters={characters} />
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default HomePage;
