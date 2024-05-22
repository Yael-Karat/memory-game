import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button} from 'react-bootstrap';
import Card from './Card';
import { shuffleCards, checkMatch } from '../utils/gameLogic';
import { calculateScore } from '../utils/scoreCalculator';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/storage';
import LeaderboardTable from './LeaderboardTable';
import { playMatchSound, playPopSound, playSuccessSound } from '../utils/soundEffects';

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
                setTimeout(() => {
                    playSuccessSound();
                }, 0.3 * 1000);
                // playMatchSound(); // Play sound effect when a match is found
            }
            setTimeout(() => {
                setFlippedCards([]);
            }, duration * 1000);
        }
    }, [flippedCards, duration]);

    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            setGameOver(true);
            setTimeout(() => {
                playMatchSound();
            }, 2.3 * 1000);
        }
    }, [matchedCards, cards]);

    const handleCardClick = (id) => {
        if (flippedCards.length === 2 || matchedCards.includes(id) || flippedCards.some(card => card.id === id)) {
            return;
        }
        playPopSound();
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
        <Container className="mt-2">
            <h1 className="text-center">Memory Game</h1>
            <p className="text-center">Click on the cards to flip them and find the matching pairs with as few flips as possible.</p>
            <div className="text-center mb-3">Steps: {steps}</div>
            {!gameOver && (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gap: '1rem',
                    justifyItems: 'center',
                    alignItems: 'stretch',
                    margin: '0 auto',
                    maxWidth: '500px',
                    border: '1px solid #DEDEDE',
                    padding: '5px',
                    boxShadow: '0 0 4px 4px #DEDEDE'
                }}>
                    {cards.map((card) => (
                        <div key={card.id} style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}>
                            <Card
                                card={card}
                                isFlipped={flippedCards.includes(card) || matchedCards.includes(card.id)}
                                onClick={() => handleCardClick(card.id)}
                            />
                        </div>
                    ))}
                </div>
            )}
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