/**
 * Shuffles the given array using Fisher-Yates algorithm.
 * @param {Array} array - Array to be shuffled.
 * @returns {Array} - Shuffled array.
 */
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
