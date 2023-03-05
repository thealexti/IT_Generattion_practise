import { Col, Container, Row } from 'react-bootstrap';
// import s from './WhatWeDo.module.scss';
import Card from '../Card/Card';

const WhatWeDo = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>WHAT WE DO</h3>
                    <h2>Our Service</h2>
                </Col>
            </Row>
            <Row>
                <Card />
            </Row>
            <Row></Row>
        </Container>
    );
}

export default WhatWeDo;