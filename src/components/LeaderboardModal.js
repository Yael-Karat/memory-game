import React from 'react';
import { loadLeaderboard } from '../utils/storage';
import { Table } from 'react-bootstrap';

function LeaderboardModal() {
    const leaderboard = loadLeaderboard();

    return (
        <div className="mt-5">
            <h1>Leaderboard</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {leaderboard.map((player, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default LeaderboardModal;
