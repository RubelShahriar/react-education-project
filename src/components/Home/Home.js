import React from 'react';
import './Home.css';
import About from '../AboutUs/AboutUs';
import Campus from '../Campus/Campus';
import CourseOne from '../CourseOne/CourseOne';

const Home = () => {
    return (
        <div className='home'>
            <About></About>
            <CourseOne></CourseOne>
            <Campus></Campus>
        </div>
    );
};

export default Home;