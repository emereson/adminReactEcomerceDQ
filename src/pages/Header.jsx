import React from 'react';
import { Link } from 'react-router-dom';
import './pagesStyle/header.css';

const Header = () => {
  const userDataJSON = localStorage.getItem('userData');
  const userData = JSON.parse(userDataJSON);

  return (
    <header className="header__container">
      <section className="header__section">
        <img src={userData?.user.userImg} alt="" />
        <h3>
          {userData?.user.name} {userData?.user.lastName}
        </h3>
      </section>
      <ul className="header__ul">
        <li>
          <Link to="/">Tus Pedidos</Link>
        </li>

        <li>
          <Link to="/secciones">Secciones</Link>
        </li>
        <li>
          <Link to="/observaciones">Tus Clientes</Link>
        </li>
        <li>
          <Link to="/examenes">Usuarios</Link>
        </li>

        <li>Cerrar Sesion</li>
      </ul>
    </header>
  );
};

export default Header;
