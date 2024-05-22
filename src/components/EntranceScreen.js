import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import SettingsModal from './GameSettingsModal';

const defaultSettings = { rows: 4, cols: 4, duration: 1 };

const StartScreen = () => {
    const [name, setName] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState(defaultSettings);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (name.trim() === '' || name.length > 12 || /[^A-Za-z0-9]/.test(name.trim())) {
            setError('Please enter a valid Username with up to 12 alphanumeric characters.');
            return;
        }
        if ((settings.rows * settings.cols) % 2 !== 0) {
            setError('Number of cards (rows X columns) must be even, please correct your choice.');
            return;
        }
        setError('');
        navigate('/game', { state: { name, settings } });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleStart();
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Memory Game</h1>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="name">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Username including letters and digits only"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength="12"
                        onKeyDown={handleKeyDown}
                    />
                </Form.Group>
                {error && <div className="text-danger mt-2">{error}</div>}
                <Button variant="primary" onClick={handleStart} className="mt-3">Start Game</Button>
                <Button variant="secondary" onClick={() => setShowSettings(true)} className="mt-3 mx-2">Settings</Button>
                <Button variant="info" onClick={() => navigate('/leaderboard')} className="mt-3">Leaderboard</Button>
            </Form>
            <SettingsModal
                show={showSettings}
                onHide={() => setShowSettings(false)}
                settings={settings}
                setSettings={setSettings}
                defaultSettings={defaultSettings}
            />
        </Container>
    );
};

export default StartScreen;
