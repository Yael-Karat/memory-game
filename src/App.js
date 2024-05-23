import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import Leaderboard from './components/Leaderboard';

/**
 * The main application component.
 *
 * This component sets up the routing for the application using React Router.
 * It defines the different routes and the components that should be rendered
 * for each route.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App = () => (
    <Routes>
        {/* Route for the start screen */}
        <Route path="/" element={<StartScreen />} />

        {/* Route for the game screen */}
        <Route path="/game" element={<GameScreen />} />

        {/* Route for the leaderboard screen */}
        <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
);

export default App;