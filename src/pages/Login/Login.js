import styles from "./Login.module.css";

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();

    setError('');

    console.log('Ok');

    try {
      await handleLoginWithGoogle();
    }
    catch(error) {
      setError('Ocorreu um erro no login com o Google. Por favor, tente novamente!')
    }
  }

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <div className={styles.container_btn}>
          {!loading && <button className="btn">Entrar</button>}

          {!loading && <button className={styles.btn_google} onClick={handleLoginWithGoogle}>
            <FaGoogle className={styles.google_icon} />
            Entrar com o Google
          </button>}

          {loading && (
            <button className="btn" disabled>
            Aguarde...
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </div>

      </form>
    </div>
  );
};

export default Login;