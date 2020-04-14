import React from 'react';
import './CardList.scss';
import { CardItem } from './CardItem';

const CardList = React.forwardRef(({ cards }, ref) => {
    return (
        <ul className='card-wrapper' ref={ref}>
            {cards.map((card, i) => (
                <CardItem key={i} card={card} />
            ))}
        </ul>
    );
});

export default CardList;
