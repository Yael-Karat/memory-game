/**
 * Creates a game board with shuffled cards.
 * @param {Array} cards - Array of card objects.
 * @param {number} rows - Number of rows for the game board.
 * @param {number} columns - Number of columns for the game board.
 * @returns {Array} - 2D array representing the game board.
 */
export function createBoard(cards, rows, columns) {
    const board = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(cards[i * columns + j]);
        }
        board.push(row);
    }

    return board;
}
