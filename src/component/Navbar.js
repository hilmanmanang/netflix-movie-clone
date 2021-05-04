import React, { useState, useEffect } from 'react';
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) handleShow(true);
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar" 
                src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
                alt="Avatar"
            />

        </div>
    )
}

export default Navbar
