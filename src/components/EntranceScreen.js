import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function EntranceScreen() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleStartGame = () => {
        if (name.trim().length > 0) {
            navigate('/game');
        } else {
            alert('Please enter your name.');
        }
    };

    const handleLeaderboard = () => {
        navigate('/leaderboard');
    };

    const handleSettings = () => {
        navigate('/settings');
    };

    return (
        <div className="mt-5">
            <h1 className="mb-4">Memory Game</h1>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Button variant="primary" className="mr-2" onClick={handleStartGame}>Start Game</Button>
                <Button variant="secondary" className="mr-2" onClick={handleLeaderboard}>Leaderboard</Button>
                <Button variant="secondary" onClick={handleSettings}>Settings</Button>
            </Form>
        </div>
    );
}

export default EntranceScreen;
