import React from 'react';
import './CardList.scss';
import { CardItem } from './CardItem';

const CardList = ({ cards }) => {
    return (
        <div className='card-wrapper'>
            {cards.map((card, i) => (
                <CardItem key={i} card={card} />
            ))}
        </div>
    );
};

export default CardList;
