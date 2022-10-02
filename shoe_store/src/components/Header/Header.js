import React from 'react';
import logo from '../../img/header-logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="container">
            <nav className="navbar">
                <NavLink className={({ isActive }) => "nav-item" + (!isActive ? "" : "-active")} to="/home">
                    <img src={logo} alt="Bosa Noga" />
                </NavLink>
                <NavLink className={({ isActive }) => "nav-item" + (!isActive ? "" : "-active")} to="/home">Главная</NavLink>
                <NavLink className={({ isActive }) => "nav-item" + (!isActive ? "" : "-active")} to="/catalog.html">Каталог</NavLink>
                <NavLink className={({ isActive }) => "nav-item" + (!isActive ? "" : "-active")} to="/about.html">О магазине</NavLink>
                <NavLink className={({ isActive }) => "nav-item" + (!isActive ? "" : "-active")} to="/contacts.html">Контакты</NavLink>
                <div className="header-controls-pics">
                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                    {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                    <div className="header-controls-pic header-controls-cart">
                        <div className="header-controls-cart-full">1</div>
                        <div className="header-controls-cart-menu"></div>
                    </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                    <input className="form-control" placeholder="Поиск" />
                </form>


            </nav>
        </div>

    )
}
