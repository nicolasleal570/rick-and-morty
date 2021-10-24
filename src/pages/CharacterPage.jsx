import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail/CharacterDetail';

function CharacterPage() {
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacter = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(
        `https://rickandmortyapi.com/api/character/${params.characterId}`
      );
      setCharacter(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
      console.log('ERROR:', err);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
      {!isLoading && character ? (
        <CharacterDetail character={character} />
      ) : (
        <h1>Loading...</h1>
      )}

      {error && <h1>{error.message}</h1>}
    </>
  );
}

export default CharacterPage;
