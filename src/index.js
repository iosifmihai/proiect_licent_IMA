import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// Creează rădăcina React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Randează aplicația cu BrowserRouter
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
