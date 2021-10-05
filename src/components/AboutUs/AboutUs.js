import React from 'react';
import './About.css';

const AboutUs = () => {
    return (
    // show abot part text and image
        <div className='about-us'>
            <h2>About Us</h2> 
            <div className='about-learn'>
            <div className='text'>
                <p>Do you want to learn to code but feel put off by the cost of coding classes? If you think computer science and learning to code might be your jam, but aren’t ready to spend money on getting the skills, this is the roundup for you.</p>
                <p>
                If you want to really master coding skills, you’ll eventually want to dive into a more in-depth coding class option. But you can learn some of the basics, like HTML, CSS, and JavaScript, for free while you decide if you’re ready to take your development skills to the next level.</p>
            </div>
            <div className='image'>
                <img src='https://media.istockphoto.com/photos/computer-programmer-working-on-laptop-picture-id1265176772?b=1&k=20&m=1265176772&s=170667a&w=0&h=IHFnvxa3kvVTuZcEfPpCSGIFA_gNT7dIlGDR7eD2cFI=' alt=''/>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;