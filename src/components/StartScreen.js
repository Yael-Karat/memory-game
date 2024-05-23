import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import SettingsModal from './SettingsModal';

// Default game settings
const defaultSettings = { rows: 4, cols: 4, duration: 1 };

/**
 * StartScreen Component
 *
 * This component renders the start screen of the memory game where users can enter their username,
 * adjust game settings, and navigate to the game or leaderboard.
 *
 * @returns {JSX.Element} The rendered start screen component.
 */
const StartScreen = () => {
    const [name, setName] = useState(''); // State for the username
    const [showSettings, setShowSettings] = useState(false); // State to control the visibility of the settings modal
    const [settings, setSettings] = useState(defaultSettings); // State for the game settings
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate(); // Hook to navigate programmatically

    /**
     * Handles the start button click.
     * Validates the username and settings, then navigates to the game screen if valid.
     *
     * @returns {void}
     */
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

    /**
     * Handles the 'Enter' key press in the username input field.
     * Triggers the start button click handler.
     *
     * @param {KeyboardEvent} event - The keyboard event.
     * @returns {void}
     */
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