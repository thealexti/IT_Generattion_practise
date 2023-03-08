import s from './AboutUs.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import interior_img_2 from '../../assets/images/interior_2.png';
import dot_img_2 from '../../assets/images/dot_2.png';

const AboutUs = () => {
    return (
        <div className={s.wrapper}>
            <Container className={s.about_us}>
                <Row>
                    <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '>
                        <div className={s.about_us__img_left}>
                            <img src={interior_img_2} alt="interior" />
                        </div>
                    </Col>
                    <Col className='d-flex flex-column col-lg-6 col-md-6 col-sm-12 col-12'>
                        <h3 className={` mb-5 ${s.about_us__subheading}`}>ABOUT US</h3>
                        <h1 className={` mb-3 ${s.about_us__heading}`}>Interioris The Will <br /> of An Epoch Mextreo </h1>
                        <p className={` mb-5 ${s.about_us__text}`}>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form injected
                            humour, or randomised words which don't look even slightly
                            believable.If you are going to use a passage of Lorem Ipsum,
                            sure there isn't anything embarrassing hidden the middleof text.
                            All the Lorem Ipsum generators on the Internettend to repeat
                            predefined chunks as necessary,making this the first true
                            generator on the Internet.
                        </p>
                        <button className={` d-flex align-items-center justify-content-center ${s.about_us__btn}`} type='button'>LEARN MORE</button>
                    </Col>

                </Row>
                <Row>
                    <img className={s.about_us__dot_img} src={dot_img_2} alt="" />
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;