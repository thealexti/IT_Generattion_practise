import s from './Header.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import interior_img from '../../assets/images/interior_1.png';
import dot_img from '../../assets/images/dot.png';

const Header = () => {
    return (
        <Container className={` mr-4 ${s.header}`}>
            <Row>
                <Col className='d-flex flex-column justify-content-center'>
                    <h3 className={` mb-3 ${s.header__subheading}`}>MODERN INTERIOR</h3>
                    <h1 className={` mb-5 ${s.header__heading}`}>Create Your Interior Design.</h1>
                    <p className={` mb-5 ${s.header__text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation.
                    </p>
                    <button className={` d-flex align-items-center justify-content-center ${s.header__btn}`} type='button'>CONTACT</button>
                </Col>
                <Col className='col-lg-6 col-ml-6 col-sm-12 col-xs-12'>
                    <div className={s.header__img_right}>
                        <img src={interior_img} alt="interior" />
                    </div>
                </Col>
            </Row>
            <Row>
                <div className={s.header__img_left}>
                    <img src={dot_img} alt='dot' />
                </div>
            </Row>
        </Container>
    );
}

export default Header;