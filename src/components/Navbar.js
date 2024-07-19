import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
        <div className='logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/COMSATS_new_logo.jpg/640px-COMSATS_new_logo.jpg' alt='Logo' />
        </div>
        <ul className='nav-links'>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar