import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../letter-m.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="navtitle" >
                <img id="logoHenry" src={Logo} width="45" height="45" className="logoM" alt="MoviesApp" />
                <h1>ovies App</h1>
            </div>            
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink className="list-item a" exact to="/" >Home</NavLink>
                        <NavLink className="list-item a" to="/favs" >Favorites</NavLink>
                        <NavLink className="list-item a" to="/about" >About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}