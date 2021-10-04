import React from 'react';
import './Campus.css';

const Campus = () => {
    return (
        <div className='campus'>
             <h2>Our Campus</h2> 
            <div className='flex'>
            <div className='campus-item'>
                <div className='image'>
                <img src='https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                </div>
                <div className='text'>
                    <h3>Our Lab Campus</h3>
                    <p>One of the top reasons that traditional campus life can benefit a student’s college life is having contact with professors and instructors. With online learning, their performance, or a project.</p>
                </div>
            </div>
            <div className='campus-item'>
                <div className='image'>
                <img src='https://cdn.pixabay.com/photo/2017/08/07/04/47/stanford-university-2599981__480.jpg' alt=''/>
                </div>
                <div className='text'>
                    <h3>Our IT Campus</h3>
                    <p>Everyone has their own unique way of learning. Not only on a social level is this important level also, it allows students to discuss what they do and do not understand with each other and help one another. </p>
                </div>
            </div>
            <div className='campus-item'>
                <div className='image'>
                <img src='https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                </div>
                <div className='text'>
                    <h3>Data Science Campus</h3>
                    <p>Before online learning got in the game, on-campus learning was the only efficient learning format.It creates a routine which the students have to follow, and in turn, this will bring punctuality and discipline.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Campus;