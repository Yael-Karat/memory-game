/**
 * Calculates the score based on the number of pairs and steps taken.
 * @param {number} numCards - Total number of cards in the game.
 * @param {number} numSteps - Total number of steps taken to complete the game.
 * @returns {number} - Final score.
 */
export function calculateScore(numCards, numSteps) {
    const baseScore = numCards * 100;
    const penalty = numSteps * 10;
    return Math.max(baseScore - penalty, 0);
}