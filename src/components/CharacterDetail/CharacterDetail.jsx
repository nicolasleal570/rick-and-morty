import { useHistory } from 'react-router-dom';
import styles from './CharacterDetail.module.css';

function CharacterDetail({ character }) {
  const history = useHistory();

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
      </article>
    </div>
  );
}

export default CharacterDetail;
