import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import style from './style.module.scss'

import { Link } from 'react-router-dom';

const HotelNav = () => {
    return (
        <Navbar expand="lg" className={style['newnav']}>
            <Container>
                <Navbar.Brand href="#home" className={style['logo-div']}><img src='images/logo.png' alt='logo' className={style['logo']} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={style['navbar-contents']}>

                        <Link to={''} className={style['navbar-hyperlinks']}>
                            Home
                        </Link>
                        <Link to={'facilities'} className={style['navbar-hyperlinks']}>
                            Facilities
                        </Link>
                        <Link to={'rooms'} className={style['navbar-hyperlinks']}>
                            Rooms
                        </Link>
                        <Link to={'contact'} className={style['navbar-hyperlinks']}>
                            Contact-us
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HotelNav