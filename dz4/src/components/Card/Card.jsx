// import s from './Card.module.scss';
import React, { useState, useEffect } from 'react';
import design_icon from '../../assets/icons/design_1.svg';
import architecture_icon from '../../assets/icons/architecture_1.svg';
import planning_icon from '../../assets/icons/planning_1.svg';

const apiUrl = 'https://my-json-server.typicode.com/your-username/your-repository-name/cards';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setCards(data);
            });
    }, []);

    const handleClick = (category) => {
        setCategory(category);
    }

    const filteredCards = category === 'all' ? cards : cards.filter(card => card.category === category);
    const displayedCards = filteredCards.slice(0, 5);

    return (
        <div>
            <div>
                <button onClick={() => handleClick('all')}>ALL</button>
                <button onClick={() => handleClick('INTERIOR DESIGN')}>INTERIOR DESIGN</button>
                <button onClick={() => handleClick('ARCHITECTURE')}>ARCHITECTURE</button>
                <button onClick={() => handleClick('PLANNING')}>PLANNING</button>
            </div>
            <div>
                {displayedCards.map((card) => (
                    <div key={card.id}>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        <img src={card.imageUrl} alt={card.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;