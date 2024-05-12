import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntranceScreen from './components/EntranceScreen';
import GameScreen from './components/GameScreen';
import LeaderboardModal from './components/LeaderboardModal';
import GameSettingsModal from './components/GameSettingsModal';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<EntranceScreen />} />
                    <Route path="/game" element={<GameScreen />} />
                    <Route path="/leaderboard" element={<LeaderboardModal />} />
                    <Route path="/settings" element={<GameSettingsModal />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
