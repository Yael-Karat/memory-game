/**
 * Calculates the score based on the number of pairs and steps taken.
 * @param {number} numPairs - Total number of pairs in the game.
 * @param {number} numSteps - Total number of steps taken to complete the game.
 * @returns {number} - Final score.
 */
export function calculateScore(numPairs, numSteps) {
    const baseScore = numPairs * 100;
    const penalty = numSteps * 10;
    return Math.max(baseScore - penalty, 0);
}
