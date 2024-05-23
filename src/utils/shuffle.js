/**
 * Shuffles the array of card images and returns the shuffled cards.
 *
 * This function generates a shuffled set of card images based on the provided
 * number of rows and columns. It ensures that the cards are selected and shuffled
 * randomly for each game.
 *
 * @param {number} rows - The number of rows in the game board.
 * @param {number} cols - The number of columns in the game board.
 * @returns {Array} The shuffled array of card objects with unique IDs and image paths.
 */
export const shuffleArray = (rows, cols) => {
    const totalCards = rows * cols;
    const halfTotalCards = totalCards / 2;

    // Create an array of indices [0, 1, 2, ..., 15] and shuffle it
    const allImages = Array.from({ length: 16 }, (_, i) => i);
    for (let i = allImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
    }

    // Select the first halfTotalCards from the shuffled indices
    const selectedImages = allImages.slice(0, halfTotalCards).map(i => `${i}.jpg`);

    // Create the card pairs and shuffle the combined array
    const cards = [...selectedImages, ...selectedImages].map((image, index) => ({ id: index, image }));
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
};