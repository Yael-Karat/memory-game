import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SettingsModal = ({ show, onHide, settings, setSettings, defaultSettings }) => {
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings({ ...settings, [name]: parseFloat(value) });
        setError('');
    };

    const handleSave = () => {
        if ((settings.rows * settings.cols) % 2 !== 0) {
            setError('Number of cards (rows X columns) must be even, please correct your choice.');
            return;
        }
        setError('');
        // onSave();
        onHide();
    };

    const handleClose = () => {
        setSettings(defaultSettings);
        setError('');
        onHide();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Game Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="rows">
                        <Form.Label>Number of rows:</Form.Label>
                        <Form.Control
                            as="select"
                            name="rows"
                            value={settings.rows}
                            onChange={handleChange}
                        >
                            {[2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="cols">
                        <Form.Label className="mt-3">Number of columns:</Form.Label>
                        <Form.Control
                            as="select"
                            name="cols"
                            value={settings.cols}
                            onChange={handleChange}
                        >
                            {[2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="duration">
                        <Form.Label className="mt-3">Delay (seconds):</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.1"
                            min="0.5"
                            max="2.0"
                            name="duration"
                            value={settings.duration}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {error && <div className="text-danger mt-2">{error}</div>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SettingsModal;