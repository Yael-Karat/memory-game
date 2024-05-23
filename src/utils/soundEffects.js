/**
 * Plays the match sound effect.
 *
 * This function creates a new Audio object with the path to the match sound file
 * and plays the audio. It is used when a match is found in the game.
 */
export const playSuccessSound = () => {
    const audio = new Audio('/sounds/match.mp3');
    audio.play();
};

/**
 * Plays the pop sound effect.
 *
 * This function creates a new Audio object with the path to the pop sound file
 * and plays the audio. It is used when a card is clicked/flipped in the game.
 */
export const playPopSound = () => {
    const audio = new Audio('/sounds/pop.mp3');
    audio.play();
};

/**
 * Plays the success sound effect.
 *
 * This function creates a new Audio object with the path to the success sound file
 * and plays the audio. It is used when the game is successfully completed.
 */
export const playMatchSound = () => {
    const audio = new Audio('/sounds/success.mp3');
    audio.play();
};