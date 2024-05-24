/* eslint-disable react/prop-types */
import utezLogo from "../assets/images/logo-utez.png";

import "../assets/styles/NavigationMenu.css";

export const NavigationMenu = ({setShowModal}) => {
  return (
    <header className="navigation-container">
      <div className="logo-wrapper">
        <img src={utezLogo} alt="Utez Logo" />
        <h1>Procesador de Imagenes</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <button onClick={()=>setShowModal(true)} className="upload">Importar Imagen</button>
          </li>
          <li>
            <button className="export">Exportar Imagen</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
