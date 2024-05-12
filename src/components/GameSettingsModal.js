import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function GameSettingsModal() {
    const [rows, setRows] = useState(4);
    const [columns, setColumns] = useState(4);
    const [duration, setDuration] = useState(1.0);
    const navigate = useNavigate();

    const handleStartGame = () => {
        if ((rows * columns) % 2 !== 0) {
            alert('Number of cards (rows x columns) must be even, please correct your choice.');
            return;
        }
        navigate('/game');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="mt-5">
            <h1>Game Settings</h1>
            <Form>
                <Form.Group controlId="formRows">
                    <Form.Label>Number of rows:</Form.Label>
                    <Form.Control type="number" value={rows} min={2} max={5} onChange={(e) => setRows(parseInt(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="formColumns">
                    <Form.Label>Number of columns:</Form.Label>
                    <Form.Control type="number" value={columns} min={2} max={5} onChange={(e) => setColumns(parseInt(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="formDuration">
                    <Form.Label>Duration (in seconds):</Form.Label>
                    <Form.Control type="number" value={duration} min={0.5} max={2.0} step={0.1} onChange={(e) => setDuration(parseFloat(e.target.value))} />
                </Form.Group>
                <Button variant="primary" className="mr-2" onClick={handleStartGame}>Start Game</Button>
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
            </Form>
        </div>
    );
}

export default GameSettingsModal;
