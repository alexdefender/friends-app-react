import React from 'react';
import './CardItem.scss';

const CardItem = ({ card }) => {
    const { name, image, gender, location, species, status } = card;

    return (
        <section className='user-card'>
            <h3 className='name'>{name}</h3>
            <p>
                <img src={image} alt='' />
            </p>
            <ul className='user-card__info'>
                <li>
                    <b>Species:</b> {species}
                </li>
                <li>
                    <b>Gender:</b> {gender}
                </li>
                <li>
                    <b>Status:</b> {status}
                </li>
                <li>
                    <b>Location:</b> {location.name}
                </li>
            </ul>
        </section>
    );
};

export default CardItem;
