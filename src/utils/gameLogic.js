import {shuffleArray} from "./shuffle";

export const shuffleCards = (rows, cols) => {
    return shuffleArray(rows, cols);
};

export const checkMatch = (card1, card2) => {
    return card1.image === card2.image;
};