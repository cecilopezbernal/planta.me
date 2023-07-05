// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className='menu'>
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand  className='mb-4 mt-1 mx-4'><img className='img-logo' src="./img/logo-plantame.png" alt="logo planta.me" /></Navbar.Brand>
                </Link>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='mx-3'>
                            <NavLink to="/categoria/2">Plantas</NavLink> 
                        </Nav.Link>
                        <Nav.Link className='mx-3'>
                            <NavLink to="/categoria/3">Macetas</NavLink> 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar

