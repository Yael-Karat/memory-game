import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; // Import the Card component
import { shuffleCards, handleCardClick, allCardsFlipped } from '../utils/gameLogic';
import { createBoard } from '../utils/boardCreation';
import { calculateScore } from '../utils/scoreCalculator';

const TOTAL_PAIRS = 8;
const IMAGES = [...Array(16).keys()].map(i => ({
    id: i,
    image: `/public/images/${i}.jpg`,
    isFlipped: false,
}));

function GameScreen() {
    const [steps, setSteps] = useState(0);
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const shuffledCards = shuffleCards(IMAGES);
        const board = createBoard(shuffledCards, 4, 4);
        setCards(board);
    }, []);

    const handleClick = (cardId) => {
        if (selectedCards.length < 2) {
            handleCardClick(cardId, selectedCards, cards, setCards, setSelectedCards, setSteps);
        }
    };

    useEffect(() => {
        if (allCardsFlipped(cards) && steps > 0) { // Add steps > 0 condition to prevent premature navigation
            const score = calculateScore(TOTAL_PAIRS, steps);
            navigate(`/leaderboard/${score}`);
        }
    }, [cards, steps, navigate]);


    const handleAbandon = () => {
        navigate('/');
    };

    return (
        <div className="mt-5">
            <h1>Memory Game</h1>
            <p>Steps: {steps}</p>
            <div className="row">
                {cards.map(card => (
                    <div key={card.id} className="col-3 mt-3">
                        <Card
                            image={card.image}
                            flipped={card.isFlipped}
                            onClick={() => handleClick(card.id)}
                        />
                    </div>
                ))}
            </div>
            <button className="btn btn-danger mt-4" onClick={handleAbandon}>Abandon</button>
        </div>
    );
}

export default GameScreen;
