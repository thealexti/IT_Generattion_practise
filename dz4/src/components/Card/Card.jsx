import s from './Card.module.scss';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import design_icon from '../../assets/icons/design_1.svg';
import architecture_icon from '../../assets/icons/architecture_1.svg';
import planning_icon from '../../assets/icons/planning_1.svg';
import data_json from './db.json';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [category, setCategory] = useState('all');

    const test = JSON.stringify(data_json);
    console.log(JSON.parse(test))
    const handleClick = (category) => {
        setCategory(category);
    }

    // useEffect(() => {
    //     fetch( '/db' )
    //         .then(response => response.json())
    //         .then(data => {
    //             setCards(data);
    //         });
    // }, []);

    // const handleClick = (category) => {
    //     setCategory(category);
    // }

    const filteredCards = category === 'all' ? cards : cards.filter(card => card.category === category);
    const displayedCards = filteredCards.slice(0, 5);

    return (
        <div className={s.what_we_do__cards}>
            <Row className='mb-5'>
                <Col className='col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 '><button className={s.what_we_do__btn} onClick={() => handleClick('all')}>ALL</button></Col>
                <Col className='col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 '><button className={s.what_we_do__btn} onClick={() => handleClick('INTERIOR DESIGN')}>INTERIOR DESIGN</button></Col>
                <Col className='col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 '><button className={s.what_we_do__btn} onClick={() => handleClick('ARCHITECTURE')}>ARCHITECTURE</button></Col>
                <Col className='col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 '><button className={s.what_we_do__btn} onClick={() => handleClick('PLANNING')}>PLANNING</button></Col>
            </Row>
            <Row>
                <Col>
                    {displayedCards.map((card) => (
                        <div key={card.id}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <img src={card.imageUrl} alt={card.title} />
                        </div>
                    ))}
                </Col>
                <Col>
                    {displayedCards.map((card) => (
                        <div key={card.id}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <img src={card.imageUrl} alt={card.title} />
                        </div>
                    ))}
                </Col>
                <Col>
                    {displayedCards.map((card) => (
                        <div key={card.id}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <img src={card.imageUrl} alt={card.title} />
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    );
}

export default Card;