import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import ProfileImage from '../assets/profileimg.jpg';
import { Link } from 'react-router-dom';

const InfoCard = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center justify-content-center g-5"> {/* g-5 adds gutter space */}
                {/* Left Column for Text and Buttons */}
                <Col md={7} className="text-center text-md-start">
                    <h1 className='greeting'> {/* Primary blue color */}
                        Hello there!, I'm <br />Kavindu Dissanayake
                    </h1>
                    <p className="lead mt-3 my-descr">
                        "A Computer Science undergraduate from the University of Jaffna, dedicated to building innovative software solutions and actively exploring cutting-edge advancements in Information Technology."
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-5">
                        <Link to="/projects">
                            <Button variant="primary" size="lg" className="d-flex align-items-center">
                                View My Work <ArrowRight className="ms-2" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-secondary" size="lg" className='contactbtn'>
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </Col>

                <Col md={5} className="d-flex justify-content-center">
                    <Image
                        src={ProfileImage}
                        alt="Prifile pic"
                        style={{
                            zIndex: 1,
                            width: '300px',
                            height: '300px',
                            objectFit: 'cover',
                            objectPosition: 'center 5%',
                            border: '3px solid #007BFF',
                            borderRadius: '30%',
                            boxShadow: '0 0 15px rgba(0, 123, 255, 0.3)',
                            marginTop: '2rem'
                        }}
                    />
                </Col>
            </Row>
            <Row className="mt-5"></Row>

            <Container className='py-4 px-4 my-5 shadow'
            style={{
                borderRadius:'15px'
            }} >
                <Row className="mt-3 text-center">
                    <h2 className='skill-title'>Skills and Technologies</h2>
                    <Col md={3} className="text-center mt-5">
                        <h5>Languages</h5>
                        <ul className="d-flex flex-wrap gap-3 list-unstyled ">
                            <li className="px-3 py-1 text-primary rounded-pill fw-bold text-center mt-3 skill-lang">
                                Java
                            </li>

                            <li className="px-3 py-1 text-primary rounded-pill fw-bold text-center mt-3 skill-lang ">
                                JavaScript
                            </li>

                            <li className="px-3 py-1 text-primary rounded-pill fw-bold text-center skill-lang">
                                C#
                            </li>

                            <li className="px-3 py-1 text-primary rounded-pill fw-bold text-center skill-lang">
                                HTML/CSS
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="text-center mt-5">
                        <h5>Frameworks</h5>
                        <ul className="d-flex flex-wrap gap-3 list-unstyled ">
                            <li className="px-3 py-1  rounded-pill fw-bold text-center mt-3 skill-frmwrk">
                                Node Js
                            </li>
                            <li className="px-3 py-1  rounded-pill fw-bold text-center mt-3 skill-frmwrk">
                                Express Js
                            </li>
                            <li className="px-3 py-1  rounded-pill fw-bold text-center skill-frmwrk">
                                React
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="text-center mt-5">
                        <h5>Databases</h5>
                        <ul className="d-flex flex-wrap gap-3 list-unstyled ">
                            <li className="px-3 py-1  rounded-pill fw-bold text-center mt-3 skill-dbs">
                                MongoDB  
                            </li>
                            <li className="px-3 py-1  rounded-pill fw-bold text-center mt-3 skill-dbs">
                                PHP  
                            </li>
                            <li className="px-3 py-1  rounded-pill fw-bold text-center skill-dbs">
                                MySQL 
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="text-center mt-5">
                        <h5>Other</h5>
                        <ul className="d-flex flex-wrap gap-3 list-unstyled ">
                            <li className="px-3 py-1  rounded-pill fw-bold text-center mt-3 skill-other">
                                Figma
                            </li>
                            <li className="px-3 py-1  rounded-pill fw-bold text-center mt-3 skill-other">
                                Wix
                            </li>
                            <li className="px-3 py-1  rounded-pill fw-bold text-center skill-other">
                                WordPress
                            </li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default InfoCard;