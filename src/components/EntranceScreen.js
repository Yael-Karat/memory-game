/**import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function EntranceScreen() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleStartGame = () => {
        if (name.trim().length > 0 && name.trim().length < 12) {
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

export default EntranceScreen; **/

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
        if (name.trim() === '' || name.length > 12 || /\W/.test(name)) {
            setError('Please enter a valid name with up to 12 alphanumeric characters.');
            return;
        }
        if ((settings.rows * settings.cols) % 2 !== 0) {
            setError('Number of cards (rows X columns) must be even, please correct your choice.');
            return;
        }
        setError('');
        navigate('/game', { state: { name, settings } });
    };

    const handleSaveSettings = () => {
        // Settings are already updated in the state
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Memory Game</h1>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name including letters and digits only"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength="12"
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
                onSave={handleSaveSettings}
                defaultSettings={defaultSettings}
            />
        </Container>
    );
};

export default StartScreen;




