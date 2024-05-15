/**import React, { useState, useEffect } from 'react';
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

export default GameScreen;**/

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Card from './Card';
import { shuffleCards, checkMatch } from '../utils/gameLogic';
import { calculateScore } from '../utils/scoreCalculator';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/storage';
import LeaderboardTable from './LeaderboardTable';

const Game = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, settings } = location.state || {};
    const { rows, cols, duration } = settings;

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [steps, setSteps] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [playerRank, setPlayerRank] = useState(null);
    const [finalScore, setFinalScore] = useState(null);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        if (!name || !settings) {
            navigate('/');
            return;
        }
        const shuffledCards = shuffleCards(rows, cols);
        setCards(shuffledCards);
    }, [name, settings, navigate, rows, cols]);

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [first, second] = flippedCards;
            if (checkMatch(first, second)) {
                setMatchedCards((prev) => [...prev, first.id, second.id]);
            }
            setTimeout(() => {
                setFlippedCards([]);
            }, duration * 1000);
        }
    }, [flippedCards, duration]);

    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            setGameOver(true);
        }
    }, [matchedCards, cards]);

    const handleCardClick = (id) => {
        if (flippedCards.length === 2 || matchedCards.includes(id) || flippedCards.some(card => card.id === id)) {
            return;
        }
        const clickedCard = cards.find(card => card.id === id);
        setFlippedCards([...flippedCards, clickedCard]);
        setSteps(steps + 1);
    };

    const handleFinish = () => {
        navigate('/');
    };

    useEffect(() => {
        if (gameOver) {
            const score = calculateScore(rows * cols, steps);
            setFinalScore(score);
            const leaderboard = loadFromLocalStorage('leaderboard') || [];
            const normalizedName = name.trim().toLowerCase();
            const existingEntry = leaderboard.find(entry => entry.name === normalizedName);
            if (existingEntry) {
                if (score > existingEntry.score) {
                    existingEntry.score = score;
                    existingEntry.cards = rows * cols;
                }
            } else {
                const newEntry = { name: normalizedName, score, cards: rows * cols };
                leaderboard.push(newEntry);
            }
            leaderboard.sort((a, b) => b.score - a.score);
            saveToLocalStorage('leaderboard', leaderboard);

            const rank = leaderboard.findIndex(entry => entry.name === normalizedName) + 1;
            setPlayerRank(rank);
            setLeaderboard(leaderboard);
        }
    }, [gameOver, name, rows, cols, steps]);

    return (
        <Container className="mt-5">
            <h1 className="text-center">Memory Game</h1>
            <p className="text-center">Click on the cards to flip them and find the matching pairs with as few flips as possible.</p>
            <div className="text-center mb-3">Steps: {steps}</div>
            <Row className="justify-content-center">
                {cards.map(card => (
                    <Col key={card.id} xs={3} sm={2} md={1}>
                        <Card
                            card={card}
                            isFlipped={flippedCards.includes(card) || matchedCards.includes(card.id)}
                            onClick={() => handleCardClick(card.id)}
                        />
                    </Col>
                ))}
            </Row>
            {gameOver && (
                <div className="text-center mt-4">
                    <h2>Game Over</h2>
                    <p>Name: {name}</p>
                    <p>Score: {finalScore}</p>
                    <p>Rank: {playerRank}</p>
                    <p>Number of cards: {rows * cols}</p>
                    <h3 className="mt-4">Leaderboard</h3>
                    <LeaderboardTable leaderboard={leaderboard} />
                </div>
            )}
            <div className="text-center mt-3">
                {gameOver ? (
                    <Button variant="success" onClick={handleFinish}>Finish</Button>
                ) : (
                    <Button variant="secondary" onClick={handleFinish}>Abandon</Button>
                )}
            </div>
        </Container>
    );
};

export default Game;





