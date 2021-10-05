import React, { useEffect, useState } from 'react';
import './CourseOne.css';
import { Row } from 'react-bootstrap';
import CourseOneComp from '../CourseOneComp/CourseOneComp';

const CourseOne = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./CourseOne.JSON')
            .then(res => res.json())
            .then(data => setService(data.slice(0, 4)))
    },[])
    return (
        <div className='course-one'>
            <h2>Our Services</h2>
            {/* use react-bootstrap card to show details */}
            <Row xs={1} md={4} className="g-4"> 
            {
                service.map(service => <CourseOneComp
                key = {service.key}
                service = {service}
                ></CourseOneComp>)
            }
            </Row>
        </div>
    );
};

export default CourseOne;