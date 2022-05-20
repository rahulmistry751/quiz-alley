import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { QuizContextProvider } from './context/quiz-context';
import { ThemeContextProvider } from './context/theme-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
);

