import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import LeaderboardTable from './LeaderboardTable';

const Leaderboard = () => {
    const navigate = useNavigate();
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    return (
        <Container className="mt-5">
            <h1 className="text-center">Leaderboard</h1>
            <LeaderboardTable leaderboard={leaderboard} />
            <Button variant="secondary" className="mt-3" onClick={() => navigate('/')}>Back</Button>
        </Container>
    );
};

export default Leaderboard;