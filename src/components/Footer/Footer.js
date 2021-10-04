import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='partnership'>
                <h3>Partnership</h3>
                <p>Email: david.smith@gmail.com</p>
                <p>28/a, South Carolina USA </p>
                <p>Contact Us</p>
            </div>
            <div className='about'>
                <h3>About</h3>
                <p>Website</p>
                <p>Social Media</p>
                <p>Testimonials</p>
            </div>
            <div className='support'>
                <h3>Support</h3>
                <p>Website term and conditions</p>
                <p>Social Media</p>
                <p>Privacy policy</p>
            </div>
        </div>
    );
};

export default Footer;