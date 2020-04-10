import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            Navbar
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/divisi">Divisi</NavLink>
                </li>
                <li>
                    <NavLink to="/galeri">Galeri</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
