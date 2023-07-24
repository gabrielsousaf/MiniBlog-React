import styles from "./Register.module.css";

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';


const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, loginWithGoogle, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();

    setError('');
    console.log('Ok')

    try{
      await loginWithGoogle()
    }

    catch (error){
      setError('Ocorreu um erro no login com o Google. Por favor, tenete novamente!')
    }
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
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
        <label className={styles.container_password}>
          <span>Senha:</span>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            className={styles.password}
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span className={styles.eye} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
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

export default Register;