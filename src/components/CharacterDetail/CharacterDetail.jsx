import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './CharacterDetail.module.css';

function CharacterDetail({ character }) {
  const history = useHistory();
  const { addCharacterToFavorite } = useContext(UserContext);

  const handleFavorite = async () => {
    console.log('HANDLE_FAVORITE');
    await addCharacterToFavorite(character.id);
  };

  console.log(character);

  return (
    <div className={styles.container}>
      <picture className={styles.imgContainer}>
        <img src={character.image} alt={character.name} />
      </picture>

      <article className={styles.information}>
        <h1>{character.name}</h1>

        <div
          className={`${styles.statusContainer} ${styles[character.status]}`}
        >
          {character.status}
        </div>

        <div className={styles.moreInfo} style={{ marginBottom: '1.5rem' }}>
          <p className={styles.title}>Specie:</p>
          <p className={styles.info}>{character.species}</p>
        </div>

        <div className={styles.moreInfo} style={{ marginBottom: '1.5rem' }}>
          <p className={styles.title}>Gender:</p>
          <p className={styles.info}>{character.gender}</p>
        </div>

        <div className={styles.moreInfo} style={{ marginBottom: '1.5rem' }}>
          <p className={styles.title}>Last known location:</p>
          <p className={styles.info}>{character.location.name}</p>
        </div>

        <div className={styles.moreInfo} style={{ marginBottom: '1.5rem' }}>
          <p className={styles.title}>Origin:</p>
          <p className={styles.info}>{character.origin.name}</p>
        </div>

        <div className={styles.moreInfo} style={{ marginBottom: '1.5rem' }}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => history.goBack()}
          >
            Go back
          </button>
        </div>

        <div className={styles.moreInfo} style={{ marginBottom: '1.5rem' }}>
          <button
            type="button"
            className={styles.favoriteBtn}
            onClick={handleFavorite}
          >
            Add to Favorite
          </button>
        </div>
      </article>
    </div>
  );
}

export default CharacterDetail;
