import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import './createAccount_parte02.css';
import { Link } from 'react-router-dom';

const SignUpScreen = ({ navigation }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSignUp = () => {
    // Implementar la lógica de creación de cuenta aquí
  };

  return (
    <div className="backgroundImage">
      <div className="container">
        <div className="textContainer">
          <h1 className="headerText">Ecommerce Inicia sesión o crea una cuenta</h1>
        </div>
        <div className="formContainer">
          <p className="stepText">Paso 2 de 2</p>
          <h1 className="title">Crear una cuenta</h1>

          <p className="registerWithEmail">Registrarse con el correo electrónico</p>

          <Link to="/Login" className="link">
            <span className="link">¿Ya tienes una cuenta? Inicia sesión aquí</span>
          </Link>

          <div className="horizontalContainer">
            <input
              className="input"
              placeholder="Nombres"
              style={{ marginRight: '10px' }} // Añade margen a la derecha del primer input
            />
            <input
              className="input"
              placeholder="Apellidos"
            />
          </div>


          <div className="dateContainer">
            <div className="input dateInput">
              <input placeholder="Mes" />
            </div>
            <input
              className="input"
              placeholder="Año"
            />
          </div>

          <div className="input">
            <input placeholder="País/Región" />
          </div>

          <p className="termsText">Grupo de empresas de Ecommerce puede mantenerme al día con correos electrónicos personalizados sobre productos y servicios. Consulta nuestra Política de privacidad para conocer más detalles o darte de baja en cualquier momento.</p>

          <div className="checkBoxContainer">
            <FontAwesomeIcon
              icon={isSelected ? faCheckSquare : faSquare}
              size="lg"
              color={isSelected ? '#007bff' : '#aaa'}
              onClick={() => setIsSelected(!isSelected)}
              style={{ marginRight: 10 }}
            />
            <span className="checkBoxText">Deseo que me contacten por correo electrónico</span>
          </div>

          <p className="termsText">Al hacer clic en Crear cuenta, reconozco que he leído y aceptado las Condiciones de uso y la Política de privacidad.</p>

          <div className="buttonContainer">
            <button className="button" onClick={handleSignUp}>
              <span className="buttonText">Continuar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
