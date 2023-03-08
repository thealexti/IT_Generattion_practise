import s from './CompletedWork.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import left_vector from '../../assets/icons/left_vector.svg';
import center_vector from '../../assets/icons/center_vector.svg';
import right_vector from '../../assets/icons/right_vector.svg';

const CompletedWork = () => {
    return (
        <div className={s.wrapper}>
            <Container className={` mr-4 ${s.completedWork}`}>
                <Row>
                    <Col>
                        <h2 className={` d-flex justify-content-center ${s.completedWork__heading}`}>3000+ Completed Work</h2>
                        <h2 className={`d-flex justify-content-center mb-5 ${s.completedWork__heading}`}>Which WE have Successfully Done</h2>
                    </Col>
                </Row>
                <Row className={`d-flex justify-content-between ${s.completedWork__row}`}>
                    <Col className='align-self-start text-center col-xxl-2 col-xl-2 col-lg-2 p-0 m-0'>
                        <div className={s.completedWork__card}>
                            <h3 className={s.completedWork__card_heading}>
                                980
                            </h3>
                            <p className={s.completedWork__card_paragraph}>
                                Project
                            </p>
                        </div>
                    </Col>
                    <Col className='p-0 m-0 align-self-center'>
                        <div className={s.completedWork__vector}>
                            <img src={left_vector} alt="vector" />
                        </div>
                    </Col>
                    <Col className='align-self-end text-center col-xxl-2 col-xl-2 col-lg-2 p-0 m-0'>
                        <div className={s.completedWork__card}>
                            <h3 className={s.completedWork__card_heading}>
                                520
                            </h3>
                            <p className={s.completedWork__card_paragraph}>
                                Happy Client
                            </p>
                        </div>
                    </Col>
                    <Col className='p-0 m-0 align-self-center'>
                    <div className={s.completedWork__vector}>
                            <img src={center_vector} alt="vector" />
                        </div>
                    </Col>
                    <Col className='align-self-start text-center col-xxl-2 col-xl-2 col-lg-2 p-0 m-0'>
                        <div className={s.completedWork__card}>
                            <h3 className={s.completedWork__card_heading}>
                                330
                            </h3>
                            <p className={s.completedWork__card_paragraph}>
                                Winners
                            </p>
                        </div>
                    </Col>
                    <Col className='p-0 m-0 align-self-center'>
                    <div className={s.completedWork__vector}>
                            <img src={right_vector} alt="vector" />
                        </div>
                    </Col>
                    <Col className='align-self-end text-center col-xxl-2 col-xl-2 col-lg-2 p-0 m-0'>
                        <div className={s.completedWork__card}>
                            <h3 className={s.completedWork__card_heading}>
                                120
                            </h3>
                            <p className={s.completedWork__card_paragraph}>
                                Recommend
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default CompletedWork;
