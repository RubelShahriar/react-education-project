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
                    <h3>its our classroom</h3>
                    <p>hey what is your name do uyo want to learn code withthout somortihng we are hireing goofle sofrware inginear </p>
                </div>
            </div>
            <div className='campus-item'>
                <div className='image'>
                <img src='https://cdn.pixabay.com/photo/2017/08/07/04/47/stanford-university-2599981__480.jpg' alt=''/>
                </div>
                <div className='text'>
                    <h3>its our classroom</h3>
                    <p>hey what is your name do uyo want to learn code withthout somortihng we are hireing goofle sofrware inginear </p>
                </div>
            </div>
            <div className='campus-item'>
                <div className='image'>
                <img src='https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                </div>
                <div className='text'>
                    <h3>its our classroom</h3>
                    <p>hey what is your name do uyo want to learn code withthout somortihng we are hireing goofle sofrware inginear </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Campus;