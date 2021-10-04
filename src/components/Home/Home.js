import React from 'react';
import './Home.css';
import About from '../AboutUs/AboutUs';
import Service from '../Service/Service';
import Campus from '../Campus/Campus';

const Home = () => {
    return (
        <div className='home'>
            <About></About>
            <Service></Service>
            <Campus></Campus>
        </div>
    );
};

export default Home;