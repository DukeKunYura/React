import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Компонент отображает меню со ссылками для навигации
 */
export default function Menu() {
    return (

        <nav className='menu'>
            <NavLink className={({ isActive }) => "menu__item" + (!isActive ? "" : "-active")} to='/home'>Главная</NavLink>
            <NavLink className={({ isActive }) => "menu__item" + (!isActive ? "" : "-active")} to='/drift'>Дрифт-такси</NavLink>
            <NavLink className={({ isActive }) => "menu__item" + (!isActive ? "" : "-active")} to='/timeattack'>Time Attack</NavLink>
            <NavLink className={({ isActive }) => "menu__item" + (!isActive ? "" : "-active")} to='/forza'>Forza Karting</NavLink>

        </nav>
    )
}