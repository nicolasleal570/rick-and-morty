import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import CharacterDetail from '../components/CharacterDetail/CharacterDetail';

function CharacterPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <CharacterDetail character={character} />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default CharacterPage;
