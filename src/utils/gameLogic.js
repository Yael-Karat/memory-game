import { shuffleArray } from './shuffle';

/**
 * Shuffles the cards based on the given rows and columns.
 *
 * This function utilizes the shuffleArray function to generate a shuffled set
 * of card objects for the game board based on the provided number of rows and columns.
 *
 * @param {number} rows - The number of rows in the game board.
 * @param {number} cols - The number of columns in the game board.
 * @returns {Array} The shuffled array of card objects with unique IDs and image paths.
 */
export const shuffleCards = (rows, cols) => {
    return shuffleArray(rows, cols);
};

/**
 * Checks if two cards are a matching pair.
 *
 * This function compares the images of two card objects to determine if they match.
 *
 * @param {Object} card1 - The first card object to be compared.
 * @param {Object} card2 - The second card object to be compared.
 * @param {string} card1.image - The image path of the first card.
 * @param {string} card2.image - The image path of the second card.
 * @returns {boolean} Returns true if the images of both cards match, otherwise false.
 */
export const checkMatch = (card1, card2) => {
    return card1.image === card2.image;
};