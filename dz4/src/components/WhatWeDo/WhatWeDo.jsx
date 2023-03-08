import { Col, Container, Row } from 'react-bootstrap';
import s from './WhatWeDo.module.scss';
import Card from '../Card/Card';
import dot_img_1 from '../../assets/images/dot_1.png'

const WhatWeDo = () => {
    return (
        <div className={s.what_we_do}>
            <Container>
                <Row>
                    <Col>
                        <h3 className={s.what_we_do__subHeading}>WHAT WE DO</h3>
                        <h2 className={s.what_we_do__heading}>Our Service</h2>
                    </Col>
                </Row>
                <Card />
            </Container>
        </div >
    );
}

export default WhatWeDo;