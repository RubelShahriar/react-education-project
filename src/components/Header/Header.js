import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='border'>
            <div className= 'logo'>
                <p>UniLearn</p>
            </div>
            <div className='nav-item'>
                <Link to='/home' className='item'>Home</Link>
                <Link to='/about' className='item'>About Us</Link>
                <Link to='/service' className='item'>Service</Link>
                <Link to='/campus' className='item'>Campus</Link>
            </div>
        </div>
    );
};

export default Header;