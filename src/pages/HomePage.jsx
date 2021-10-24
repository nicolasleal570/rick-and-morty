import Axios from 'axios';
import { useEffect, useState } from 'react';
import CharactersList from '../components/CharactersList/CharactersList';

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    setIsLoading(true);
    const response = await Axios.get(
      'https://rickandmortyapi.com/api/character'
    );
    setCharacters(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CharactersList characters={characters} />
      )}
    </>
  );
}

export default HomePage;
