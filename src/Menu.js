import React, { useState } from 'react';
import './estilos.css'; // Estilos CSS

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand"> 
        <h3>PARCIAL 1</h3>
        </div>
        <ul className={menuOpen ? "menu-links active" : "menu-links"}>
          <li><a href="./conceptos">Sección de Conceptos</a></li>
          <li><a href="./alumnos">Seccion de Alumnos</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
