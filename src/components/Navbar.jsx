import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo_512.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav
            style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                background: '#fff',
                color: '#fff',
                padding: '0.5rem',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/* Logo Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                    src={logo}
                    alt="Logo"
                    style={{ height: '60px' }}
                />
                <h1 className='animated-text'>EmbeHome Automations</h1>
            </div>

            {/* Navigation Links and Logout */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem', // Space between links and logout
                }}
            >
                {/* Navigation Links */}
                <div
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'center',
                    }}
                >
                    <Link to="/"  className="custom-link">
                        Home
                    </Link>
                    <Link to="/about"  className="custom-link">
                        About
                    </Link>
                    <Link to="/contact"  className="custom-link">
                        Contact
                    </Link>
                </div>

                {/* Logout Button */}
                <button
                    className="custom-button"
                    onClick={() => alert('Logging out...')}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
