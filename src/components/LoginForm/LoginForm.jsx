import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './LoginForm.module.css';

import { auth, googleProvider } from '../../utils/firebaseConfig';
import { UserContext } from '../../context/UserContext';
import { useState } from 'react';

function LoginForm() {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    console.log({ inputName, value });
    setValues({ ...values, [inputName]: value });
  };

  // HANDLE GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    await auth.signInWithPopup(googleProvider);
    history.push('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(values.email, values.password);
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Enter your email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Enter your password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
      <button type="button" onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default LoginForm;
