import React from 'react';
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

export default Card;
