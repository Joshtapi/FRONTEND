import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Importar Link desde React Router
import './createAccount.css'; // Importar el archivo de estilos CSS correspondiente

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implementar la lógica de creación de cuenta aquí
  };

  const handleSocialLogin = (provider) => {
    // Implementar la lógica de inicio de sesión social aquí
    console.log('Iniciar sesión con:', provider);
  };

  return (
    <div className="backgroundImage">
      <div className="container">
        <div className="textContainer">
          <h1 className="headerText">Ecommerce Inicia sesión o crea una cuenta</h1>
        </div>
        <div className="formContainer">
          <p className="stepText">Paso 1 de 2</p>
          <h2 className="title">Crear una cuenta</h2>

          <div className="socialIconContainer">
            <button className="socialIcon" onClick={() => handleSocialLogin('google')}>
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </button>
            <button className="socialIcon" onClick={() => handleSocialLogin('facebook')}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </button>
            <button className="socialIcon" onClick={() => handleSocialLogin('microsoft')}>
              <FontAwesomeIcon icon={faWindows} size="2x" />
            </button>
            <button className="socialIcon" onClick={() => handleSocialLogin('apple')}>
              <FontAwesomeIcon icon={faApple} size="2x" />
            </button>
          </div>

          <div className="separatorLine">
            <div style={{ width: '45%', height: 2, backgroundColor: 'black' }} />
            <div style={{ width: 20, height: 20, borderRadius: 25, backgroundColor: 'black' }} />
            <div style={{ width: '45%', height: 2, backgroundColor: 'black' }} />
          </div>

          <p className="registerWithEmail">Registrarse con el correo electrónico</p>

          {/* Botón para crear una cuenta */}
          <Link to="/Login" className="link">
            <span className="link">¿Ya tienes una cuenta? Inicia sesión aquí</span>
          </Link>

          <input
            className="input"
            type="text"
            placeholder="Dirección de correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="buttonContainer">
            <button className="button" onClick={handleSignUp}>
              Continuar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
