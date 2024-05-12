/**
 * Saves the leaderboard data to local storage.
 * @param {Array} leaderboard - Array of player objects with name and score.
 */
export const saveLeaderboard = (leaderboard) => {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
};

/**
 * Loads the leaderboard data from local storage.
 * @returns {Array} - Array of player objects with name and score.
 */
export const loadLeaderboard = () => {
    return JSON.parse(localStorage.getItem('leaderboard')) || [];
};
