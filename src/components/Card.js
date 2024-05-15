/**import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

function Card({ image, flipped, onClick }) {
    return (
        <BootstrapCard
            style={{
                cursor: 'pointer',
                backgroundColor: flipped ? 'white' : 'lightgray',
                height: '100px',
                textAlign: 'center',
            }}
            onClick={flipped ? null : onClick}
        >
            {flipped ? <img src={require(`/public/images/${image}`).default} alt="card" style={{ height: '100%' }} /> : 'Click'}
        </BootstrapCard>
    );
}

export default Card;**/

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


