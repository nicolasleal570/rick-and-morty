import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.css';

function CharacterCard({ id, name, photo, status, location, origin }) {
  const statusClasses = {
    Alive: 'alive-color',
    Dead: 'dead-color',
    unknown: 'unkknow-color',
  };

  return (
    <div className={styles.container}>
      <picture className={styles.pictureContainer}>
        <img src={photo} alt={name} />
      </picture>

      <section className={styles.content}>
        <Link to={`/characters/${id}`} >
          <h3 className={styles.name}>{name}</h3>
        </Link>
        <div className={styles.status}>
          <span
            className={`${styles.point} ${styles[statusClasses[status]]}`}
          />
          <p>{status}</p>
        </div>

        <div className={styles.moreInfo} style={{ marginBottom: '1.5rem' }}>
          <p className={styles.title}>Last known location:</p>
          <p className={styles.info}>{location}</p>
        </div>

        <div className={styles.moreInfo}>
          <p className={styles.title}>Origin:</p>
          <p className={styles.info}>{origin}</p>
        </div>
      </section>
    </div>
  );
}

export default CharacterCard;
