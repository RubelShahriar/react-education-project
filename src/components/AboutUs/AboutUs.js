import React from 'react';
import './About.css';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <h2>About Us</h2>
            <div className='about'>
            <div className='text'>
                <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.</p>
            </div>
            <div className='image'>
                <img src='http://html.kodesolution.live/s/studypress/v6.0/demo/images/about/3.jpg' alt=''/>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;