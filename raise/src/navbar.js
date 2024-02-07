import React,{useState} from 'react'
import './navbar.css';
import { Link } from "react-router-dom";

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
                    <Link className='option' to="./Loginpage">Log In</Link>
                    <Link className='option' to="./Signuppage">Sign Up</Link>
                </div>
                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {menuOpen && (
                    <div className="menu-options">
                        <Link className='menuoptions' to="./start" onClick={closeMenu}>Start a campaign</Link>
                        <Link className='menuoptions' to="./browse" onClick={closeMenu}>Browse a campaign</Link>
                        <Link className='menuoptions' to="https://www.youtube.com/" onClick={closeMenu}>Blogs</Link>
                        <Link className='menuoptions' to="https://www.youtube.com/" onClick={closeMenu}>Profile</Link>
                    </div>
                )}
            </div>
        </div>
    </>
);
};

export default Navbar;
