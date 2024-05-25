import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde React Router
import './buscar.css'; // Asegúrate de importar el archivo de estilos CSS correspondiente

const BuscarScreen = () => {
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
        <div className="formContainer_01">
          <div className="contentTop"> {/* Nuevo contenedor para el contenido superior */}
            <h1 className="title">Busca tu cuenta</h1>
            <p className="smallerText">
              Introduce cualquier dirección de correo electrónico o número de teléfono con el código de país que hayas usado antes e intentaremos localizar tu cuenta.
            </p>
            <input
              className="input_01"
              type="text"
              placeholder="Dirección de correo electrónico o teléfono"
            />
            <div className="buttonContainer">
              <Link to="/login" className="linkText">
                Volver al inicio de sesión
              </Link>
              <button className="button" onClick={() => handleOptionClick('BuscarCuenta')}>
                <span className="buttonText">Continuar</span>
              </button>
            </div>
          </div>

          <div className="contentBottom"> {/* Nuevo contenedor para el contenido inferior */}
            <Link to="/ayuda" className="linkHelpText">
              ¿Necesitas más ayuda? Más información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscarScreen;