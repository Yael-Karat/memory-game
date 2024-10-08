# <img src="https://github.com/user-attachments/assets/8e6794b9-31e3-447e-9c6d-3fb2f9ef913f" alt="Cartoonnetwork Matching Cards GIF" style="width: 100px; height: auto;"> Memory Game

## Authors

**Amit Lap** & **Yael Karat** - [@Yael-Karat](https://github.com/Yael-Karat)

## Program Description

The Memory Game program is a React web-based application where players flip over cards to find matching pairs.  
The game includes features such as customizable game settings, a leaderboard to track high scores, and sound effects to enhance the user experience.  
Players start by entering their username and selecting game settings such as the number of rows and columns for the card grid and the delay time (seconds) after flipping 2 unmatched cards.  
The goal is to find all matching pairs with as few flips as possible.

### GameFlow of the Program:

1. **Start Screen**:
    - The player enters their username and can customize game settings.
    - Validation ensures the username is alphanumeric and no more than 12 characters.
    - The player can click the Leaderboard button to enter the leader board table.

2. **Game Initialization**:
    - Upon starting the game, the cards are shuffled and displayed in a grid based on the selected rows and columns.

3. **Game Play**:
    - Players click on cards to flip them and reveal the images.
    - If a pair of cards match, they remain flipped; otherwise, they are flipped back after a short delay.
    - The player can click the Abandon button to return to Start Screen.

4. **Game Over**:
    - The game ends when all pairs are found.
    - The player's score is calculated and saved to the leaderboard (using Local Storage). the Leader board re-saves high score for the same player if he plays again (same name, not case sensitive).
    - Displays Name, Score, Rank, Number of cards and the leader board table.

5. **Leaderboard**:
    - Displays the player's name with the player's rank and the player's highest score.
    - Players can return to the start screen to play again or change settings.

### Algorithm for Selecting the Cards:

The card selection and shuffling process involves the following steps:

1. **Generate Indices for Cards**:
    - Create an array of indices representing the images available.  
   For example, if you have 16 unique images, create an array `[0, 1, 2, ..., 15]`.

2. **Shuffle the Array of Indices**:
    - Shuffle the array to randomize the order of the indices. This ensures that the selected cards will be in a random order each time the game starts.
    - The Fisher-Yates shuffle algorithm is typically used for this step. It involves iterating through the array from the last element to the first, swapping each element with a randomly selected element that comes before it (or with itself).

3. **Select a Subset of Images**:
    - Depending on the number of rows and columns specified in the game settings, calculate the total number of cards needed (`totalCards = rows * cols`).
    - Since the game uses pairs of cards, select the first `totalCards / 2` indices from the shuffled array.

4. **Create Pairs of Selected Images**:
    - Duplicate each selected index to create pairs. For instance, if the first half of the shuffled array includes indices `[3, 5, 1, 8]`, the paired array would be `[3, 5, 1, 8, 3, 5, 1, 8]`.

5. **Shuffle the Paired Cards**:
    - Shuffle the array of paired cards again to ensure that the pairs are randomly distributed on the game grid.
    - Use the Fisher-Yates shuffle algorithm again to randomize the order of the paired cards.

6. **Assign Images to Cards**:
    - Map each index to an image filename (e.g., `3` becomes `3.jpg`).
    - Create card objects with a unique ID and the image filename.  
   For example, the card object might look like `{ id: 0, image: '3.jpg' }`.

### Score Calculation:

The score is calculated based on the number of steps taken to complete the game:

1. **Initial Score**:
    - Start with a base score proportional to the total number of cards.

2. **Penalty for Steps**:
    - Subtract points based on the number of steps taken. More steps result in a lower score.

3. **Final Score**:
    - The final score is the base score minus the step penalties, encouraging players to complete the game in as few steps as possible.

### Sound Effects:

The game includes sound effects to enhance the UX:

1. **Match Sound**:
    - Playing when a pair of cards match. This provides positive feedback to the player.

2. **Pop Sound**:
    - Playing when a card is clicked. This adds a tactile feel to the card flip action.

3. **Success Sound**:
    - Playing when the game is completed. This signals the end of the game and celebrates the player's success.

These sound effects are triggered at appropriate moments during gameplay to provide immediate feedback and make the game more engaging.

## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  

## Installation

### Prerequisites:

- Node.js and npm installed

### Steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/memory-game.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd memory-game
    ```

3. **Start the server:**
    ```bash
    npm start
    ```
    
4. **Runs the app in the development mode:**  
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
   The page will reload when you make changes.  
   You may also see any lint errors in the console.
