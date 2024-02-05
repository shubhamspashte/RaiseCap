import React,{useState} from 'react'
import './navbar.css';
// import {link} from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

    const closeMenu = () => {
    setMenuOpen(false);
};
return (
    <>
        <div className='nb'>
            <div className='logo-and-title'>
                <img className='logo' src="/logo.png" alt="Raise_Logo" />
                <p className='head'>RaiseCap</p>
            </div>
            <div className="options-container">
                <div className="options">
                    <a className='option' href="./Loginpage">Log In</a>
                    <a className='option' href="./Signuppage">Sign Up</a>
                </div>
                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {menuOpen && (
                    <div className="menu-options">
                        <a className='menuoptions' href="https://www.youtube.com/" onClick={closeMenu}>Start a campaign</a>
                        <a className='menuoptions' href="./browse" onClick={closeMenu}>Browse a campaign</a>
                        <a className='menuoptions' href="https://www.youtube.com/" onClick={closeMenu}>Blogs</a>
                        <a className='menuoptions' href="https://www.youtube.com/" onClick={closeMenu}>Profile</a>
                    </div>
                )}
            </div>
        </div>
    </>
);
};

export default Navbar;
