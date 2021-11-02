import styles from './RegisterForm.module.css';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../utils/firebaseConfig';
import { UserContext } from '../../context/UserContext';

function RegisterForm() {
  const history = useHistory();
  const { createUser } = useContext(UserContext);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleGoogleLogin = async () => {
    console.log('GOOGLE_LOGIN');
  };

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    console.log({ inputName, value });
    setValues({ ...values, [inputName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );

    await createUser(
      {
        name: values.name,
        email: values.email,
        favorites: [],
        role: 'admin',
      },
      response.user.uid
    );
    history.push('/');

    console.log(response.user.uid);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Enter your name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleOnChange}
          />
        </div>

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

export default RegisterForm;
