import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className= 'logo'>
                <h2>UniLearn</h2>
            </div>
            {/* use link to the navbar as nav items */}
            <div className='nav-item'>
                <Link to='/home' className='item'>Home</Link>
                <Link to='/aboutUs' className='item'>About Us</Link>
                <Link to='/service' className='item'>Service</Link>
                <Link to='/campus' className='item'>Campus</Link>
            </div>
        </div> 
    );
};

export default Header;