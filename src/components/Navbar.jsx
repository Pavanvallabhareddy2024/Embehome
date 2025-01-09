import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo_512.png";
import "./Navbar.css";

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false); // Ensure the dropdown is hidden
    };

    return (
        <nav className="d-flex justify-content-between align-items-center p-2 fixed-top bg-white">
            {/* Logo and Hamburger Icon */}
            <div className="d-flex align-items-center w-100">
                <img src={logo} alt="Logo" style={{ height: '60px' }} />
                <h1 className="animated-text ms-2">EmbeHome Automations</h1>
                <span
                    className="edit-icon d-lg-none ms-auto"
                    onClick={toggleDropdown}
                    style={{ cursor: 'pointer' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="d-none d-lg-flex gap-4 align-items-center">
                <Link to="/" className="custom-link">Home</Link>
                <Link to="/about" className="custom-link">About</Link>
                <Link to="/contact" className="custom-link">Contact</Link>
                <button className="custom-button" onClick={() => alert('Logging out...')}>
                    Logout
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`d-lg-none mobile-dropdown ${isDropdownVisible ? 'd-flex' : 'd-none'} flex-column gap-3`}>
                <Link to="/" className="custom-link" onClick={closeDropdown}>Home</Link>
                <Link to="/about" className="custom-link" onClick={closeDropdown}>About</Link>
                <Link to="/contact" className="custom-link" onClick={closeDropdown}>Contact</Link>
                <button className="custom-button" onClick={() => {
                    alert('Logging out...');
                    closeDropdown();
                }}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
