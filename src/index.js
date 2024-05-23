import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Entry point for the React application.
 *
 * This file is responsible for rendering the main App component
 * into the DOM. It wraps the App component with a Router component
 * from React Router to enable client-side routing.
 *
 * @function
 * @returns {void}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Renders the main application component inside a Router.
 *
 * @returns {void}
 */
root.render(
    <Router>
        <App />
    </Router>
);