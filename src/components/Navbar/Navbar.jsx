import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <ul className={styles.navbarContainer}>
      <li>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </li>

      <li>
        <Link to="/favorites" className={styles.link}>
          Favorites
        </Link>
      </li>

      <li className={styles.rightSide}>
        <div className={styles.container}>
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </div>

        <div className={styles.container}>
          <Link to="/register" className={styles.link}>
            Register
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default Navbar;
