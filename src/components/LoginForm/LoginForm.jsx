import styles from './LoginForm.module.css';

function LoginForm() {
  const handleGoogleLogin = async () => {
    console.log('GOOGLE_LOGIN');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('LOGIN_PASSWORD');
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
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Enter your password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
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
