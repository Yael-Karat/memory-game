//import { shuffle } from './shuffle';

/**
 * Shuffles the given array of cards.
 * @param {Array} cards - Array of card objects.
 * @returns {Array} - Shuffled array of card objects.
 */
/**export function shuffleCards(cards) {
    return shuffle(cards);
}**/

/**
 * Checks if all cards on the board are flipped.
 * @param {Array} cards - Array of card objects representing the game board.
 * @returns {boolean} - True if all cards are flipped, false otherwise.
 */
/**export function allCardsFlipped(cards) {
    return cards.every(card => card.isFlipped);
}**/

/**
 * Handles the click event on a card.
 * @param {number} cardId - ID of the clicked card.
 * @param {Array} selectedCards - Array of IDs of currently selected cards.
 * @param {Array} cards - Array of card objects representing the game board.
 * @param {Function} setCards - Function to update the state of cards.
 * @param {Function} setSelectedCards - Function to update the state of selected cards.
 * @param {Function} setSteps - Function to update the number of steps.
 */
/**export function handleCardClick(cardId, selectedCards, cards, setCards, setSelectedCards, setSteps) {
    const selectedCard = cards.find(card => card.id === cardId);

    // If the selected card is already flipped or if there are already two selected cards, return
    if (selectedCard.isFlipped || selectedCards.length === 2) {
        return;
    }

    const updatedCards = cards.map(card =>
        card.id === cardId ? { ...card, isFlipped: true } : card
    );

    const newSelectedCards = [...selectedCards, cardId];
    setSelectedCards(newSelectedCards);

    setCards(updatedCards);

    // If two cards are selected, check if they match
    if (newSelectedCards.length === 2) {
        checkMatch(newSelectedCards, cards, setCards, setSelectedCards, setSteps);
    }
}**/

/**
 * Checks if two selected cards are a match.
 * If they match, keeps them flipped; otherwise, flips them back.
 * @param {Array} selectedCards - Array of IDs of currently selected cards.
 * @param {Array} cards - Array of card objects representing the game board.
 * @param {Function} setCards - Function to update the state of cards.
 * @param {Function} setSelectedCards - Function to update the state of selected cards.
 * @param {Function} setSteps - Function to update the number of steps.
 */
/**function checkMatch(selectedCards, cards, setCards, setSelectedCards, setSteps) {
    const [firstCardId, secondCardId] = selectedCards;
    const firstCard = cards.find(card => card.id === firstCardId);
    const secondCard = cards.find(card => card.id === secondCardId);

    if (firstCard.image === secondCard.image) {
        // Match found, keep the cards flipped
        setSelectedCards([]);
        setSteps(steps => steps + 1);
    } else {
        // No match, flip the cards back after a delay
        setTimeout(() => {
            const resetCards = cards.map(card =>
                selectedCards.includes(card.id) ? { ...card, isFlipped: false } : card
            );
            setCards(resetCards);
            setSelectedCards([]);
            setSteps(steps => steps + 1);
        }, 1000);
    }
}**/

/**export const shuffleCards = (rows, cols) => {
    const cardImages = Array.from({ length: (rows * cols) / 2 }, (_, i) => `${i % 16}.jpg`);
    const cards = [...cardImages, ...cardImages].map((image, index) => ({ id: index, image }));
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
};**/

export const shuffleCards = (rows, cols) => {
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


export const checkMatch = (card1, card2) => {
    return card1.image === card2.image;
};




