import React from 'react';
import { Container } from 'react-bootstrap';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';

const Footer = () => {

    const socialLinks = [
        {name: 'Linkedin', icon: Linkedin, url:'https://www.linkedin.com/in/kavindu-dissanayake-b06455214'},
        {name: 'Github', icon: Github, url:'https://github.com/kavindusd'},
        {name: 'Email', icon: Envelope, url:'mailto:kavindusd2000@gmail.com'}
    ];
    return (
        // bg-dark and text-white for dark footer, py-3 for vertical padding
        <footer className='bg-dark text-white py-3 mt-auto'>
            <Container className='d-flex justify-content-between align-items-center'>
                <p className='mb-0 small'>&copy; 2025 Kavindu's Portfolio. All rights reserved.</p>
                <div className='d-flex gap-5'>
                    {socialLinks.map((link) =>{

                        const IconComponent = link.icon;
                        return(
                            <a
                                key = {link.name}
                                href = {link.url}
                                target ="_blank"
                                rel = "noopener noreferrer"
                                title = {link.name}
                                className="text-white hover-opacity" 
                                style={{ fontSize: '1 rem' }}>
                                    <IconComponent />
                            </a>
                        );
                    })}
                </div>
            </Container>
        </footer>
    );
};

export default Footer;