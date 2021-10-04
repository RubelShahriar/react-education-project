import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import CourseComp from '../CourseComp/CourseComp';
import './Service.css';

const Service = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setCourse(data.slice(0, 8)))
    },[]);

    return ( 
        <div className='service'>
            <h2>Our Services</h2>
            <Row xs={1} md={4} className="g-4"> 
            {
                course.map(course => <CourseComp
                key = {course.key}
                course = {course}
                ></CourseComp>)
            }
            </Row>
         </div> 
    );
};

export default Service;