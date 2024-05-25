import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importar Link desde React Router
import './recuperar.css'; // Asegúrate de importar el archivo de estilos CSS correspondiente

const RecuperarScreen = () => {
  const [isSelected, setIsSelected] = useState(false);

  // Función para manejar el clic en una opción
  const handleOptionClick = (ruta) => {
    // Aquí puedes agregar lógica para manejar la navegación
    console.log('Navegando a:', ruta);
  };

  return (
    <div className="backgroundImage">
      <div className="container">
        <div className="textContainer">
          <h1 className="headerText">Ecommerce Inicia sesión o crea una cuenta</h1>
        </div>
        <div className="formContainer">
          <h1 className="title">Recuperar contraseña</h1>
          <p className="smallerText">
            Introduce la dirección de correo electrónico con la que te registraste
            en Ecommerce y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          <div className="input-group">
            <FontAwesomeIcon icon={faSearch} className="option-icon" />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="input-field"
            />
          </div>

          <button className="btn" onClick={() => handleOptionClick('/restablecerContraseña')}>
            Recuperar contraseña
          </button>

          <Link to="/createAccount" className="linkText">Volver al inicio de sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default RecuperarScreen;
