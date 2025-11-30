// client/src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import { useTheme } from '../context/Theme';
import { PostcardFill, SunFill, MoonFill } from 'react-bootstrap-icons';

const Header = () => {

    const { theme, toggleTheme } = useTheme();

    // Determine Navbar variant based on theme
    const isDark = theme === 'dark-theme';
    const navbarVariant = isDark ? 'dark' : 'light';
    const navbarBg = isDark ? 'dark' : 'light';

    return (
        <Navbar className='header shadow' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} to="/" className='header-brand'><PostcardFill className='me-2 fs-3'/>Portfolio</Navbar.Brand>               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* ms-auto pushes links to the right */}
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        {/*<Nav.Link as={Link} to="/admin">Admin</Nav.Link>*/}

                        <Button
                            variant={isDark ? 'outline-light': 'outline-dark'}
                            onClick={toggleTheme}
                            className='ms-3 d-flex align-items-center'
                            size='sm'>
                                {isDark ?(
                                    <>
                                    <SunFill className="me-1" /> Light Mode
                                    </>
                                ):(<>
                                    <MoonFill className="me-1" /> Dark Mode
                                    </>
                                )}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;  