import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

/**
 * Card Component
 *
 * This component represents a single card in the memory game. It displays either the card's image or the back of the card
 * based on its flipped state.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.card - The card object containing its id and image.
 * @param {boolean} props.isFlipped - Determines if the card is currently flipped.
 * @param {Function} props.onClick - Function to handle the card click event.
 * @returns {JSX.Element} The rendered card component.
 */
const Card = ({ card, isFlipped, onClick }) => {
    return (
        <BootstrapCard onClick={onClick} className="mb-2" style={{ cursor: 'pointer' }}>
            <BootstrapCard.Img
                variant="top"
                src={isFlipped ? `/images/${card.image}` : '/images/card.jpg'}
            />
        </BootstrapCard>
    );
};

export default Card;