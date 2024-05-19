import React from 'react';
import { Table } from 'react-bootstrap';

const LeaderboardTable = ({ leaderboard }) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {leaderboard.length === 0 ? (
                <tr>
                    <td colSpan="3" className="text-center">No scores yet!</td>
                </tr>
            ) : (
                leaderboard.sort((a, b) => b.score - a.score).map((entry, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{entry.name}</td>
                        <td>{entry.score}</td>
                    </tr>
                ))
            )}
            </tbody>
        </Table>
    );
};

export default LeaderboardTable;