import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import LeaderboardTable from './LeaderboardTable';

/**
 * Leaderboard Component
 *
 * This component displays the leaderboard screen, showing the players' scores.
 * It retrieves the leaderboard data from localStorage and displays it in a table.
 *
 * @returns {JSX.Element} The rendered leaderboard screen component.
 */
const Leaderboard = () => {
    const navigate = useNavigate();
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    /**
     * Handles the navigation back to the start screen.
     */
    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Leaderboard</h1>
            <LeaderboardTable leaderboard={leaderboard} />
            <Button variant="secondary" className="mt-3" onClick={handleBackClick}>Back</Button>
        </Container>
    );
};

export default Leaderboard;