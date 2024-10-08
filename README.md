# 🎴 Memory Game
## Authors
**Amit Lap** & **Yael Karat** - [@Yael-Karat](https://github.com/Yael-Karat)

## React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You need to add relevant npm libraries and of course run npm install.

## Program Description

The Memory Game program is a React web-based application where players flip over cards to find matching pairs. The game includes features such as customizable game settings, a leaderboard to track high scores, and sound effects to enhance the user experience. Players start by entering their username and selecting game settings such as the number of rows and columns for the card grid and the delay time (seconds) after flipping 2 unmatched cards. The goal is to find all matching pairs with as few flips as possible.

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
    - Create an array of indices representing the images available. For example, if you have 16 unique images, create an array `[0, 1, 2, ..., 15]`.

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
    - Create card objects with a unique ID and the image filename. For example, the card object might look like `{ id: 0, image: '3.jpg' }`.

### Score Calculation:

The score is calculated based on the number of steps taken to complete the game:

1. **Initial Score**:
    - Start with a base score proportional to the total number of cards.

2. **Penalty for Steps**:
    - Subtract points based on the number of steps taken. More steps result in a lower score.

3. **Final Score**:
    - The final score is the base score minus the step penalties, encouraging players to complete the game in as few steps as possible.

### Sound Effects

The game includes sound effects to enhance the UX:

1. **Match Sound**:
    - Playing when a pair of cards match. This provides positive feedback to the player.

2. **Pop Sound**:
    - Playing when a card is clicked. This adds a tactile feel to the card flip action.

3. **Success Sound**:
    - Playing when the game is completed. This signals the end of the game and celebrates the player's success.

These sound effects are triggered at appropriate moments during gameplay to provide immediate feedback and make the game more engaging.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
