import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './components/EntranceScreen';
import Game from './components/GameScreen';
import Leaderboard from './components/GameSettingsModal';

const App = () => (
    <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
);

export default App;