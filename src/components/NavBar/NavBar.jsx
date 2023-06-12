import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className='menu'>
            <Container fluid>
                <Navbar.Brand href="#" className='mb-4 mt-1 mx-4'><img className='img-logo' src="../public/img/logo-plantame.png" alt="logo planta.me" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='mx-3'>Plantas</Nav.Link>
                        <Nav.Link href="#action2" className='mx-3'>Macetas</Nav.Link>
                        <Nav.Link href="#action3"  className='mx-3'>Rebajas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar

