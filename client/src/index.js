import React from 'react';
import {createRoot} from 'react-dom/client'; //not a deafault export
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

