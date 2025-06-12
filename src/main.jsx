import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-BL8X3TG7WF'; // Sostituisci con il tuo ID

// Inizializza GA4
ReactGA.initialize(TRACKING_ID);

createRoot(document.getElementById('root')).render(
    <App />
)
