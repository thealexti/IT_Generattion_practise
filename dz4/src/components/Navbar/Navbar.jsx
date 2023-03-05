import s from './Navbar.module.scss';
import logo from '../../assets/icons/logo.svg';
import {Container, Navbar, Nav} from 'react-bootstrap';

const Custom_navbar = () => {
    return (
        <Navbar className='bg-white' collapseOnSelect expand="lg" fixed="top">
            <Container className='mt-5'>
                <Navbar.Brand className={s.custom_navbar__logo} href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className={s.custom_navbar__nav_item} href="#home"><span>HOME</span></Nav.Link>
                        <Nav.Link className={s.custom_navbar__nav_item} href="#link">PROJECT</Nav.Link>
                        <Nav.Link className={s.custom_navbar__nav_item} href="#home">SERVICES</Nav.Link>
                        <Nav.Link className={s.custom_navbar__nav_item} href="#link">ABOUT</Nav.Link>
                        <Nav.Link className={s.custom_navbar__nav_item} href="#home">BLOG</Nav.Link>
                        <Nav.Link className={s.custom_navbar__nav_item} href="#link">SHOP</Nav.Link>
                        <Nav.Link className={s.custom_navbar__nav_item} href="#home">CONTACT</Nav.Link>
                        <button className={`ms-xl-5 ms-lg-3 ${s.custom_navbar__nav_button}`} type='button'>Sing Up</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Custom_navbar;