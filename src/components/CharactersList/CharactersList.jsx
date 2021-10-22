import styles from './CharactersList.module.css';
import CharacterCard from '../CharacterCard/CharacterCard';

function CharactersList({ characters }) {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          photo={character.image}
          status={character.status}
          location={character.location.name}
          origin={character.origin.name}
        />
      ))}
    </div>
  );
}

export default CharactersList;
