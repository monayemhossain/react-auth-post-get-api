import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <div className="container">
                <div className="logo">
                    <h1>React Auth</h1>
                </div>
                <nav className='navigation'>
                    <Link to="home">Home </Link>
                    <Link to="login">Login </Link>
                    <Link to="register">Register </Link>
                  
                </nav>
            </div>
        </div>
    );
};

export default Nav;