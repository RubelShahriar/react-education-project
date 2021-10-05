import React from 'react';
import './CourseOneComp.css';
import { Card, Col } from 'react-bootstrap';

const CourseOneComp = (props) => {
    const {course, image, price, duration} = props.service;

    return (
        <div className='service-comp'>
          {/* use react-bootstrap card to show items */}
        <Col>
          <Card >
            <div className='image'>
            <Card.Img variant="top" src={image} />
            </div>
            <div className='text'>
            <Card.Body>
              <Card.Title><h3>Name: {course}</h3></Card.Title>
              <Card.Text>Price: {price}</Card.Text>
              <Card.Text>Duration: {duration}</Card.Text>
            </Card.Body>
            </div>
          </Card>
        </Col> 
        </div>
    );
};

export default CourseOneComp;