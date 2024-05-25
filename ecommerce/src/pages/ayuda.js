// AyudaScreen.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importar Link desde React Router
import './ayuda.css'; // Asegúrate de importar el archivo de estilos CSS correspondiente

const AyudaScreen = () => {
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
          <h1 className="title">Obtener ayuda</h1>
          <p className="smallerText">
            Si tienes problemas para iniciar sesión, prueba las siguientes opciones.
            Para obtener ayuda adicional, obtén más información sobre problemas
            comunes de inicio de sesión.
          </p>

          <Link to="/buscarCuenta" className="option-box">
            <FontAwesomeIcon icon={faSearch} className="option-icon" />
            <div className="option-content">
              <span className="option-text">Busca tu cuenta</span>
              <p className="option-p">
                Escribe una dirección de correo electrónico o un número de teléfono que
                hayas utilizado con Adobe e intentaremos encontrarlo.
              </p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
          </Link>

          <Link to="/restablecerContraseña" className="option-box">
            <FontAwesomeIcon icon={faLock} className="option-icon" />
            <div className="option-content">
              <span className="option-text">Restablecer la contraseña</span>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" /> {/* Icono de flecha derecha */}
          </Link>
          
          <Link to="/createAccount" className="linkText">Volver al inicio de sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default AyudaScreen;
