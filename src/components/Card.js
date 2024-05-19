import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ card, isFlipped, onClick }) => {
    return (
        <BootstrapCard onClick={onClick} className="mb-2" style={{ cursor: 'pointer' }}>
            <BootstrapCard.Img variant="top" src={isFlipped ? `/images/${card.image}` : '/images/card.jpg'} />
        </BootstrapCard>
    );
};

export default Card;