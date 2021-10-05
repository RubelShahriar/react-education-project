import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CourseComp.css';

const CourseComp = (props) => {
    console.log(props.crs);
    const {course, image, price, duration} = props.course;

    return (
        <div className='coursecomp'>
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

export default CourseComp;