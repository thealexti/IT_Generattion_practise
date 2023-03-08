import s from './YearsOfSuccessful.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import number_img from '../../assets/images/number_20.png';
import interior_img from '../../assets/images/interior_3.png';
import dot_img from '../../assets/images/dot_2.png';

const YearsOfSuccessful = () => {
    return (
        <div className={s.wrapper}>
            <Container className={` mr-4 ${s.YearsOfSuccessful}`}>
                <Row>
                    <Col className='d-flex flex-column justify-content-center col-lg-6 col-md-6 col-sm-12 col-12'>
                        <img className={s.YearsOfSuccessful__number_img} src={number_img} alt="number_20" />
                        <h1 className={` mb-5 ${s.YearsOfSuccessful__heading}`}>Years Of Successful<br />Working<br />The MarketInterior</h1>
                        <button className={` d-flex align-items-center justify-content-center ${s.YearsOfSuccessful__btn}`} type='button'>CONTACT</button>
                    </Col>
                    <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className={s.YearsOfSuccessful__img_right}>
                            <img src={interior_img} alt="interior" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default YearsOfSuccessful;